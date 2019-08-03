var inp = document.querySelector("#movie-name");
var listMovie = document.querySelector(".list-movie");
var movie = "";
function searchCard(res) {
  listMovie.innerHTML = "";
  res.results.forEach(element => {
    console.log(element);
    listMovie.innerHTML += `<li data-id=${element.id}>
    <img src=http://image.tmdb.org/t/p/w500/${element.poster_path}>
    <a href='./movie.html?q=${element.id}'>${element.title}</a>
    </li>`;
  });
}
function movieReq(movieName) {
  var mov = new XMLHttpRequest();
  mov.open(
    "GET",
    `https://api.themoviedb.org/3/search/movie?api_key=a93b2ae3e693c14c4a970d31c2a1f6a1&language=en-US&query=${movieName}&page=1`
  );
  mov.onload = () => searchCard(JSON.parse(mov.response));
  mov.send();
}

inp.addEventListener("keyup", evt => {
  movieReq(evt.target.value);
});
