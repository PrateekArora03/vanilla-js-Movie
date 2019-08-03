var movieId = document.location.search.split("=")[1];
var main = document.querySelector("main");
var body = document.querySelector("body");
function createMovieUI(movieRes) {
  console.log(movieRes);
  body.style.backgroundImage = `url(http://image.tmdb.org/t/p/w500/${
    movieRes.backdrop_path
  })`;
  main.innerHTML = `<img src=http://image.tmdb.org/t/p/w500/${
    movieRes.poster_path
  }>
  <div>
    <h2>${movieRes.title}</h2>
    <br>
    <h4>${movieRes.overview}</h4>
    <br>
    <h4><span>Ratings⭐</span>:- ${movieRes.vote_average}</h4>
    <br>
    <h4><span>Budget</span>:- ${movieRes.budget}</h4>
    <br>
    <h4><span>Revenue</span>:- ${movieRes.revenue}</h4>
  </div>
  `;
}
var fetchMovie = new XMLHttpRequest();
fetchMovie.open(
  "GET",
  `https://api.themoviedb.org/3/movie/${movieId}?api_key=a93b2ae3e693c14c4a970d31c2a1f6a1&language=en-US`
);
fetchMovie.onload = () => createMovieUI(JSON.parse(fetchMovie.response));
fetchMovie.send();
