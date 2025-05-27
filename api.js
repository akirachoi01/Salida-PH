// api.js

const API_KEY = 'ba3885a53bc2c4f3c4b5bdc1237e69a0';
const API_URL = 'https://api.themoviedb.org/3';

// Global variables to store video details temporarily
let currentVideoId = null;
let currentVideoType = null;
let currentVideoTitle = null; // Added to store the video title
let currentTriggerElement = null;

const fetchMovies = async (category) => {
  try {
    const response = await fetch(`${API_URL}/movie/${category}?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

const fetchTVShows = async (category) => {
  try {
    const response = await fetch(`${API_URL}/tv/${category}?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching TV shows:', error);
    return [];
  }
};

const renderMovies = (movies, containerSelector) => {
  const container = document.querySelector(containerSelector);
  container.innerHTML = '';

  movies.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.style.position = 'relative';

    // Ensure poster_path is valid, otherwise use a placeholder
    const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'https://via.placeholder.com/200x300?text=No+Poster';
    const movieTitle = movie.title || movie.name; // Get the title for display and for passing to dialog

    card.innerHTML = `
      <img src="${posterUrl}" alt="${movieTitle}" data-id="${movie.id}">
      <button class="play-button">▶</button>
      <div class="movie-card-info">
        <h3>${movieTitle}</h3>
        <p>${movie.release_date ? movie.release_date.split('-')[0] : 'No Year'}</p>
      </div>
    `;

    // Modified event listener to first show the confirmation dialog
    card.querySelector('img').addEventListener('click', (e) =>
      showVideoConfirmDialog(movie.id, movie.media_type || (movie.title ? 'movie' : 'tv'), movieTitle, e.target)
    );
    card.querySelector('.play-button').addEventListener('click', (e) => {
      e.stopPropagation();
      showVideoConfirmDialog(movie.id, movie.media_type || (movie.title ? 'movie' : 'tv'), movieTitle, e.target.closest('.movie-card').querySelector('img'));
    });

    container.appendChild(card);
  });
};

---

### Functions for Video Confirmation Dialog

```javascript
// Function to show the confirmation dialog
function showVideoConfirmDialog(id, type, title, triggerElement) {
    // Store current video details
    currentVideoId = id;
    currentVideoType = type;
    currentVideoTitle = title; // Store the title
    currentTriggerElement = triggerElement;

    const dialogOverlay = document.getElementById('videoConfirmDialog');
    dialogOverlay.style.display = 'flex'; // Show the dialog
}

// Function to actually load and display the video using your self-hosted player
async function loadAndDisplayVideo() {
    const dialogOverlay = document.getElementById('videoConfirmDialog');
    dialogOverlay.style.display = 'none'; // Hide the dialog

    if (currentVideoId && currentVideoType) {
        // --- CONFIGURE THESE VIDEO URLS FOR YOUR HOSTED CONTENT ---
        // You need to replace these placeholder URLs with the actual paths to your video files.
        // TMDb DOES NOT provide direct streaming links; you need to host them yourself.
        let videoUrl = '';

        // Example: If your videos are named like 'movie-12345.mp4' or 'tv-67890.mp4'
        // located in a 'videos' folder on your domain.
        // Remember to replace these with the actual paths to your hosted files!
        if (currentVideoType === 'movie') {
            videoUrl = `https://salidaph.online/videos/movie-${currentVideoId}.mp4`;
            console.log(`Attempting to load movie: ${currentVideoTitle} (ID: ${currentVideoId}) from ${videoUrl}`);
        } else if (currentVideoType === 'tv') {
            // For TV shows, you'd typically need more info (season, episode)
            // Example: `https://salidaph.online/videos/tv-show-${currentVideoId}/s01e01.mp4`
            videoUrl = `https://salidaph.online/videos/tv-${currentVideoId}.mp4`; // Simplified example path
            console.log(`Attempting to load TV show: ${currentVideoTitle} (ID: ${currentVideoId}) from ${videoUrl}`);
        } else {
            alert(`Unsupported media type: ${currentVideoType} for "${currentVideoTitle}".`);
            return;
        }

        if (videoUrl) {
            // **THIS IS THE LINE THAT CALLS YOUR SELF-HOSTED PLAYER**
            // It expects `window.playSelfHostedVideo` to be defined in your `player.js` file.
            if (window.playSelfHostedVideo && typeof window.playSelfHostedVideo === 'function') {
                window.playSelfHostedVideo(videoUrl, currentTriggerElement);
            } else {
                console.error("`window.playSelfHostedVideo` function not found. Ensure player.js is loaded correctly and defines this function.");
                alert("Video player setup error. Please check the browser console for details.");
            }
        } else {
            alert(`No video source URL could be determined for "${currentVideoTitle}". Please ensure the video content is hosted on your server.`);
        }

        // Reset stored variables after attempting to load video
        currentVideoId = null;
        currentVideoType = null;
        currentVideoTitle = null;
        currentTriggerElement = null;
    } else {
        alert('Could not retrieve video information. Please try again.');
    }
}

// Function to hide the video confirmation dialog
function hideVideoConfirmDialog() {
    const dialogOverlay = document.getElementById('videoConfirmDialog');
    dialogOverlay.style.display = 'none';
    // Clear stored variables if user cancels
    currentVideoId = null;
    currentVideoType = null;
    currentVideoTitle = null;
    currentTriggerElement = null;
}
