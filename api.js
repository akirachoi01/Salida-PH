// api.js

const API_KEY = 'ba3885a53bc2c4f3c4b5bdc1237e69a0';
const API_URL = 'https://api.themoviedb.org/3';

// New global variables to store video details temporarily
let currentVideoId = null;
let currentVideoType = null;
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

    card.innerHTML = `
      <img src="${posterUrl}" alt="${movie.title || movie.name}" data-id="${movie.id}">
      <button class="play-button">▶</button>
      <div class="movie-card-info">
        <h3>${movie.title || movie.name}</h3>
        <p>${movie.release_date ? movie.release_date.split('-')[0] : 'No Year'}</p>
      </div>
    `;

    // Modified event listener to first show the confirmation dialog
    card.querySelector('img').addEventListener('click', (e) =>
      showVideoConfirmDialog(movie.id, movie.media_type || (movie.title ? 'movie' : 'tv'), e.target)
    );
    card.querySelector('.play-button').addEventListener('click', (e) => {
      e.stopPropagation();
      showVideoConfirmDialog(movie.id, movie.media_type || (movie.title ? 'movie' : 'tv'), e.target.closest('.movie-card').querySelector('img'));
    });

    container.appendChild(card);
  });
};

// --- NEW FUNCTIONS FOR VIDEO CONFIRMATION DIALOG ---

// Function to show the confirmation dialog
function showVideoConfirmDialog(id, type, triggerElement) {
    // Store current video details
    currentVideoId = id;
    currentVideoType = type;
    currentTriggerElement = triggerElement;

    const dialogOverlay = document.getElementById('videoConfirmDialog');
    dialogOverlay.style.display = 'flex'; // Show the dialog
}

// Function to actually load and display the video
function loadAndDisplayVideo() {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoFrame = document.getElementById('videoFrame');
    const dialogOverlay = document.getElementById('videoConfirmDialog');

    dialogOverlay.style.display = 'none'; // Hide the dialog

    if (currentVideoId && currentVideoType) {
        // You might still fetch video details here if needed,
        // but for videasy.net, the type and ID are usually enough.
      videoFrame.src = `https://player.videasy.net/${type}/${id}?color=8B5CF6`;

        // Use the stored trigger element for positioning
        const rect = currentTriggerElement?.getBoundingClientRect();
        const topOffset = window.scrollY + (rect?.top || 100);

        Object.assign(videoPlayer.style, {
            top: `${topOffset}px`,
            left: '50%',
            transform: 'translateX(-50%)',
            position: 'absolute',
            display: 'block',
            width: '80%',
            maxWidth: '800px',
            aspectRatio: '16 / 9',
            backgroundColor: '#000',
            zIndex: '10000',
            borderRadius: '12px',
        });

        videoPlayer.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Reset stored variables
        currentVideoId = null;
        currentVideoType = null;
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
    currentTriggerElement = null;
}

// --- END NEW FUNCTIONS ---


const loadTrendingMovies = async () => {
  const trendingMovies = await fetchMovies('popular');
  renderMovies(trendingMovies, '.trending-container');
};

const loadTopRatedMovies = async () => {
  const topRatedMovies = await fetchMovies('top_rated');
  renderMovies(topRatedMovies, '.top-container');
};

const loadHorrorMovies = async () => {
  const horrorMovies = await fetchMovies('now_playing'); // This might not be horror specific without genre filter
  renderMovies(horrorMovies, '.horror-container');
};

const loadComedyMovies = async () => {
  const comedyMovies = await fetchMovies('popular'); // This also might not be comedy specific
  renderMovies(comedyMovies, '.comedy-container');
};

const loadThrillerMovies = async () => {
  const thrillerMovies = await fetchMovies('popular'); // This also might not be thriller specific
  renderMovies(thrillerMovies, '.thriller-container');
};

const loadPopularAnime = async () => {
  const popularAnime = await fetchTVShows('popular');
  // You might want to filter by genre for true anime, e.g., genre 16
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
  setupVideoPlayer(); // Ensures the video player div and iframe are in the DOM
  setupVideoPlayerClose(); // Adds the close button to the video player

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

  // Attach event listeners to the dialog buttons (NEW)
  // Moved this block after header.innerHTML to ensure elements are in the DOM
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
        movieList.appendChild(movieCard);
      });
    })
    .catch(err => console.error('Genre fetch failed', err));
}

function createMovieCard(movie) {
  const movieCard = document.createElement('div');
  movieCard.classList.add('movie-card');
  movieCard.style.position = 'relative';

  // Ensure poster_path is valid, otherwise use a placeholder
  const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Poster';

  const movieImage = document.createElement('img');
  movieImage.src = posterUrl;
  movieImage.alt = movie.title || movie.name;

  // Modified event listener to first show the confirmation dialog
  movieImage.addEventListener('click', (e) =>
    showVideoConfirmDialog(movie.id, movie.media_type || (movie.title ? 'movie' : 'tv'), e.target)
  );

  const playButton = document.createElement('button');
  playButton.className = 'play-button';
  playButton.textContent = '▶';
  // Note: These styles are best placed in index.css as common styles
  // Removed Object.assign here as these styles should be in index.css for consistency
  playButton.addEventListener('click', (e) => {
    e.stopPropagation();
    showVideoConfirmDialog(movie.id, movie.media_type || (movie.title ? 'movie' : 'tv'), movieImage);
  });

  const movieTitle = document.createElement('div');
  movieTitle.classList.add('movie-title');
  movieTitle.textContent = movie.title || movie.name;

  movieCard.appendChild(movieImage);
  movieCard.appendChild(playButton);
  movieCard.appendChild(movieTitle);

  return movieCard;
}

// Original showVideoPlayer is now split into showVideoConfirmDialog and loadAndDisplayVideo
// The original showVideoPlayer function content is now within loadAndDisplayVideo
// This empty function is just a placeholder if other parts of your code directly call it
function showVideoPlayer() {
    // This function is now superseded by showVideoConfirmDialog and loadAndDisplayVideo
    // It's kept here in case external code relies on its existence, but it should not be called directly for video playback.
    console.warn("showVideoPlayer() called directly. Use showVideoConfirmDialog() instead for consistent behavior.");
}

function setupVideoPlayerClose() {
  const videoPlayer = document.getElementById('videoPlayer');
  // Check if close button already exists to prevent duplicates
  if (!videoPlayer.querySelector('.close-button')) {
      const closeButton = document.createElement('button');
      closeButton.textContent = '×';
      closeButton.className = 'close-button'; // Assign class for styling in CSS
      // Removed Object.assign here as these styles should be in index.css for consistency
      closeButton.addEventListener('click', () => {
        videoPlayer.style.display = 'none';
        document.getElementById('videoFrame').src = ''; // Stop video playback
      });
      videoPlayer.appendChild(closeButton);
  }
}

function setupVideoPlayer() {
  if (!document.getElementById('videoPlayer')) {
    const player = document.createElement('div');
    player.id = 'videoPlayer';
    player.style.display = 'none';
    // Removed Object.assign here as these styles should be in index.css for consistency
    Object.assign(player.style, {
      position: 'absolute',
      width: '80%',
      maxWidth: '800px',
      aspectRatio: '16 / 9',
      backgroundColor: '#000',
      borderRadius: '12px',
      overflow: 'hidden',
      zIndex: '10000',
    });

    const iframe = document.createElement('iframe');
    iframe.id = 'videoFrame';
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.style.border = 'none';
    player.appendChild(iframe);
    document.body.appendChild(player);
  }
}
