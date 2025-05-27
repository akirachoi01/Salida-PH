// api.js

const API_KEY = 'ba3885a53bc2c4f3c4b5bdc1237e69a0';
const API_URL = 'https://api.themoviedb.org/3';

// New global variables to store video details temporarily
let currentVideoId = null;
let currentVideoType = null;
let currentTriggerElement = null;
let currentVideoTitle = null; // Store title for better alert messages

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
    const movieTitle = movie.title || movie.name; // Get title for display and passing

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

// --- NEW FUNCTIONS FOR VIDEO CONFIRMATION DIALOG ---

// Function to show the confirmation dialog
function showVideoConfirmDialog(id, type, title, triggerElement) {
    // Store current video details
    currentVideoId = id;
    currentVideoType = type;
    currentVideoTitle = title; // Store title
    currentTriggerElement = triggerElement;

    const dialogOverlay = document.getElementById('videoConfirmDialog');
    dialogOverlay.style.display = 'flex'; // Show the dialog
}

// Function to actually load and display the video
async function loadAndDisplayVideo() {
    const dialogOverlay = document.getElementById('videoConfirmDialog');
    dialogOverlay.style.display = 'none'; // Hide the dialog

    if (currentVideoId && currentVideoType) {
        // --- THIS IS THE CRITICAL PART YOU NEED TO IMPLEMENT ---
        // You need to fetch the actual video URL based on TMDb ID and type.
        // TMDb DOES NOT provide direct streaming links.
        // This is a placeholder for where you would get your actual video URL.
        // For demonstration, let's use a public domain video or a local file you serve.
        let videoUrl = '';

        // Example: If you host a video named after the TMDb ID
        // videoUrl = `https://salidaph.online/videos/${currentVideoId}.mp4`;

        // Example: Using a public domain video for testing (replace with your content)
        // For real use, you would need actual movie/TV show content.
        if (currentVideoType === 'movie') {
            // Example: Public domain short film (replace with your actual movie content)
            videoUrl = 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4';
            // You would likely have a more complex logic here to map TMDb ID to your video file
            // e.g., fetching a link from your own backend or a video database you manage.
            // await fetch(`/api/get-movie-stream?tmdbId=${currentVideoId}`)
        } else if (currentVideoType === 'tv') {
            // Example: Another public domain video (replace with your actual TV show content)
            videoUrl = 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4';
             // Similar to movies, you'd need logic to get the correct episode/season URL.
        } else {
            alert(`Unsupported media type: ${currentVideoType}`);
            return;
        }

        if (videoUrl) {
            // Call the playSelfHostedVideo function from player.js
            if (window.playSelfHostedVideo && typeof window.playSelfHostedVideo === 'function') {
                window.playSelfHostedVideo(videoUrl, currentTriggerElement);
            } else {
                console.error("playSelfHostedVideo function not found. Is player.js loaded?");
                alert("Video player not ready. Please try again.");
            }
        } else {
            alert(`No video source found for ${currentVideoTitle}.`);
        }

        // Reset stored variables
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
  init();
  // setupVideoPlayer(); // No longer needed as player.js handles setup
  // setupVideoPlayerClose(); // No longer needed as player.js handles close button

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
  const movieTitle = movie.title || movie.name;

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

  const movieTitleElement = document.createElement('div'); // Renamed to avoid conflict
  movieTitleElement.classList.add('movie-title');
  movieTitleElement.textContent = movieTitle;

  movieCard.appendChild(movieImage);
  movieCard.appendChild(playButton);
  movieCard.appendChild(movieTitleElement);

  return movieCard;
}

// showVideoPlayer function is entirely removed from api.js now, its logic is in player.js and loadAndDisplayVideo
