// conecct de API
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=vote_average&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_URL =
  'http://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=';
 
// HTML DOM
const principal = document.getElementById("principal");
const filtroMovie = document.getElementById('filtroMovie');
const cartel = document.querySelector('#cartel');
// get data
const getData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  const { results } = data;
  showMovies(data.results);
};

// bottoms/////////////////////
const btnSearch = document.getElementById("btnSearch");
const todas = document.getElementById("todas");
const menosV = document.getElementById("menosV");
const masV = document.getElementById("masV");
//



// Event Search

btnSearch.addEventListener("click", async () => {
  const search = document.getElementById('movie-search').value;

  const resNew = await fetch(SEARCH_URL+search);
  const dataNew = await resNew.json();
  const {results} = dataNew;
  console.log(dataNew)
//  let filtroBusqueda = results.filter(x=>(x.title === search));

 // const res = await fetch(SEARCH_URL);
  // const data = await res.json();
  // // const {}
});








function showMovies(movie) {
  movie.forEach((x) => {
    const {
      original_title,
      overview,
      popularity,
      poster_path,
      title,
      vote_average
    } = x;
    // console.log(IMG_PATH);
    // console.log(poster_path);
    
    const info = document.createElement("div");
    info.classList.add("card");
    info.innerHTML = `
        <div class="card-content ">
       <a id="item"> <img src="${IMG_PATH + poster_path}" alt=></a>
       <p class="estrellita" ><i class="fas fa-star"></i> <span class="voto">${vote_average}</span></p>
          </div>
      `;
      principal.appendChild(info);

  todas.addEventListener('click', ()=>{   
    const info = document.createElement("div");
    info.classList.add("card");
    info.innerHTML = `
        <div class="card-content ">
       <a id="item"> <img src="${IMG_PATH + poster_path}" alt=></a>
       <p class="estrellita"><i class="fas fa-star"></i> <span class="voto">${vote_average}</span></p>
          </div>
      `;
    principal.appendChild(info);
  });

  menosV.addEventListener('click', ()=>{

    if(vote_average < 8){
      // const cartel = document.getElementById('cartel');
    const info = document.createElement("div");
    info.classList.add("card");
    filtroMovie.innerHTML = ""
    filtroMovie.innerHTML +=`<p class="title">Peliculas Menos Valoradas</p>`
    // principal.innerHTML = ""
    info.innerHTML = `
        <div class="card-content ">
       <a id="item"> <img src="${IMG_PATH + poster_path}" alt=></a>
       <p class="estrellita"> <i class="fas fa-star-half"></i> <span class="voto">${vote_average}</span></p>
          </div>
      `;
    principal.appendChild(info);
    }
    
  });

  masV.addEventListener('click', ()=>{
    if(vote_average > 6){
      // principal.innerHTML = "" 
    const info = document.createElement("div");
    info.classList.add("card");
    filtroMovie.innerHTML = ""
    filtroMovie.innerHTML +=`<p class="title">Peliculas Más Valoradas</p>`
    // principal.innerHTML = ""
    info.innerHTML = `
        <div class="card-content ">
       <a id="item"> <img src="${IMG_PATH + poster_path}" alt=></a>
       <p class="estrellita"><i class="fas fa-star"></i> <span class="voto">${vote_average}</span></p>
          </div>
      `;
    principal.appendChild(info);
    }
  });
  }) // fin forEach
}//fin funcion show movie with event listener


// CRUD agregar peliculas
const UrlAdd = 'http://localhost:4001/newMovie'
const add = document.getElementById('add');
const modal = document.querySelector('.modal');
const bG = document.getElementById('mod');

add.addEventListener('click', (e)=>{
  e.preventDefault();
  modal.classList.add('is-active');
})
// bG.addEventListener('click',(e)=>{
//   e.preventDefault();
  
//   modal.classList.remove('is-active');

// })





getData(API_URL);




