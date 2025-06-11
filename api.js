// api.js

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

// --- START: Search Functionality ---
const performSearch = async (query) => {
    if (!query) {
        // No alert here, handled by showDefaultCategoryContent in DOMContentLoaded
        return [];
    }

    try {
        // Search for both movies and TV shows
        const movieResponse = await fetch(`${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1`);
        const tvResponse = await fetch(`${API_URL}/search/tv?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1`);

        const movieData = await movieResponse.json();
        const tvData = await tvResponse.json();

        // Combine and sort results by popularity
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

            // Make the entire card clickable to play the video
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
// --- END: Search Functionality ---


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
        case 'movies': // Changed from 'movie' to 'movies' to match data-category
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
            // Ensure category tabs are visible when a tab is clicked
            document.getElementById('searchResultsSection').style.display = 'none';
            document.getElementById('tabbedContentSection').style.display = 'block';

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

// api.js

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

// --- START: Search Functionality ---
const performSearch = async (query) => {
    if (!query) {
        // No alert here, handled by showDefaultCategoryContent in DOMContentLoaded
        return [];
    }

    try {
        // Search for both movies and TV shows
        const movieResponse = await fetch(`${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1`);
        const tvResponse = await fetch(`${API_URL}/search/tv?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1`);

        const movieData = await movieResponse.json();
        const tvData = await tvResponse.json();

        // Combine and sort results by popularity
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

            // Make the entire card clickable to play the video
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
// --- END: Search Functionality ---


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
        case 'movies': // Changed from 'movie' to 'movies' to match data-category
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
            // Ensure category tabs are visible when a tab is clicked
            document.getElementById('searchResultsSection').style.display = 'none';
            document.getElementById('tabbedContentSection').style.display = 'block';

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

// showVideoPlayer function (remains largely the same, but check position)
function showVideoPlayer(id, type = 'movie', triggerElement = null) {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoFrame = document.getElementById('videoFrame');

    fetch(`${API_URL}/${type}/${id}/videos?api_key=${API_KEY}&language=en`)
        .then(response => response.json())
        .then(data => {
            const videoKey = data.results[0]?.key;
            if (videoKey) {
                // Using the specific player URL from your HTML
                videoFrame.src = `https://player.videasy.net/${type}/${id}?color=8B5CF6`;

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

// Function to handle showing the default category content
const showDefaultCategoryContent = () => {
    const searchResultsSection = document.getElementById('searchResultsSection');
    const tabbedContentSection = document.getElementById('tabbedContentSection');

    searchResultsSection.style.display = 'none';
    tabbedContentSection.style.display = 'block';
    // Ensure the 'trending' tab is active and its content is loaded
    const trendingButton = document.querySelector('.tab-button[data-category="trending"]');
    if (trendingButton) {
        // Remove active class from all other buttons
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        trendingButton.classList.add('active');
        loadCategoryContent('trending');
    }
};


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
    turnstile.ready(function () {
    turnstile.render("#example-container", {
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


// Function to handle showing the default category content
const showDefaultCategoryContent = () => {
    const searchResultsSection = document.getElementById('searchResultsSection');
    const tabbedContentSection = document.getElementById('tabbedContentSection');

    searchResultsSection.style.display = 'none';
    tabbedContentSection.style.display = 'block';
    // Ensure the 'trending' tab is active and its content is loaded
    const trendingButton = document.querySelector('.tab-button[data-category="trending"]');
    if (trendingButton) {
        // Remove active class from all other buttons
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        trendingButton.classList.add('active');
        loadCategoryContent('trending');
    }
};


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
    turnstile.ready(function () {
    turnstile.render("#example-container", {
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
