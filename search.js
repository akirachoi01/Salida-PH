// search.js

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchResultsDiv = document.getElementById('searchResults');
    const searchResultsSection = document.getElementById('searchResultsSection');

    // **IMPORTANT: Replace with your actual TMDb API Key**
    const TMDB_API_KEY = 'ba3885a53bc2c4f3c4b5bdc1237e69a0';
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
        searchResultsSection.style.display = 'block'; // Show the search results section

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
            // Filter out items without a poster or name/title
            if (!item.poster_path || (!item.title && !item.name)) {
                return;
            }

            const itemElement = document.createElement('div');
            itemElement.classList.add('search-result-item');

            const posterPath = item.poster_path ? `${TMDB_IMAGE_BASE_URL}${item.poster_path}` : 'https://via.placeholder.com/180x270?text=No+Image'; // Placeholder for missing images
            const title = item.title || item.name; // Use 'title' for movies, 'name' for TV shows
            const releaseDate = item.release_date || item.first_air_date; // Use 'release_date' for movies, 'first_air_date' for TV shows
            const year = releaseDate ? new Date(releaseDate).getFullYear() : 'N/A';
            const mediaType = item.media_type === 'movie' ? 'Movie' : (item.media_type === 'tv' ? 'TV Show' : 'Unknown');

            itemElement.innerHTML = `
                <img src="${posterPath}" alt="${title}">
                <h3>${title}</h3>
                <p>${mediaType} (${year})</p>
            `;

            // Optional: Add click listener to show more details or play video (if supported by your site's API)
            itemElement.addEventListener('click', () => {
                // You would implement logic here to handle clicking on a search result.
                // This could involve:
                // 1. Redirecting to a detail page for the movie/TV show.
                // 2. Fetching more details and displaying them in a modal.
                // 3. Attempting to play the video if your existing `api.js` or `videoPlayer` supports it.
                // For this example, we'll just log the ID.
                console.log(`Clicked on: ${title} (ID: ${item.id}, Type: ${item.media_type})`);
                // Example of how you might integrate with a play function if it exists:
                // if (typeof playVideo === 'function') {
                //     playVideo(item.id, item.media_type); // Assuming playVideo can handle TMDb IDs and media types
                // } else {
                //     alert(`You clicked on ${title}. Implement playback logic here!`);
                // }
            });

            searchResultsDiv.appendChild(itemElement);
        });
    }
});
