// search.js

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchResultsDiv = document.getElementById('searchResults');
    const searchResultsSection = document.getElementById('searchResultsSection');

    const TMDB_API_KEY = 'ba3885a53bc2c4f3c4b5bdc1237e69a0'; // Your TMDb API Key
    const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
    const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'; // For larger images

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
            itemElement.style.position = 'relative'; // Added to position play button correctly

            const posterPath = item.poster_path ? `${TMDB_IMAGE_BASE_URL}${item.poster_path}` : 'https://via.placeholder.com/180x270?text=No+Image';
            const title = item.title || item.name;
            const releaseDate = item.release_date || item.first_air_date;
            const year = releaseDate ? new Date(releaseDate).getFullYear() : 'N/A';
            const mediaType = item.media_type === 'movie' ? 'Movie' : 'TV Show'; // Consistent naming

            itemElement.innerHTML = `
                <img src="${posterPath}" alt="${title}" data-id="${item.id}">
                <button class="play-button" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(0,0,0,0.6);border:none;border-radius:50%;color:#fff;font-size:24px;cursor:pointer">▶</button>
                <h3>${title}</h3>
                <p>${mediaType} (${year})</p>
            `;

            // Event listener for the image click
            itemElement.querySelector('img').addEventListener('click', (e) => {
                // Ensure showVideoPlayer is globally accessible
                if (typeof showVideoPlayer === 'function') {
                    showVideoPlayer(item.id, item.media_type, e.target);
                } else {
                    console.error('showVideoPlayer function is not defined or accessible.');
                    alert('Video playback function not available.');
                }
            });

            // Event listener for the play button click
            itemElement.querySelector('.play-button').addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent the image click listener from firing
                // Ensure showVideoPlayer is globally accessible
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
});
