// search.js

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchResultsDiv = document.getElementById('searchResults');
    const searchResultsSection = document.getElementById('searchResultsSection');

    // This API_KEY should ideally be consistent with the one in api.js,
    // or you could pass it from a global configuration.
    // For now, let's keep it here, but remember the security implications.
    const TMDB_API_KEY = 'ba3885a53bc2c4f3c4b5bdc1237e69a0'; // Your TMDb API Key
    const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
    const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            performSearch();
        }
    });

    async function performSearch() {
        const query = searchInput.value.trim();
        if (!query) {
            alert('Please enter a movie or TV show title to search.');
            return;
        }

        searchResultsDiv.innerHTML = ''; // Clear previous results
        // Hide other main sections and show search results
        document.querySelector('.sections-container').style.display = 'none';
        searchResultsSection.style.display = 'block';

        try {
            const searchUrl = `${TMDB_BASE_URL}/search/multi?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}`;
            const response = await fetch(searchUrl);
            const data = await response.json();

            if (data.results && data.results.length > 0) {
                displaySearchResults(data.results);
            } else {
                searchResultsDiv.innerHTML = '<p>No results found for your query.</p>';
            }
        } catch (error) {
            console.error('Error fetching search results:', error);
            searchResultsDiv.innerHTML = '<p>Error fetching search results. Please try again later.</p>';
        }
    }

    function displaySearchResults(results) {
        results.forEach(item => {
            // Filter out items without a poster or a valid title/name, and unknown media types
            if (!item.poster_path || (!item.title && !item.name) || (item.media_type !== 'movie' && item.media_type !== 'tv')) {
                return;
            }

            const itemElement = document.createElement('div');
            itemElement.classList.add('search-result-item');

            const posterPath = item.poster_path ? `${TMDB_IMAGE_BASE_URL}${item.poster_path}` : 'https://via.placeholder.com/180x270?text=No+Image';
            const title = item.title || item.name;
            const releaseDate = item.release_date || item.first_air_date;
            const year = releaseDate ? new Date(releaseDate).getFullYear() : 'N/A';
            const mediaType = item.media_type === 'movie' ? 'Movie' : 'TV Show'; // Consistent naming

            itemElement.innerHTML = `
                <img src="${posterPath}" alt="${title}">
                <h3>${title}</h3>
                <p>${mediaType} (${year})</p>
            `;

            // Add click listener to call showVideoPlayer from api.js
            itemElement.addEventListener('click', () => {
                // Ensure showVideoPlayer is globally accessible or passed correctly
                if (typeof showVideoPlayer === 'function') {
                    showVideoPlayer(item.id, item.media_type, itemElement.querySelector('img'));
                } else {
                    console.error('showVideoPlayer function is not defined or accessible.');
                    alert('Video playback function not available.');
                }
            });

            searchResultsDiv.appendChild(itemElement);
        });
    }

    // Optional: Add a way to return to main sections if desired, e.g., clear search
    // For simplicity, we're just showing/hiding the search results section.
    // If you want a "Clear Search" button that shows the main sections again:
    // const clearSearchButton = document.createElement('button');
    // clearSearchButton.textContent = 'Clear Search';
    // clearSearchButton.addEventListener('click', () => {
    //     searchResultsSection.style.display = 'none';
    //     document.querySelector('.sections-container').style.display = 'block';
    //     searchInput.value = '';
    // });
    // You'd need to append this button somewhere in your HTML or script.
});
