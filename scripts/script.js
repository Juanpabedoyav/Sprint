// conecct de API
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_URL =
  'http://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const principal = document.getElementById("principal");

// get data
const getData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  const { results } = data;
  showMovies(data.results);
};

// bottoms/////////////////////
const btnSearch = document.getElementById("btnSearch");
//

// Event listeners

// Event Search
// btnSearch.addEventListener("click", async () => {
//   const search = document.getElementById("movie-search").value;
//   const data = await getData();
//   let letterSearch = search.substring(0, 4);
//   let getSearch = data.filter(
//     (movie) =>
//       movie.superhero.toLowerCase() === search.toLowerCase() ||
//       movie.publisher.toLowerCase() === search.toLowerCase()
//   );
//   console.log(data);
//   // console.log(JSON.parse(getSearch));

//   //  data.forEach(movie => {
//   //     let {
//   //         superhero,
//   //         name,
//   //         publisher,
//   //         alter_ego,
//   //         image,
//   //     } = movie;
//   //     if (superhero.substring(0, 4) === letterSearch.substring(0, 4) ){
//   //     console.log(letterSearch);
//   // }
//   // });
// });



function showMovies(movie) {
  movie.forEach((movies) => {
    const {
      original_title,
      overview,
      popularity,
      poster_path,
      title,
      vote_average
    } = movies;
    const info = document.createElement("div");
    info.classList.add("card");
    info.innerHTML = `
        <div class="card-content ">
       <a id="item"> <img src="${IMG_PATH + poster_path}" alt=></a>
          </div>
      `;
    principal.appendChild(info);
  });
}

const todas = document.getElementById("todas");
const menosV = document.getElementById("menosV");
const masV = document.getElementById("masV");

menosV.addEventListener("click", async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    const{results} = data;
    const navFiltro = document.getElementById('navFiltro');
    let filtro = results.filter(movie => (movie.vote_average < 7))

    navFiltro.innerHTML = "";
    navFiltro.innerHTML +=

    `  <p class="title">Menos Valoradas</p> 
    <div id="principal"></div>
   
    `
    console.log(filtro);
})
masV.addEventListener("click", async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    const{results} = data;
    const navFiltro = document.getElementById('navFiltro');
    let filtro = results.filter(movie => (movie.vote_average < 7))

    navFiltro.innerHTML = "";
    navFiltro.innerHTML +=

    `  <p class="title">Más Valoradas</p> 
    <div id="principal"></div>
   
    `
    console.log(filtro);
})    
getData(API_URL);

// CRUD agregar peliculas
const UrlAdd = 'http://localhost:4001/newMovie'

const add = document.getElementById('add');
const modal = document.querySelector('.modal');
const bG = document.getElementById('mod');

add.addEventListener('click', (e)=>{
  e.preventDefault();
  modal.classList.add('is-active');
})
bG.addEventListener('click',(e)=>{
  e.preventDefault();
  
  modal.classList.remove('is-active');

})









