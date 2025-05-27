const apiKey = "f81f49b5c188b93c1db143f8ee3c6f8b";
const baseUrl = "https://api.themoviedb.org/3";

const sections = [
  { title: "Trending Movies", endpoint: "/trending/movie/day" },
  { title: "Horror Movies", endpoint: "/discover/movie?with_genres=27" },
  { title: "Anime Movies", endpoint: "/discover/movie?with_genres=16" },
  { title: "Top Rated", endpoint: "/movie/top_rated" },
  { title: "Latest TV Series", endpoint: "/tv/airing_today" }
];

async function fetchData(endpoint) {
  const url = endpoint.includes('?') ?
    `${baseUrl}${endpoint}&api_key=${apiKey}` :
    `${baseUrl}${endpoint}?api_key=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

function createMovieCard(movie, isTV = false) {
  const container = document.createElement("div");
  container.classList.add("movie-card");

  const title = movie.title || movie.name;
  const releaseDate = movie.release_date || movie.first_air_date || "Unknown";
  const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  container.innerHTML = `
    <img src="${poster}" alt="${title}" />
    <div class="movie-title">${title} (${releaseDate.split('-')[0]})</div>
  `;

  container.onclick = () => {
    const type = isTV ? "tv" : "movie";
    const id = movie.id;
    window.location.href = `https://player.videasy.net/${type}/${id}`;
  };

  return container;
}

async function displaySection(title, endpoint) {
  const isTV = endpoint.includes("/tv/");
  const movies = await fetchData(endpoint);

  const section = document.createElement("section");
  section.innerHTML = `<h2>${title}</h2>`;
  const movieList = document.createElement("div");
  movieList.classList.add("movie-list");

  movies.forEach(movie => {
    const card = createMovieCard(movie, isTV);
    movieList.appendChild(card);
  });

  section.appendChild(movieList);
  document.body.appendChild(section);
}

document.addEventListener("DOMContentLoaded", () => {
  sections.forEach(({ title, endpoint }) => displaySection(title, endpoint));
});

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
