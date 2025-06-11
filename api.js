// Global Constants
const API_KEY = 'ba3885a53bc2c4f3c4b5bdc1237e69a0';
const API_URL = 'https://api.themoviedb.org/3';

// Genre IDs for common categories (from TMDB)
const GENRE_IDS = {
    'horror': 27,
    'comedy': 35,
    'thriller': 53,
    'animation': 16, // Often used for Anime/Animated content
    'drama': 18
};

// Helper function to fetch data for a given type (movie/tv) and category (popular, top_rated, etc.)
const fetchData = async (type, category) => {
    try {
        const response = await fetch(`${API_URL}/${type}/${category}?api_key=${API_KEY}&language=en-US&page=1`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error(`Error fetching ${type} ${category}:`, error);
        return [];
    }
};

// Helper function to fetch data by genre
const fetchByGenre = async (mediaType, genreId) => {
    try {
        const response = await fetch(`${API_URL}/discover/${mediaType}?api_key=${API_KEY}&with_genres=${genreId}&language=en-US&page=1`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error(`Error fetching ${mediaType} by genre ${genreId}:`, error);
        return [];
    }
};

// --- Player Module ---
const Player = (() => {
    let videoPlayer;
    let videoFrame;
    let closeButton;
    let fullscreenButton;

    // Initializes the player elements only once
    const initializePlayerElements = () => {
        videoPlayer = document.getElementById('videoPlayer');
        videoFrame = document.getElementById('videoFrame');

        // Create close button if it doesn't exist
        closeButton = videoPlayer.querySelector('.close-button');
        if (!closeButton) {
            closeButton = document.createElement('button');
            closeButton.textContent = '×';
            closeButton.classList.add('close-button');
            Object.assign(closeButton.style, {
                position: 'absolute',
                top: '10px',
                right: '10px',
                zIndex: '9999',
                fontSize: '24px',
                background: 'transparent',
                border: 'none',
                color: '#fff',
                cursor: 'pointer'
            });
            videoPlayer.appendChild(closeButton);
        }

        // Create fullscreen button if it doesn't exist
        fullscreenButton = videoPlayer.querySelector('.fullscreen-button');
        if (!fullscreenButton) {
            fullscreenButton = document.createElement('button');
            fullscreenButton.textContent = '⛶'; // Unicode for "squared plus" or "maximize"
            fullscreenButton.classList.add('fullscreen-button');
            Object.assign(fullscreenButton.style, {
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                zIndex: '9999',
                fontSize: '20px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
                padding: '5px 10px',
                borderRadius: '6px'
            });
            videoPlayer.appendChild(fullscreenButton);
        }
    };

    // Sets up event listeners for player controls
    const setupPlayerEventListeners = () => {
        if (!closeButton || !fullscreenButton) {
            // Ensure buttons exist before adding listeners
            initializePlayerElements();
        }

        closeButton.onclick = () => {
            videoPlayer.style.display = 'none';
            videoFrame.src = ''; // Stop video playback
            // Remove any potential fullscreen state if active
            if (document.fullscreenElement) {
                document.exitFullscreen();
            }
        };

        fullscreenButton.onclick = () => {
            if (!document.fullscreenElement) {
                videoPlayer.requestFullscreen().catch(err => {
                    console.error('Failed to enter fullscreen:', err);
                    alert('Fullscreen might be blocked by your browser settings or not supported.');
                });
            } else {
                document.exitFullscreen();
            }
        };
    };

    // Public method to show the video player
    const showVideo = async (id, type = 'movie') => {
        if (!videoPlayer || !videoFrame) {
            console.error('Video player elements not initialized. Call Player.init() first.');
            return;
        }

        try {
            const response = await fetch(`${API_URL}/${type}/${id}/videos?api_key=${API_KEY}&language=en`);
            const data = await response.json();

            // Prioritize a trailer, otherwise take the first available video
            const videoToPlay = data.results.find(vid => vid.type === 'Trailer' && vid.site === 'YouTube') ||
                               data.results[0];

            if (videoToPlay) {
                // Using the specific player URL from your HTML
                // IMPORTANT: This URL needs to be valid and hosted on your end for full content.
                // TMDB only provides trailers/teasers, not full movies.
                videoFrame.src = `https://player.videasy.net/${type}/${id}?color=8B5CF6`;

                videoPlayer.style.display = 'block';
                videoPlayer.style.position = 'fixed';
                videoPlayer.style.top = '50%';
                videoPlayer.style.left = '50%';
                videoPlayer.style.transform = 'translate(-50%, -50%)';
                videoPlayer.style.width = '90%';
                videoPlayer.style.maxWidth = '900px';
                videoPlayer.style.aspectRatio = '16 / 9';
                videoPlayer.style.backgroundColor = '#000';
                videoPlayer.style.zIndex = '10000';
                videoPlayer.style.borderRadius = '12px';

            } else {
                alert('No video (trailer or otherwise) available for this content.');
                videoPlayer.style.display = 'none'; // Hide player if no video found
            }
        } catch (error) {
            console.error('Error fetching video details:', error);
            alert('Could not load video. Please try again.');
            videoPlayer.style.display = 'none'; // Hide player on error
        }
    };

    // Public initialization method
    const init = () => {
        initializePlayerElements();
        setupPlayerEventListeners();
    };

    // Expose public methods
    return {
        init: init,
        show: showVideo
    };
})();
// --- End of Player Module ---


// --- Search Functionality ---
const performSearch = async (query) => {
    if (!query) {
        return [];
    }

    try {
        const movieResponse = await fetch(`${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1`);
        const tvResponse = await fetch(`${API_URL}/search/tv?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1`);

        const movieData = await movieResponse.json();
        const tvData = await tvResponse.json();

        const combinedResults = [...(movieData.results || []), ...(tvData.results || [])];

        const filteredResults = combinedResults.filter(item => item.poster_path && (item.title || item.name));

        filteredResults.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));

        return filteredResults;

    } catch (error) {
        console.error('Error during search:', error);
        alert('Failed to perform search. Please try again later.');
        return [];
    }
};

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
            card.className = 'search-result-item';

            const mediaType = item.media_type || (item.title ? 'movie' : 'tv');

            card.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w200${item.poster_path}" alt="${item.title || item.name}" data-id="${item.id}">
                <h3>${item.title || item.name}</h3>
                <p>${item.release_date ? item.release_date.split('-')[0] : (item.first_air_date ? item.first_air_date.split('-')[0] : 'No Year')}</p>
            `;

            const playButton = document.createElement('button');
            playButton.className = 'play-button';
            playButton.textContent = '▶';
            card.appendChild(playButton);

            playButton.addEventListener('click', (e) => {
                e.stopPropagation();
                Player.show(item.id, mediaType); // Use Player.show
            });

            card.addEventListener('click', () => {
                Player.show(item.id, mediaType); // Use Player.show
            });

            searchResultsContainer.appendChild(card);
        });
    }

    searchResultsSection.style.display = 'block';
    tabbedContentSection.style.display = 'none';
};
// --- End Search Functionality ---


// Renders movies/TV shows into a specified container (for categories)
const renderContent = (items, containerId) => {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with ID '${containerId}' not found.`);
        return;
    }
    container.innerHTML = ''; // Clear existing content

    if (!items || items.length === 0) {
        container.innerHTML = '<p style="color: #ccc; text-align: center; padding: 20px;">No content available for this category.</p>';
        return;
    }

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.style.position = 'relative';

        const mediaType = item.media_type || (item.title ? 'movie' : 'tv');

        card.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w200${item.poster_path}" alt="${item.title || item.name}" data-id="${item.id}">
            <button class="play-button">▶</button>
            <div class="movie-card-info">
                <h3>${item.title || item.name}</h3>
                <p>${item.release_date ? item.release_date.split('-')[0] : (item.first_air_date ? item.first_air_date.split('-')[0] : 'No Year')}</p>
            </div>
        `;

        // Event listeners for card and play button - now using Player.show()
        card.querySelector('img').addEventListener('click', () => Player.show(item.id, mediaType));
        card.querySelector('.play-button').addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent the card click event from firing too
            Player.show(item.id, mediaType); // Use Player.show
        });

        container.appendChild(card);
    });
};

// Function to handle tab clicks and load content
const loadCategoryContent = async (category) => {
    const contentDisplayContainerId = 'content-display-container';
    let content = [];

    switch (category) {
        case 'trending':
            content = await fetchData('trending/all', 'week');
            break;
        case 'movies':
            content = await fetchData('movie', 'popular');
            break;
        case 'tv':
            content = await fetchData('tv', 'popular');
            break;
        case 'anime':
            content = await fetchByGenre('tv', GENRE_IDS.animation);
            break;
        case 'horror':
            content = await fetchByGenre('movie', GENRE_IDS.horror);
            break;
        case 'comedy':
            content = await fetchByGenre('movie', GENRE_IDS.comedy);
            break;
        case 'thriller':
            content = await fetchByGenre('movie', GENRE_IDS.thriller);
            break;
        case 'drama':
            content = await fetchByGenre('movie', GENRE_IDS.drama);
            break;
        default:
            content = await fetchData('trending/all', 'week');
            break;
    }
    renderContent(content, contentDisplayContainerId);
};

// Sets up event listeners for tab navigation
const setupTabNavigation = () => {
    const tabButtons = document.querySelectorAll('.tab-button');

    tabButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            document.getElementById('searchResultsSection').style.display = 'none';
            document.getElementById('tabbedContentSection').style.display = 'block';

            tabButtons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');

            const category = event.target.dataset.category;
            loadCategoryContent(category);
        });
    });

    // Load trending content by default on page load
    loadCategoryContent('trending');
};

// Function to handle showing the default category content
const showDefaultCategoryContent = () => {
    const searchResultsSection = document.getElementById('searchResultsSection');
    const tabbedContentSection = document.getElementById('tabbedContentSection');

    searchResultsSection.style.display = 'none';
    tabbedContentSection.style.display = 'block';
    const trendingButton = document.querySelector('.tab-button[data-category="trending"]');
    if (trendingButton) {
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        trendingButton.classList.add('active');
        loadCategoryContent('trending');
    }
};


// Initialize everything when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the Player module
    Player.init();

    // Setup tab navigation and load initial content
    setupTabNavigation();

    // Inject the header content dynamically
    const header = document.getElementById('animatedHeader');
    if (header) {
      header.innerHTML = `
        <a href="https://salidaph.online">
          <img src="https://salidaph.online/assests/salida.png" alt="SalidaPH Logo" width="120" height="50" style="margin-right: 10px;" />
        </a>
        <nav class="nav-links">
          <div class="scrolling-text">
            <div style="display: inline-block; animation: marquee 10s linear infinite;">
              📢 SALIDAPH IS NOW ONLINE!
            </div>
          </div>
          <a href="/">Home</a>
          <a href="https://github.com/akirachoi01">Github</a>
          <a href="/privacy-policy.html">Privacy</a>
          <a href="/terms.html">Term</a>
          <a href="https://file.salidaph.online/SalidaPH.apk">Get APK</a>
        </nav>
      `;
    }

    // Cloudflare Turnstile setup
    turnstile.ready(function () {
        turnstile.render("#example-container", { // Ensure you have an element with this ID if you want to render it.
            sitekey: "0x4AAAAAABcuP4RkP-L5lN-C",
            callback: function (token) {
                console.log(`Challenge Success ${token}`);
            },
        });
    });

    // Event listeners for the search functionality
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', async () => {
        const query = searchInput.value.trim();
        if (query) {
            const results = await performSearch(query);
            renderSearchResults(results);
        } else {
            showDefaultCategoryContent();
        }
    });

    // Listen for 'Enter' key press in the search input
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });

    // Optional: Clear search and show default content when input is cleared manually
    searchInput.addEventListener('input', () => {
        if (searchInput.value.trim() === '') {
            showDefaultCategoryContent();
        }
    });
});
