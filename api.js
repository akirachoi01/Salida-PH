const API_KEY = 'ba3885a53bc2c4f3c4b5bdc1237e69a0';
const API_URL = 'https://api.themoviedb.org/3';

// Genre IDs for common categories (these are standard TMDB genre IDs)
const GENRE_IDS = {
    movie: {
        Action: 28,
        Adventure: 12,
        Animation: 16,
        Comedy: 35,
        Crime: 80,
        Documentary: 99,
        Drama: 18,
        Family: 10751,
        Fantasy: 14,
        History: 36,
        Horror: 27,
        Music: 10402,
        Mystery: 9648,
        Romance: 10749,
        'Science Fiction': 878,
        'TV Movie': 10770,
        Thriller: 53,
        War: 10752,
        Western: 37
    },
    tv: {
        'Action & Adventure': 10759,
        Animation: 16,
        Comedy: 35,
        Crime: 80,
        Documentary: 99,
        Drama: 18,
        Family: 10751,
        Kids: 10762,
        Mystery: 9648,
        News: 10763,
        Reality: 10764,
        'Sci-Fi & Fantasy': 10765,
        Soap: 10766,
        Talk: 10767,
        'War & Politics': 10768,
        Western: 37
    }
};

// --- API Fetching Functions ---

/**
 * Fetches movies or TV shows by a specific category (e.g., 'popular', 'top_rated').
 * @param {string} mediaType - 'movie' or 'tv' or 'trending/all'.
 * @param {string} category - The API endpoint category (e.g., 'popular', 'top_rated', 'week').
 * @returns {Promise<Array>} - An array of movie/TV show objects.
 */
const fetchDataByCategory = async (mediaType, category) => {
    try {
        const response = await fetch(`${API_URL}/${mediaType}/${category}?api_key=${API_KEY}&language=en-US&page=1`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error(`Error fetching ${mediaType} ${category}:`, error);
        return [];
    }
};

/**
 * Fetches content by genre ID.
 * @param {string} mediaType - 'movie' or 'tv'.
 * @param {number} genreId - The TMDB genre ID.
 * @returns {Promise<Array>} - An array of movie/TV show objects.
 */
const fetchByGenre = async (mediaType, genreId) => {
    try {
        const response = await fetch(`${API_URL}/discover/${mediaType}?api_key=${API_KEY}&with_genres=${genreId}&language=en`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error(`Error fetching ${mediaType} by genre ${genreId}:`, error);
        return [];
    }
};

// --- Content Rendering Functions ---

/**
 * Renders movie/TV show cards into a specified container.
 * @param {Array} items - An array of movie/TV show data.
 * @param {string} containerSelector - CSS selector for the container element.
 */
const renderContent = (items, containerSelector) => {
    const container = document.querySelector(containerSelector);
    container.innerHTML = ''; // Clear previous content

    if (!items || items.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #ccc;">No content available for this category.</p>';
        return;
    }

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.style.position = 'relative';

        // Determine media type for correct video player behavior and alt text
        const mediaType = item.media_type || (item.title ? 'movie' : 'tv');
        const title = item.title || item.name;
        const year = item.release_date ? item.release_date.split('-')[0] : (item.first_air_date ? item.first_air_date.split('-')[0] : 'No Year');
        const posterPath = item.poster_path ? `https://image.tmdb.org/t/p/w200${item.poster_path}` : 'https://via.placeholder.com/200x300?text=No+Image'; // Placeholder for missing posters

        card.innerHTML = `
            <img src="${posterPath}" alt="${title}" data-id="${item.id}">
            <button class="play-button">▶</button>
            <div class="movie-card-info">
                <h3>${title}</h3>
                <p>${year}</p>
            </div>
        `;

        // Attach event listeners for video player
        card.querySelector('img').addEventListener('click', (e) => showVideoPlayer(item.id, mediaType, e.target));
        card.querySelector('.play-button').addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent card click event from firing
            showVideoPlayer(item.id, mediaType, e.target.closest('.movie-card').querySelector('img'));
        });

        container.appendChild(card);
    });
};

// --- Tab Navigation Logic ---

/**
 * Loads content based on the selected category tab.
 * @param {string} category - The category string from the data-category attribute.
 */
const loadCategoryContent = async (category) => {
    const contentDisplayContainer = '#content-display-container';
    let content = [];

    // Hide search results and show tabbed content section
    document.getElementById('searchResultsSection').style.display = 'none';
    document.getElementById('tabbedContentSection').style.display = 'block';

    switch (category) {
        case 'trending':
            // TMDB's 'trending' endpoint is often better for a mix of movies and TV
            content = await fetchDataByCategory('trending/all', 'week'); // 'day' or 'week'
            break;
        case 'movies':
            content = await fetchDataByCategory('movie', 'popular');
            break;
        case 'tv':
            content = await fetchDataByCategory('tv', 'popular');
            break;
        case 'anime':
            // Combine animated movies and TV shows
            const animeMovies = await fetchByGenre('movie', GENRE_IDS.movie.Animation);
            const animeTv = await fetchByGenre('tv', GENRE_IDS.tv.Animation);
            content = [...animeMovies, ...animeTv].sort((a, b) => (b.popularity || 0) - (a.popularity || 0)); // Sort by popularity
            break;
        case 'horror':
            content = await fetchByGenre('movie', GENRE_IDS.movie.Horror);
            break;
        case 'comedy':
            content = await fetchByGenre('movie', GENRE_IDS.movie.Comedy);
            break;
        case 'thriller':
            content = await fetchByGenre('movie', GENRE_IDS.movie.Thriller);
            break;
        case 'drama':
            // Fetch drama for both movies and TV for a broader selection
            const dramaMovies = await fetchByGenre('movie', GENRE_IDS.movie.Drama);
            const dramaTv = await fetchByGenre('tv', GENRE_IDS.tv.Drama);
            content = [...dramaMovies, ...dramaTv].sort((a, b) => (b.popularity || 0) - (a.popularity || 0)); // Combine and sort
            break;
        default:
            content = await fetchDataByCategory('movie', 'popular'); // Default to popular movies
            break;
    }
    renderContent(content, contentDisplayContainer);
};

/**
 * Sets up event listeners for all tab buttons.
 */
const setupTabNavigation = () => {
    const tabButtons = document.querySelectorAll('.tab-button');

    tabButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Remove 'active' class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to the clicked button
            event.target.classList.add('active');

            const category = event.target.dataset.category;
            loadCategoryContent(category);
        });
    });

    // Load trending content by default on page load
    loadCategoryContent('trending');
};

// --- Search Functionality ---

/**
 * Performs a multi-search (movies and TV shows) based on a query.
 * @param {string} query - The search query.
 */
const searchMoviesAndTV = async (query) => {
    const searchResultsContainer = document.getElementById('searchResults');
    const searchResultsSection = document.getElementById('searchResultsSection');
    const tabbedContentSection = document.getElementById('tabbedContentSection');

    // Hide tabbed content and show search results section
    tabbedContentSection.style.display = 'none';
    searchResultsSection.style.display = 'block';
    searchResultsContainer.innerHTML = '<p style="text-align: center; color: #ccc;">Searching...</p>';

    try {
        const response = await fetch(`${API_URL}/search/multi?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // Filter out people and only include movies/tv shows with a poster
        const results = data.results.filter(item => 
                                   (item.media_type === 'movie' || item.media_type === 'tv') && 
                                   item.poster_path); 

        renderContent(results, '#searchResults');
    } catch (error) {
        console.error('Error during search:', error);
        searchResultsContainer.innerHTML = '<p style="text-align: center; color: #ccc;">Error fetching search results.</p>';
    }
};

// --- Video Player Functionality (Integrated from player.js) ---

/**
 * Displays the video player with content from the provided ID and type.
 * @param {number} id - The ID of the movie or TV show.
 * @param {string} type - 'movie' or 'tv'.
 * @param {HTMLElement} triggerElement - The element that triggered the video player (for positioning).
 */
function showVideoPlayer(id, type = 'movie', triggerElement = null) {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoFrame = document.getElementById('videoFrame');

    fetch(`${API_URL}/${type}/${id}/videos?api_key=${API_KEY}&language=en`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Find a trailer or teaser, or the first available video
            const videoKey = data.results.find(video => video.type === 'Trailer' && video.site === 'YouTube')?.key ||
                             data.results.find(video => video.type === 'Teaser' && video.site === 'YouTube')?.key ||
                             data.results.find(video => video.site === 'YouTube')?.key;

            if (videoKey) {
                // Use Videasy.net for playback
                videoFrame.src = `https://player.videasy.net/${type}/${id}?color=8B5CF6`;

                // Calculate position relative to the viewport
                const rect = triggerElement?.getBoundingClientRect();
                const topOffset = window.scrollY + (rect?.top || (window.innerHeight / 2 - videoPlayer.offsetHeight / 2));

                Object.assign(videoPlayer.style, {
                    top: `${topOffset}px`,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    position: 'absolute', // Keeping as absolute to scroll with content if needed
                    display: 'block',
                    width: '90%', // Use percentages for responsiveness
                    maxWidth: '900px',
                    aspectRatio: '16 / 9',
                    backgroundColor: '#000',
                    zIndex: '10000',
                    borderRadius: '12px',
                    boxShadow: '0 0 20px rgba(0, 0, 0, 0.8)'
                });
                videoPlayer.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                alert('No video available for this content.');
            }
        })
        .catch(error => {
            console.error('Error fetching video:', error);
            alert('Could not load video. Please try again later.');
        });
}

/**
 * Sets up the close and fullscreen buttons for the video player.
 * Ensures buttons are only created once.
 */
function setupVideoPlayerClose() {
    const videoPlayer = document.getElementById('videoPlayer');

    // Close button
    let closeButton = videoPlayer.querySelector('.close-button');
    if (!closeButton) { // Create only if it doesn't exist
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
        closeButton.addEventListener('click', () => {
            videoPlayer.style.display = 'none';
            document.getElementById('videoFrame').src = ''; // Stop video playback
        });
        videoPlayer.appendChild(closeButton);
    }

    // Fullscreen button
    let fullscreenButton = videoPlayer.querySelector('.fullscreen-button');
    if (!fullscreenButton) { // Create only if it doesn't exist
        fullscreenButton = document.createElement('button');
        fullscreenButton.textContent = '⛶';
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

        fullscreenButton.addEventListener('click', () => {
            if (!document.fullscreenElement) {
                videoPlayer.requestFullscreen().catch(err => console.error('Failed to enter fullscreen', err));
            } else {
                document.exitFullscreen();
            }
        });
        videoPlayer.appendChild(fullscreenButton);
    }
}

/**
 * Ensures the video player div and iframe are in the DOM.
 * Only creates the player if it doesn't exist.
 */
function setupVideoPlayer() {
    let videoPlayer = document.getElementById('videoPlayer');
    if (!videoPlayer) {
        const player = document.createElement('div');
        player.id = 'videoPlayer';
        Object.assign(player.style, {
            display: 'none',
            position: 'fixed', // Fixed for overlay behavior
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: '900px',
            aspectRatio: '16 / 9',
            backgroundColor: '#000',
            borderRadius: '12px',
            overflow: 'hidden',
            zIndex: '10000'
        });
        const iframe = document.createElement('iframe');
        iframe.id = 'videoFrame';
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.style.border = 'none';
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
        iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
        iframe.setAttribute('allowfullscreen', '');
        player.appendChild(iframe);
        document.body.appendChild(player);
    }
}

// --- Initialization on DOM Content Loaded ---

document.addEventListener('DOMContentLoaded', () => {
    // Setup tab navigation and load initial content
    setupTabNavigation();

    // Setup video player and its controls
    setupVideoPlayer();
    setupVideoPlayerClose();

    // Setup search functionality
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            searchMoviesAndTV(query);
        } else {
            // If search input is empty, revert to showing the default tab content
            document.getElementById('searchResultsSection').style.display = 'none';
            document.getElementById('tabbedContentSection').style.display = 'block';
            
            // Reactivate the 'trending' tab
            const activeTab = document.querySelector('.tab-button.active');
            if (activeTab) {
                activeTab.classList.remove('active');
            }
            const trendingTab = document.querySelector('.tab-button[data-category="trending"]');
            if (trendingTab) {
                trendingTab.classList.add('active');
            }
            loadCategoryContent('trending');
        }
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });

    // Header injection (from your original HTML/JS)
    const header = document.getElementById('animatedHeader');
    if (header) {
        header.innerHTML = `
            <div class="logo-area">
                <img src="https://salidaph.online/assests/salida.png" width="120" height="50" alt="Logo">
            </div>
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

    // Cloudflare Turnstile setup (from your original code)
    if (typeof turnstile !== 'undefined') {
        turnstile.ready(function () {
            turnstile.render("#example-container", { // Ensure this element exists if you use Turnstile
                sitekey: "0x4AAAAAABcuP4RkP-L5lN-C",
                callback: function (token) {
                    console.log(`Challenge Success ${token}`);
                },
            });
        });
    }
});
