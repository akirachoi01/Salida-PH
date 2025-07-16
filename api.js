// Global Constants
const API_KEY = 'ba3885a53bc2c4f3c4b5bdc1237e69a0';
const API_URL = 'https://api.themoviedb.org/3';

// Genre IDs for common categories (from TMDB)
const GENRE_IDS = {
    'horror': 27,
    'comedy': 35,
    'thriller': 53,
    'animation': 16, // Note: Animation for TV shows, not necessarily movies
    'drama': 18
};

// --- Player Module ---
const Player = (() => {
    let videoPlayer;
    let videoFrame;
    let closeButton;
    let fullscreenButton;

    const initializePlayerElements = () => {
        videoPlayer = document.getElementById('videoPlayer');
        videoFrame = document.getElementById('videoFrame');

        // Create and append close button if it doesn't exist
        closeButton = videoPlayer.querySelector('.close-button');
        if (!closeButton) {
            closeButton = document.createElement('button');
            closeButton.textContent = '×';
            closeButton.classList.add('close-button');
            Object.assign(closeButton.style, {
                position: 'absolute', top: '10px', right: '10px', zIndex: '9999',
                fontSize: '24px', background: 'rgba(0,0,0,0.5)', border: 'none',
                color: '#fff', cursor: 'pointer', borderRadius: '50%', width: '30px', height: '30px'
            });
            videoPlayer.appendChild(closeButton);
        }

        // Create and append fullscreen button if it doesn't exist
        fullscreenButton = videoPlayer.querySelector('.fullscreen-button');
        if (!fullscreenButton) {
            fullscreenButton = document.createElement('button');
            fullscreenButton.textContent = '⛶'; // Unicode for expand
            fullscreenButton.classList.add('fullscreen-button');
            Object.assign(fullscreenButton.style, {
                position: 'absolute', bottom: '10px', right: '10px', zIndex: '9999',
                fontSize: '20px', background: 'rgba(0,0,0,0.5)', border: 'none',
                color: '#fff', cursor: 'pointer', padding: '5px 10px', borderRadius: '6px'
            });
            videoPlayer.appendChild(fullscreenButton);
        }
    };

    const setupPlayerEventListeners = () => {
        if (!closeButton || !fullscreenButton) {
            initializePlayerElements(); // Ensure elements are initialized before setting listeners
        }

        closeButton.onclick = () => {
            videoPlayer.style.display = 'none';
            videoFrame.src = ''; // Stop the video
            if (document.fullscreenElement) {
                document.exitFullscreen();
            }
        };

        fullscreenButton.onclick = () => {
            if (!document.fullscreenElement) {
                videoPlayer.requestFullscreen().catch(err => {
                    console.error('Failed to enter fullscreen:', err);
                    showCustomDialog('Fullscreen might be blocked by your browser settings or not supported.');
                });
            } else {
                document.exitFullscreen();
            }
        };
    };

    const showVideo = async (id, type = 'movie') => {
        if (!videoPlayer || !videoFrame) {
            console.error('Video player elements not initialized. Call Player.init() first.');
            return;
        }

        try {
            // TMDB only provides trailers/teasers, not full movies directly.
            // The URL `https://player.videasy.net/${type}/${id}?color=8B5CF6` seems to be
            // for an external player you are integrating. Ensure this service is reliable and legal.
            videoFrame.src = `https://tmdb-stream.vercel.app/${type}/${id}?color=8B5CF6`;

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
            videoPlayer.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.8)';


            // You might want to fetch actual video keys if you intend to show trailers from YouTube
            // const response = await fetch(`${API_URL}/${type}/${id}/videos?api_key=${API_KEY}&language=en`);
            // const data = await response.json();
            // const videoToPlay = data.results.find(vid => vid.type === 'Trailer' && vid.site === 'YouTube') || data.results[0];
            // if (videoToPlay) {
            //     videoFrame.src = `https://www.youtube.com/embed/${videoToPlay.key}?autoplay=1`;
            //     videoPlayer.style.display = 'block';
            // } else {
            //     showCustomDialog('No video (trailer or otherwise) available for this content.');
            //     videoPlayer.style.display = 'none';
            // }

        } catch (error) {
            console.error('Error showing video:', error);
            showCustomDialog('Could not load video. Please try again.');
            videoPlayer.style.display = 'none';
        }
    };

    const init = () => {
        initializePlayerElements();
        setupPlayerEventListeners();
    };

    return {
        init: init,
        show: showVideo
    };
})();
// --- End of Player Module ---

// --- Custom Dialog Utility (if you still need it) ---
// This is a minimal example; you might have a more robust one.
const setupCustomDialog = () => {
    if (!document.getElementById('customDialog')) {
        const dialog = document.createElement('div');
        dialog.id = 'customDialog';
        Object.assign(dialog.style, {
            display: 'none', position: 'fixed', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)', backgroundColor: '#333',
            color: '#fff', padding: '20px', borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.5)', zIndex: '10002',
            maxWidth: '300px', textAlign: 'center'
        });
        dialog.innerHTML = '<p id="customDialogMessage"></p><button id="customDialogClose">OK</button>';
        document.body.appendChild(dialog);

        document.getElementById('customDialogClose').onclick = () => {
            dialog.style.display = 'none';
        };
    }
};

const showCustomDialog = (message) => {
    const dialog = document.getElementById('customDialog');
    const messageElement = document.getElementById('customDialogMessage');
    if (dialog && messageElement) {
        messageElement.textContent = message;
        dialog.style.display = 'block';
    }
};
// --- End Custom Dialog Utility ---


// --- API Fetching Functions ---
const fetchData = async (type, category) => {
    try {
        const response = await fetch(`${API_URL}/${type}/${category}?api_key=${API_KEY}&language=en-US&page=1`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error(`Error fetching ${type} ${category}:`, error);
        showCustomDialog(`Failed to load ${category} content. Please check your connection.`);
        return [];
    }
};

const fetchByGenre = async (mediaType, genreId) => {
    try {
        const response = await fetch(`${API_URL}/discover/${mediaType}?api_key=${API_KEY}&with_genres=${genreId}&language=en-US&page=1`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error(`Error fetching ${mediaType} by genre ${genreId}:`, error);
        showCustomDialog(`Failed to load content for this genre. Please try again.`);
        return [];
    }
};
// --- End API Fetching Functions ---


// --- Content Rendering Functions ---
const renderContent = (items, containerId) => {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with ID '${containerId}' not found.`);
        return;
    }
    container.innerHTML = '';

    if (!items || items.length === 0) {
        container.innerHTML = '<p style="color: #ccc; text-align: center; padding: 20px;">No content available for this category.</p>';
        return;
    }

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.style.position = 'relative';

        const mediaType = item.media_type || (item.title ? 'movie' : 'tv'); // Determine media type

        card.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w200${item.poster_path}" alt="${item.title || item.name}" data-id="${item.id}">
            <button class="play-button">▶</button>
            <div class="movie-card-info">
                <h3>${item.title || item.name}</h3>
                <p>${item.release_date ? item.release_date.split('-')[0] : (item.first_air_date ? item.first_air_date.split('-')[0] : 'No Year')}</p>
            </div>
        `;

        // Click listener for the entire card (or just the image, based on preference)
        card.querySelector('img').addEventListener('click', () => Player.show(item.id, mediaType));
        // Click listener for the explicit play button
        card.querySelector('.play-button').addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent the card click listener from firing
            Player.show(item.id, mediaType);
        });

        container.appendChild(card);
    });
};
// --- End Content Rendering Functions ---


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

        // Filter out items without a poster or title/name
        const filteredResults = combinedResults.filter(item => item.poster_path && (item.title || item.name));

        // Sort by popularity (descending)
        filteredResults.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));

        return filteredResults;

    } catch (error) {
        console.error('Error during search:', error);
        showCustomDialog('Failed to perform search. Please try again later.');
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
            card.className = 'search-result-item'; // Use a distinct class for search results if needed

            const mediaType = item.media_type || (item.title ? 'movie' : 'tv'); // Determine media type

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
                e.stopPropagation(); // Prevent the card click listener from firing
                Player.show(item.id, mediaType);
            });

            card.addEventListener('click', () => {
                Player.show(item.id, mediaType);
            });

            searchResultsContainer.appendChild(card);
        });
    }

    // Show search results and hide tabbed content
    searchResultsSection.style.display = 'block';
    tabbedContentSection.style.display = 'none';
};
// --- End Search Functionality ---


// --- Category Loading and Navigation ---
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
            content = await fetchByGenre('tv', GENRE_IDS.animation); // Anime is typically TV shows
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

const setupTabNavigation = () => {
    const tabButtons = document.querySelectorAll('.tab-button');

    tabButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            document.getElementById('searchResultsSection').style.display = 'none'; // Hide search results
            document.getElementById('tabbedContentSection').style.display = 'block'; // Ensure tabbed content is shown

            // Remove 'active' class from all buttons and add to the clicked one
            tabButtons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');

            const category = event.target.dataset.category;
            loadCategoryContent(category); // Load content for the selected category
        });
    });

    // Load trending content by default on initial page load
    loadCategoryContent('trending');
};

const showDefaultCategoryContent = () => {
    const searchResultsSection = document.getElementById('searchResultsSection');
    const tabbedContentSection = document.getElementById('tabbedContentSection');

    searchResultsSection.style.display = 'none'; // Hide search results section
    tabbedContentSection.style.display = 'block'; // Show tabbed content section

    // Activate the 'Trending' tab and load its content
    const trendingButton = document.querySelector('.tab-button[data-category="trending"]');
    if (trendingButton) {
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        trendingButton.classList.add('active');
        loadCategoryContent('trending'); // Reload trending to ensure it's visible and active
    }
};
// --- End Category Loading and Navigation ---


// --- Main Initialization on DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', () => {
    // Initialize core modules and utilities
    Player.init();
    setupCustomDialog(); // Ensure custom dialog is set up

    // Inject header content
    const header = document.getElementById('animatedHeader');
    if (header) {
      header.innerHTML = `
        <a href="https://salidaph.online">
          <img src="https://salidaph.online/assests/salida.png" alt="SalidaPH Logo" width="120" height="50" style="margin-right: 10px;" />
        </a>
        <nav class="nav-links">
          <div class="scrolling-text">
            <span style="display: inline-block; animation: marquee 10s linear infinite;">
              📢 SALIDAPH IS NOW ONLINE!
            </span>
          </div>
          <a href="/">Home</a>
          <a href="https://github.com/akirachoi01">Github</a>
          <a href="/privacy-policy.html">Privacy</a>
          <a href="/terms.html">Term</a>
          <a href="https://file.salidaph.online/SalidaPH.apk">Get APK</a>
        </nav>
      `;
    }

    // Setup Search bar event listeners
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', async () => {
        const query = searchInput.value.trim();
        if (query) {
            const results = await performSearch(query);
            renderSearchResults(results);
        } else {
            showDefaultCategoryContent(); // Show default content if search is empty
        }
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });

    searchInput.addEventListener('input', () => {
        if (searchInput.value.trim() === '') {
            showDefaultCategoryContent(); // Show default content if input is cleared
        }
    });

    // Setup Tab Navigation (this also loads initial content like "Trending")
    setupTabNavigation();

    // Since siteContentWrapper is removed, no need to add 'show-content' class.
    // The content is already directly in the body, which is flexed by default.
});
