// Corrected and unified API integration script with close button, TV show video support, and responsive video player styling with play buttons centered
const CLIENT_ID = '1094031240497-6rint2uigjegr73vjpi56uasach0o9m8.apps.googleusercontent.com';
const REDIRECT_URI = 'https://salida-ph-20.vercel.app/auth.html'; // This file handles the callback
const SCOPE = 'profile email';

function loginWithGoogle() {
  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=${encodeURIComponent(SCOPE)}&include_granted_scopes=true`;
  window.location.href = authUrl;
}
const API_KEY = 'ba3885a53bc2c4f3c4b5bdc1237e69a0';
const API_URL = 'https://api.themoviedb.org/3';

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

    // Add image, centered play button, and title/year
    card.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title || movie.name}" data-id="${movie.id}">
      <button class="play-button" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(0,0,0,0.6);border:none;border-radius:50%;color:#fff;font-size:24px;cursor:pointer">▶</button>
      <div class="movie-card-info" style="position: absolute; bottom: 10px; left: 10px; color: white; background-color: rgba(0, 0, 0, 0.6); padding: 5px; border-radius: 4px;">
        <h3>${movie.title || movie.name}</h3>
        <p>${movie.release_date ? movie.release_date.split('-')[0] : 'No Year'}</p>
      </div>
    `;
    
    // Add event listeners for image click and play button click
    card.querySelector('img').addEventListener('click', (e) => showVideoPlayer(movie.id, movie.media_type || (movie.title ? 'movie' : 'tv'), e.target));
    card.querySelector('.play-button').addEventListener('click', (e) => {
      e.stopPropagation();
      showVideoPlayer(movie.id, movie.media_type || (movie.title ? 'movie' : 'tv'), e.target.closest('.movie-card').querySelector('img'));
    });
    
    // Append to container
    container.appendChild(card);
  });
};

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
  setupVideoPlayer();
  setupVideoPlayerClose();
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

  const movieImage = document.createElement('img');
  movieImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  movieImage.addEventListener('click', (e) => showVideoPlayer(movie.id, movie.media_type || (movie.title ? 'movie' : 'tv'), e.target));

  const playButton = document.createElement('button');
  playButton.className = 'play-button';
  playButton.textContent = '▶';
  playButton.style.position = 'absolute';
  playButton.style.top = '50%';
  playButton.style.left = '50%';
  playButton.style.transform = 'translate(-50%, -50%)';
  playButton.style.background = 'rgba(0, 0, 0, 0.6)';
  playButton.style.border = 'none';
  playButton.style.borderRadius = '50%';
  playButton.style.color = '#fff';
  playButton.style.fontSize = '24px';
  playButton.style.cursor = 'pointer';
  playButton.addEventListener('click', (e) => {
    e.stopPropagation();
    showVideoPlayer(movie.id, movie.media_type || (movie.title ? 'movie' : 'tv'), movieImage);
  });

  const movieTitle = document.createElement('div');
  movieTitle.classList.add('movie-title');
  movieTitle.textContent = movie.title || movie.name;

  movieCard.appendChild(movieImage);
  movieCard.appendChild(playButton);
  movieCard.appendChild(movieTitle);

  return movieCard;
}

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
        const topOffset = window.scrollY + (rect?.top || 100);
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
  const closeButton = document.createElement('button');
  closeButton.textContent = '×';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '10px';
  closeButton.style.right = '10px';
  closeButton.style.zIndex = '9999';
  closeButton.style.fontSize = '24px';
  closeButton.style.background = 'transparent';
  closeButton.style.border = 'none';
  closeButton.style.color = '#fff';
  closeButton.style.cursor = 'pointer';
  closeButton.addEventListener('click', () => {
    videoPlayer.style.display = 'none';
    document.getElementById('videoFrame').src = '';
  });
  videoPlayer.appendChild(closeButton);
}

function setupVideoPlayer() {
  const videoPlayer = document.getElementById('videoPlayer');
  if (!videoPlayer) {
    const player = document.createElement('div');
    player.id = 'videoPlayer';
    player.style.display = 'none';
    player.style.position = 'absolute';
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

if (document.getElementById('movieList')) {
  fetchMoviesByGenre('movies');
}
document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('animatedHeader');
  header.innerHTML = `
    <div class="logo-area" style="display: flex; align-items: center;">
      <!-- Corrected path to SVG logo -->
      <object type="image/svg+xml" data="/static/images/salida_ph.svg" width="30" height="30" style="margin-right: 10px;">
      </object>
      <span class="header-title" style="font-size: 24px; font-weight: bold; color: #333;">SALIDAPH</span>
    </div>
    <nav class="nav-links" style="display: flex; gap: 15px; align-items: center;">
      <a href="#">Home</a>
      <a href="#">Movies</a>
      <a href="#">Series</a>
      <a href="#">Anime</a>
      <a href="#">Support</a>
    </nav>
  `;
});

