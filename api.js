// api.js

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

    card.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title || movie.name}" data-id="${movie.id}">
      <button class="play-button" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(0,0,0,0.6);border:none;border-radius:50%;color:#fff;font-size:24px;cursor:pointer">▶</button>
      <div class="movie-card-info" style="position: absolute; bottom: 10px; left: 10px; color: white; background-color: rgba(0, 0, 0, 0.6); padding: 5px; border-radius: 4px;">
        <h3>${movie.title || movie.name}</h3>
        <p>${movie.release_date ? movie.release_date.split('-')[0] : 'No Year'}</p>
      </div>
    `;
    
    card.querySelector('img').addEventListener('click', (e) =>
      showVideoPlayer(movie.id, movie.media_type || (movie.title ? 'movie' : 'tv'), e.target)
    );
    card.querySelector('.play-button').addEventListener('click', (e) => {
      e.stopPropagation();
      showVideoPlayer(movie.id, movie.media_type || (movie.title ? 'movie' : 'tv'), e.target.closest('.movie-card').querySelector('img'));
    });

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
  movieImage.addEventListener('click', (e) =>
    showVideoPlayer(movie.id, movie.media_type || (movie.title ? 'movie' : 'tv'), e.target)
  );

  const playButton = document.createElement('button');
  playButton.className = 'play-button';
  playButton.textContent = '▶';
  Object.assign(playButton.style, {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'rgba(0, 0, 0, 0.6)',
    border: 'none',
    borderRadius: '50%',
    color: '#fff',
    fontSize: '24px',
    cursor: 'pointer',
  });
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
  Object.assign(closeButton.style, {
    position: 'absolute',
    top: '10px',
    right: '10px',
    zIndex: '9999',
    fontSize: '24px',
    background: 'transparent',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
  });
  closeButton.addEventListener('click', () => {
    videoPlayer.style.display = 'none';
    document.getElementById('videoFrame').src = '';
  });
  videoPlayer.appendChild(closeButton);
}

function setupVideoPlayer() {
  if (!document.getElementById('videoPlayer')) {
    const player = document.createElement('div');
    player.id = 'videoPlayer';
    player.style.display = 'none';
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

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('movieList')) {
    fetchMoviesByGenre('movies');
  }

  const header = document.getElementById('animatedHeader');
  if (header) {
    header.innerHTML = `
      <div class="logo-area" style="display: flex; align-items: center;">
        <img src="https://salidaph.online/assests/salida.png" width="120" height="50" style="margin-right: 10px;" alt="Logo">
      </div>
      <nav class="nav-links" style="display: flex; gap: 15px; align-items: center;">
        <div style="overflow: hidden; white-space: nowrap; color: white;">
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
