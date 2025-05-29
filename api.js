const API_KEY = 'ba3885a53bc2c4f3c4b5bdc1237e69a0';
const API_URL = 'https://api.themoviedb.org/3';

// Genre IDs for common categories (you can fetch a full list from TMDB if needed)
const GENRE_IDS = {
    movie: {
        Animation: 16,
        Action: 28,
        Comedy: 35,
        Horror: 27,
        Thriller: 53,
        Drama: 18,
        // Add more movie genres as needed
    },
    tv: {
        Animation: 16,
        'Action & Adventure': 10759,
        Comedy: 35,
        Drama: 18,
        // Add more TV genres as needed
    }
};

// Helper function to fetch movies or TV shows by category (e.g., 'popular', 'top_rated')
const fetchDataByCategory = async (type, category) => {
    try {
        const response = await fetch(`${API_URL}/${type}/${category}?api_key=${API_KEY}&language=en-US&page=1`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error(`Error fetching ${type} ${category}:`, error);
        return [];
    }
};

// Helper function to fetch content by genre ID
const fetchByGenre = async (type, genreId) => {
    try {
        const response = await fetch(`${API_URL}/discover/${type}?api_key=${API_KEY}&with_genres=${genreId}&language=en`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error(`Error fetching ${type} by genre ${genreId}:`, error);
        return [];
    }
};

// Modified renderContent to be more generic for content-display-container and search results
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

        // Determine media type for correct video player behavior
        const mediaType = item.media_type || (item.title ? 'movie' : 'tv');

        card.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w200${item.poster_path}" alt="${item.title || item.name}" data-id="${item.id}">
            <button class="play-button">▶</button>
            <div class="movie-card-info">
                <h3>${item.title || item.name}</h3>
                <p>${item.release_date ? item.release_date.split('-')[0] : (item.first_air_date ? item.first_air_date.split('-')[0] : 'No Year')}</p>
            </div>
        `;

        card.querySelector('img').addEventListener('click', (e) => showVideoPlayer(item.id, mediaType, e.target));
        card.querySelector('.play-button').addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent card click event from firing
            showVideoPlayer(item.id, mediaType, e.target.closest('.movie-card').querySelector('img'));
        });

        container.appendChild(card);
    });
};

// Function to handle tab clicks and load content
const loadCategoryContent = async (category) => {
    const contentDisplayContainer = '#content-display-container';
    let content = [];

    // Hide search results and show tabbed content
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
            // For anime, we typically target the 'Animation' genre for both movies and TV
            const animeMovies = await fetchByGenre('movie', GENRE_IDS.movie.Animation);
            const animeTv = await fetchByGenre('tv', GENRE_IDS.tv.Animation);
            content = [...animeMovies, ...animeTv].sort((a, b) => (b.popularity || b.vote_average) - (a.popularity || a.vote_average)); // Combine and sort
            break;
        default:
            content = await fetchDataByCategory('movie', 'popular'); // Default to popular movies
            break;
    }
    renderContent(content, contentDisplayContainer);
};

// Setup function for event listeners on tab buttons
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

// --- Existing Search Functionality (from search.js, integrating it here for context) ---
// Assuming search.js is loaded *after* api.js or this logic is combined.
// For simplicity, I'm including the search logic here. If search.js handles it
// completely, you'll need to ensure functions like `hideAllSections` and `showSection`
// are available globally or passed correctly.

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
        const data = await response.json();
        const results = data.results.filter(item => item.media_type === 'movie' || item.media_type === 'tv')
                                   .filter(item => item.poster_path); // Only show items with a poster

        renderContent(results, '#searchResults');
    } catch (error) {
        console.error('Error during search:', error);
        searchResultsContainer.innerHTML = '<p style="text-align: center; color: #ccc;">Error fetching search results.</p>';
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Initial setup for categories (tabs)
    setupTabNavigation();

    // Setup video player (from player.js)
    setupVideoPlayer();
    setupVideoPlayerClose();

    // Setup search functionality (from search.js)
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
            // Reactivate the 'trending' tab or whichever default you prefer
            document.querySelector('.tab-button.active').classList.remove('active');
            document.querySelector('.tab-button[data-category="trending"]').classList.add('active');
            loadCategoryContent('trending');
        }
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });

    // Header injection (from your original code)
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
            turnstile.render("#example-container", {
                sitekey: "0x4AAAAAABcuP4RkP-L5lN-C",
                callback: function (token) {
                    console.log(`Challenge Success ${token}`);
                },
            });
        });
    }
});

// --- Remaining helper functions for video player (from player.js) ---
// Ensure these functions are either in api.js or player.js is loaded AFTER api.js
// If player.js contains these, remove them from here to avoid duplication.

function showVideoPlayer(id, type = 'movie', triggerElement = null) {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoFrame = document.getElementById('videoFrame');

    fetch(`${API_URL}/${type}/${id}/videos?api_key=${API_KEY}&language=en`)
        .then(response => response.json())
        .then(data => {
            const videoKey = data.results[0]?.key;
            if (videoKey) {
                videoFrame.src = `https://player.videasy.net/${type}/${id}?color=8B5CF6`;

                const rect = triggerElement?.getBoundingClientRect();
                const topOffset = window.scrollY + (rect?.top || (window.innerHeight / 2 - videoPlayer.offsetHeight / 2));

                videoPlayer.style.top = `${topOffset}px`;
                videoPlayer.style.left = '50%';
                videoPlayer.style.transform = 'translateX(-50%)';
                videoPlayer.style.position = 'absolute';
                videoPlayer.style.display = 'block';
                videoPlayer.style.width = '80%';
                videoPlayer.style.maxWidth = '800px';
                videoPlayer.style.aspectRatio = '16 / 9';
                videoPlayer.style.backgroundColor = '#000';
                videoPlayer.style.zIndex = '10000';
                videoPlayer.style.borderRadius = '12px';
                videoPlayer.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                alert('No video available for this content.');
            }
        })
        .catch(error => console.error('Error fetching video:', error));
}

function setupVideoPlayerClose() {
    const videoPlayer = document.getElementById('videoPlayer');

    let closeButton = videoPlayer.querySelector('.close-button');
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
        closeButton.addEventListener('click', () => {
            videoPlayer.style.display = 'none';
            document.getElementById('videoFrame').src = '';
        });
        videoPlayer.appendChild(closeButton);
    }

    let fullscreenButton = videoPlayer.querySelector('.fullscreen-button');
    if (!fullscreenButton) {
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

function setupVideoPlayer() {
    let videoPlayer = document.getElementById('videoPlayer');
    if (!videoPlayer) {
        const player = document.createElement('div');
        player.id = 'videoPlayer';
        player.style.display = 'none';
        player.style.position = 'fixed';
        player.style.top = '50%';
        player.style.left = '50%';
        player.style.transform = 'translate(-50%, -50%)';
        player.style.width = '80%';
        player.style.maxWidth = '800px';
        player.style.aspectRatio = '16 / 9';
        player.style.backgroundColor = '#000';
        player.style.borderRadius = '12px';
        player.style.overflow = 'hidden';
        player.style.zIndex = '10000';
        const iframe = document.createElement('iframe');
        iframe.id = 'videoFrame';
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.style.border = 'none';
        player.appendChild(iframe);
        document.body.appendChild(player);
    }
}
