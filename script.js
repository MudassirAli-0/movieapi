let inp = document.querySelector(".search");
let mainn = document.querySelector(".main");
let formm = document.querySelector("form");

const apiUrl =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const imgUrl = "https://image.tmdb.org/t/p/w1280";
const searchApi =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

showMovies(apiUrl);
async function showMovies(data) {
  let resp = await fetch(data);
  let datta = await resp.json();
  let obj = datta.results;

  obj.forEach((ele) => {
    let container = document.createElement("div");
    container.classList.add("movie-container");
    mainn.appendChild(container);

    let image = document.createElement("img");
    image.classList.add("image");
    image.src = imgUrl + ele.poster_path;
    container.appendChild(image);

    let text = document.createElement("div");
    text.classList.add("image-text");
    container.appendChild(text);

    text.innerHTML = `
          <p>${ele.title}</p>
          <img class = 'inner_img' src = '${imgUrl + ele.poster_path}'>
          <span> Released in [${ele.release_date}]</span>
          `;
  });
}

formm.addEventListener("submit", function (e) {
  e.preventDefault();

  mainn.innerHTML = "";

  let name = searchApi + inp.value;
  console.log(name);

  if (name) {
    showMovies(name);
    inp.value = "";
  }
});
