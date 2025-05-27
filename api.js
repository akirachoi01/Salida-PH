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
const loadTrendingMovies = async () => {
  const trendingMovies = await fetchMovies('popular');
  renderMovies(trendingMovies, '.trending-container');
};

const loadTopRatedMovies = async () => {
  const topRatedMovies = await fetchMovies('top_rated');
  renderMovies(topRatedMovies, '.top-container');
};

const loadHorrorMovies = async () => {
  const horrorMovies = await fetchMovies('now_playing');
  renderMovies(horrorMovies, '.horror-container');
};

const loadComedyMovies = async () => {
  const comedyMovies = await fetchMovies('popular');
  renderMovies(comedyMovies, '.comedy-container');
};

const loadThrillerMovies = async () => {
  const thrillerMovies = await fetchMovies('popular');
  renderMovies(thrillerMovies, '.thriller-container');
};

const loadPopularAnime = async () => {
  const popularAnime = await fetchTVShows('popular');
  renderMovies(popularAnime, '.anime-popular-container');
};

const loadDramaTVShows = async () => {
  const dramaTVShows = await fetchTVShows('top_rated');
  renderMovies(dramaTVShows, '.drama-tv-container');
};

const init = () => {
  loadTrendingMovies();
  loadTopRatedMovies();
  loadHorrorMovies();
  loadComedyMovies();
  loadThrillerMovies();
  loadPopularAnime();
  loadDramaTVShows();
};

document.addEventListener('DOMContentLoaded', () => {
  // Initial content loading
  init();

  // Removed old calls to setupVideoPlayer() and setupVideoPlayerClose()
  // as your player.js file now handles the video player element creation and its close button.

  const header = document.getElementById('animatedHeader');
  if (header) {
    header.innerHTML = `
      <div class="logo-area">
        <img src="[https://salidaph.online/assests/salida.png](https://salidaph.online/assests/salida.png)" width="120" height="50" alt="Logo">
      </div>
      <nav class="nav-links">
        <div class="scrolling-text">
          <div style="display: inline-block; animation: marquee 10s linear infinite;">
            📢 SALIDAPH IS NOW ONLINE!
          </div>
        </div>
        <a href="/">Home</a>
        <a href="[https://github.com/akirachoi01](https://github.com/akirachoi01)">Github</a>
        <a href="/privacy-policy.html">Privacy</a>
        <a href="/terms.html">Term</a>
        <a href="[https://file.salidaph.online/SalidaPH.apk](https://file.salidaph.online/SalidaPH.apk)">Get APK</a>
      </nav>
    `;
  }

  // Attach event listeners to the dialog buttons
  const confirmPlayButton = document.getElementById('confirmPlayButton');
  const cancelPlayButton = document.getElementById('cancelPlayButton');

  if (confirmPlayButton) {
      confirmPlayButton.addEventListener('click', loadAndDisplayVideo);
  }
  if (cancelPlayButton) {
      cancelPlayButton.addEventListener('click', hideVideoConfirmDialog);
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

function fetchMoviesByGenre(type) {
  let genreId;
  if (type === 'movies') genreId = 28;
  else if (type === 'tv') genreId = 10759;
  else if (type === 'anime') genreId = 16;

  if (!genreId) return;

  const genreUrl = `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&language=en`;
  const movieList = document.getElementById('movieList');

  fetch(genreUrl)
    .then(res => res.json())
    .then(data => {
      movieList.innerHTML = '';
      data.results.forEach(movie => {
        const movieCard = createMovieCard(movie);
        movieCard.appendChild(movieCard);
      });
    })
    .catch(err => console.error('Genre fetch failed', err));
}

function createMovieCard(movie) {
  const movieCard = document.createElement('div');
  movieCard.classList.add('movie-card');
  movieCard.style.position = 'relative';

  // Ensure poster_path is valid, otherwise use a placeholder
  const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '[https://via.placeholder.com/500x750?text=No+Poster](https://via.placeholder.com/500x750?text=No+Poster)';
  const movieTitle = movie.title || movie.name; // Get the title for passing to dialog

  const movieImage = document.createElement('img');
  movieImage.src = posterUrl;
  movieImage.alt = movieTitle;

  // Modified event listener to first show the confirmation dialog
  movieImage.addEventListener('click', (e) =>
    showVideoConfirmDialog(movie.id, movie.media_type || (movie.title ? 'movie' : 'tv'), movieTitle, e.target)
  );

  const playButton = document.createElement('button');
  playButton.className = 'play-button';
  playButton.textContent = '▶';
  playButton.addEventListener('click', (e) => {
    e.stopPropagation();
    showVideoConfirmDialog(movie.id, movie.media_type || (movie.title ? 'movie' : 'tv'), movieTitle, movieImage);
  });

  const movieTitleElement = document.createElement('div');
  movieTitleElement.classList.add('movie-title');
  movieTitleElement.textContent = movieTitle;

  movieCard.appendChild(movieImage);
  movieCard.appendChild(playButton);
  movieCard.appendChild(movieTitleElement);

  return movieCard;
}

// The old `showVideoPlayer` function (and its setup/close calls) has been completely removed from `api.js`
// because its functionality is replaced by player.js and the new loadAndDisplayVideo function.
