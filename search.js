// search.js
const API_KEY = 'ba3885a53bc2c4f3c4b5bdc1237e69a0'; // Re-using the API key from api.js
const API_URL = 'https://api.themoviedb.org/3';

// Function to perform the search
const performSearch = async (query) => {
    if (!query) {
        alert('Please enter a search query.');
        return [];
    }

    try {
        // Search for both movies and TV shows
        const movieResponse = await fetch(`${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1`);
        const tvResponse = await fetch(`${API_URL}/search/tv?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1`);

        const movieData = await movieResponse.json();
        const tvData = await tvResponse.json();

        // Combine and sort results by popularity (or another relevant metric)
        const combinedResults = [...(movieData.results || []), ...(tvData.results || [])];

        // Filter out items without a poster path or title/name
        const filteredResults = combinedResults.filter(item => item.poster_path && (item.title || item.name));

        // Sort by popularity in descending order
        filteredResults.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));

        return filteredResults;

    } catch (error) {
        console.error('Error during search:', error);
        alert('Failed to perform search. Please try again later.');
        return [];
    }
};

// Function to render search results
const renderSearchResults = (results) => {
    const searchResultsContainer = document.getElementById('searchResults');
    const searchResultsSection = document.getElementById('searchResultsSection');
    const tabbedContentSection = document.getElementById('tabbedContentSection');

    if (!searchResultsContainer || !searchResultsSection || !tabbedContentSection) {
        console.error('One or more search-related containers not found.');
        return;
    }

    searchResultsContainer.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
        searchResultsContainer.innerHTML = '<p style="color: #ccc; text-align: center; padding: 20px;">No results found for your search.</p>';
    } else {
        results.forEach(item => {
            const card = document.createElement('div');
            card.className = 'search-result-item'; // Use specific class for search results

            // Determine media type for accurate video playback
            const mediaType = item.media_type || (item.title ? 'movie' : 'tv');

            card.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w200${item.poster_path}" alt="${item.title || item.name}" data-id="${item.id}">
                <h3>${item.title || item.name}</h3>
                <p>${item.release_date ? item.release_date.split('-')[0] : (item.first_air_date ? item.first_air_date.split('-')[0] : 'No Year')}</p>
            `;
            
            // Add a play button for search results as well for consistency
            const playButton = document.createElement('button');
            playButton.className = 'play-button';
            playButton.textContent = '▶';
            card.appendChild(playButton);

            // Add event listener for playing the video
            playButton.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent card click if it were a link
                showVideoPlayer(item.id, mediaType, card.querySelector('img')); // Pass the image as trigger element
            });

            // Make the entire card clickable to play the video (optional, but good UX)
            card.addEventListener('click', () => {
                showVideoPlayer(item.id, mediaType, card.querySelector('img'));
            });


            searchResultsContainer.appendChild(card);
        });
    }

    // Show search results section and hide tabbed content
    searchResultsSection.style.display = 'block';
    tabbedContentSection.style.display = 'none'; // Hide category tabs
};

// Event listener for the search button
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchResultsSection = document.getElementById('searchResultsSection');
    const tabbedContentSection = document.getElementById('tabbedContentSection');

    // Function to handle showing the default category content
    const showDefaultCategoryContent = () => {
        searchResultsSection.style.display = 'none';
        tabbedContentSection.style.display = 'block';
        // Ensure the 'trending' tab is active and its content is loaded
        const trendingButton = document.querySelector('.tab-button[data-category="trending"]');
        if (trendingButton) {
            trendingButton.classList.add('active');
            // This assumes loadCategoryContent is globally available or imported
            if (typeof loadCategoryContent === 'function') {
                loadCategoryContent('trending');
            }
        }
    };

    searchButton.addEventListener('click', async () => {
        const query = searchInput.value.trim();
        if (query) {
            const results = await performSearch(query);
            renderSearchResults(results);
        } else {
            // If search query is empty, show default categories
            showDefaultCategoryContent();
        }
    });

    // Listen for 'Enter' key press in the search input
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click(); // Simulate a click on the search button
        }
    });

    // Optional: Clear search and show default content when input is cleared manually
    searchInput.addEventListener('input', () => {
        if (searchInput.value.trim() === '') {
            showDefaultCategoryContent();
        }
    });
});
