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

// Renders movies/TV shows into a specified container
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

        // Determine media type for accurate video playback
        const mediaType = item.media_type || (item.title ? 'movie' : 'tv');

        card.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w200${item.poster_path}" alt="${item.title || item.name}" data-id="${item.id}">
            <button class="play-button">▶</button>
            <div class="movie-card-info">
                <h3>${item.title || item.name}</h3>
                <p>${item.release_date ? item.release_date.split('-')[0] : (item.first_air_date ? item.first_air_date.split('-')[0] : 'No Year')}</p>
            </div>
        `;

        // Event listeners for card and play button
        card.querySelector('img').addEventListener('click', (e) => showVideoPlayer(item.id, mediaType, e.target));
        card.querySelector('.play-button').addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent the card click event from firing too
            showVideoPlayer(item.id, mediaType, e.target.closest('.movie-card').querySelector('img'));
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
            // TMDB's 'trending/all/week' gives a mix of movies and TV shows
            content = await fetchData('trending/all', 'week');
            break;
        case 'movie':
            content = await fetchData('movie', 'popular');
            break;
        case 'tv':
            content = await fetchData('tv', 'popular');
            break;
        case 'anime':
            // Fetch animated TV shows (assuming anime is primarily TV series)
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
            // You can choose to show drama movies or TV shows, or both
            content = await fetchByGenre('movie', GENRE_IDS.drama);
            break;
        default:
            content = await fetchData('trending/all', 'week'); // Default to trending
            break;
    }
    renderContent(content, contentDisplayContainerId);
};

// Sets up event listeners for tab navigation
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

// --- Your existing functions below, with minor adjustments ---

// showVideoPlayer function (remains largely the same, but check position)
function showVideoPlayer(id, type = 'movie', triggerElement = null) {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoFrame = document.getElementById('videoFrame');

    fetch(`${API_URL}/${type}/${id}/videos?api_key=${API_KEY}&language=en`)
        .then(response => response.json())
        .then(data => {
            const videoKey = data.results[0]?.key;
            if (videoKey) {
                videoFrame.src = `https://player.videasy.net/${type}/${id}?color=8B5CF6`; // Ensure this URL is correct

                // Calculate position relative to the viewport if triggerElement is provided
                // This ensures the player appears centered or near the clicked element
                const rect = triggerElement?.getBoundingClientRect();
                // Adjusting 'top' to be a fixed percentage or centered is often better for fixed overlays
                videoPlayer.style.top = '50%'; // Center vertically in viewport
                videoPlayer.style.left = '50%'; // Center horizontally in viewport
                videoPlayer.style.transform = 'translate(-50%, -50%)'; // Use transform for perfect centering
                videoPlayer.style.display = 'block';
                videoPlayer.style.position = 'fixed'; // Keep it fixed relative to viewport
                videoPlayer.style.width = '90%';
                videoPlayer.style.maxWidth = '900px';
                videoPlayer.style.aspectRatio = '16 / 9';
                videoPlayer.style.backgroundColor = '#000';
                videoPlayer.style.zIndex = '10000';
                videoPlayer.style.borderRadius = '12px';
                // Optional: scroll to the top of the page or just ensure player is visible
                // window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                alert('No video available for this content.');
            }
        })
        .catch(error => console.error('Error fetching video:', error));
}

// setupVideoPlayerClose (remains largely the same, adds check for existing buttons)
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

// setupVideoPlayer (remains largely the same, ensures player div exists)
function setupVideoPlayer() {
    let videoPlayer = document.getElementById('videoPlayer');
    if (!videoPlayer) {
        const player = document.createElement('div');
        player.id = 'videoPlayer';
        player.style.display = 'none';
        player.style.position = 'fixed'; // Important: Use fixed for overlay
        player.style.top = '50%';
        player.style.left = '50%';
        player.style.transform = 'translate(-50%, -50%)';
        player.style.width = '90%';
        player.style.maxWidth = '900px';
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

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    setupTabNavigation(); // This will load the initial 'Trending' content
    setupVideoPlayer();
    setupVideoPlayerClose();

    // Your header injection (moved from your original JS)
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

    // Cloudflare Turnstile setup (from your original code)
    // The explicit render is now handled by your HTML script tag
    turnstile.ready(function () {
    turnstile.render("#example-container", {
       sitekey: "0x4AAAAAABcuP4RkP-L5lN-C",
       callback: function (token) {
         console.log(`Challenge Success ${token}`);
       },
      });
     });
});

// Remove these specific loaders as they are now handled by loadCategoryContent
// const loadTrendingMovies = async () => { ... };
// const loadTopRatedMovies = async () => { ... };
// const loadHorrorMovies = async () => { ... };
// const loadComedyMovies = async () => { ... };
// const loadThrillerMovies = async () => { ... };
// const loadPopularAnime = async () => { ... };
// const loadDramaTVShows = async () => { ... };
