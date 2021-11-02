// conecct de API
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=";
 
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
  const {
    page,
    results
  } = data;
  showMovies(data.results);
  console.log(data.results)

};
const load = document.querySelector('.load')

window.addEventListener('scroll',async()=>{
  
  
  
  const{scrollTop, scrollHeight, clientHeight }= document.documentElement;
  if(scrollTop + clientHeight >= scrollHeight - 1 ){
  load.classList.add('animacion'); 
  setTimeout(preloader(),8000); 

  }



})
function preloader(){
  for (let i = 2; i <= 10; i++) {
  
  load.classList.add('animacion')
 setTimeout( getData(API_URL+`${[i]}`),8000);
}
}
  
  
  //   getData(API_URL+"2");
  //  if (scrollTop + clientHeight >= scrollHeight -100){
  //     getData(API_URL+"3");

  //   }
  //   if (scrollTop + clientHeight >= scrollHeight -100){
  //     getData(API_URL+"4");

  //   }
  //       if (scrollTop + clientHeight >= scrollHeight -100){
  //     getData(API_URL+"5");

  //   }
  // }
// });

// bottoms/////////////////////



// filtros de barra de busqueda de pelicula
const btnSearch = document.getElementById('btnSearch');
const todas = document.getElementById('todas');
const menosV = document.getElementById('menosV');
const masV = document.getElementById('masV');

btnSearch.addEventListener("click",  (e) => {
e.preventDefault();
  const search = document.getElementById('movie-search').value;
  // principal.innerHTML=""

  principal.innerHTML=""
   getData(SEARCH_URL + search);
  let filtroMovie = document.getElementById('filtroMovie')
  principal.innerHTML=""
if(search == "" || !(SEARCH_URL + search)){
  filtroMovie.innerHTML = "";
  principal.innerHTML=`
  <img class= "noEncontrado"src="img/Stuck at Home Searching.png">
  <p class="title title-search">No se encontraron resultados para ${search}</p>
  `
  console.log("no se encuentra")
}
});
// funcionalidad de slider bar
function slideBar(){
const img = document.getElementsByClassName('img-slide');
const mover1 = document.getElementById('mover1');
const mover2 = document.getElementById('mover2');
const mover3 = document.getElementById('mover3');
mover1.addEventListener('click', (e)=>{
  e.preventDefault();
img[0].setAttribute('style', 'transform: translateX(0px)');
img[1].setAttribute('style', 'transform: translateX(0px)');
img[2].setAttribute('style', 'transform: translateX(0px)');
})
mover2.addEventListener('click', (e)=>{
  e.preventDefault();
img[0].setAttribute('style', 'transform: translateX(-1230px)');
img[1].setAttribute('style', 'transform: translateX(-1230px)');
img[2].setAttribute('style', 'transform: translateX(-1230px)');
})
mover3.addEventListener('click', (e)=>{
  e.preventDefault();
img[0].setAttribute('style', 'transform: translateX(-1230px)');
img[1].setAttribute('style', 'transform: translateX(-2460px)');
img[2].setAttribute('style', 'transform: translateX(-2460px)');
})
}
slideBar();






function showMovies(movie) {

 
    movie.forEach((x,i) => {
    const {
      original_title,
      overview,
      popularity,
      poster_path,
      title,
      vote_average
    } = x;  
  
    //    console.log(Math.floor(Math.random()))

    if (vote_average < 7) {
      let star = "fas fa-star-half";
      const info = document.createElement("div");
      info.classList.add("card");
      info.innerHTML = `
          <div class="card-content ">
         <a class="item"> <img src="${IMG_PATH + poster_path}" alt=></a>
         <p class="estrellita" ><i class="${star}"></i> <span class="voto">${vote_average}</span></p>
            </div>
        `;
      principal.append(info);
    } else {
      let star = "fas fa-star";
      const info = document.createElement("div");
      info.classList.add("card");
      info.innerHTML = `
        <div class="card-content ">
       <a class="item"> <img src="${IMG_PATH + poster_path}" alt=></a>
       <p class="estrellita" ><i class="${star}"></i> <span class="voto">${vote_average}</span></p>
          </div>
      `;
      principal.appendChild(info);
    }
 
    const principal1= document.getElementById('principal1');
    todas.addEventListener('click', () => {
      // const principal1= document.getElementById('principal1');
      principal.innerHTML=""

      if (vote_average < 7) {

        let star = "fas fa-star-half";
        const info = document.createElement("div");
        info.classList.add("card");
        filtroMovie.innerHTML = ""
        filtroMovie.innerHTML += `<p class="title">Todas las peliculas </p>`
                info.innerHTML = `
          <div class="card-content ">
         <a id="item"> <img src="${IMG_PATH + poster_path}" alt=></a>
         <p class="estrellita"><i class="${star}"></i> <span class="voto">${vote_average}</span></p>
            </div>
        `;
        principal1.append(info);

      } else {
        principal.innerHTML=""

        let star = "fas fa-star";
        const info = document.createElement("div");
        info.classList.add("card");
        info.innerHTML = `
        <div class="card-content ">
       <a class="item"> <img src="${IMG_PATH + poster_path}" alt=></a>
       <p class="estrellita"><i class="${star}"></i> <span class="voto">${vote_average}</span></p>
          </div>
      `;

        principal1.append(info);
      }
    });

    menosV.addEventListener('click', () => {
      principal.innerHTML=""
      if (vote_average < 7) {
        // const cartel = document.getElementById('cartel');
        const info = document.createElement("div");
        info.classList.add("card");
        filtroMovie.innerHTML = ""
        filtroMovie.innerHTML += `<p class="title">Peliculas Menos Valoradas</p>`
        // info.innerHTML =""
        info.innerHTML = `
        <div class="card-content ">
       <a class="item"> <img src="${IMG_PATH + poster_path}" alt=></a>
       <p class="estrellita"> <i class="fas fa-star-half"></i> <span class="voto">${vote_average}</span></p>
          </div>
      `;
        principal1.append(info);
      }

    });

    masV.addEventListener('click', () => {
      principal.innerHTML=""
      if (vote_average > 7) {
        // principal.innerHTML = "" 
        const info = document.createElement("div");
        info.classList.add("card");
        filtroMovie.innerHTML = ""
        filtroMovie.innerHTML += `<p class="title">Peliculas Más Valoradas</p>`
        // principal.innerHTML = ""
        info.innerHTML = `
        <div class="card-content ">
       <a id="item"> <img src="${IMG_PATH + poster_path}" alt=></a>
       <p class="estrellita"><i class="fas fa-star"></i> <span class="voto">${vote_average}</span></p>
          </div>
      `;
        principal1.append(info);
      }
    });

    //modalfuncion
    function modales () {
        let card = document.querySelectorAll('.card')[i];
         
         
     
        card.addEventListener('click', ()=>{
          let star = "fas fa-star";
          if(vote_average < 7){
            star = "fas fa-star-half"
        }
       
        let modal = document.querySelector('.modal');
        modal.classList.add('is-active');
        let modalBackground=document.querySelector('.modal-background');
        let modalContent=document.querySelector('.modal-content');
        let modalClose = document.querySelector('.modal-close');
        const caja = document.createElement('div');
        caja.classList.add('container')
        caja.classList.add('container__movies')
        caja.innerHTML= `
        <div class="modal__image">
        <div class="card-content imagen--modal ">
        <img src="${IMG_PATH + poster_path}">
        <p class="estrellita" ><i class="${star}"></i> <span class="voto">${vote_average}</span></p>
        </div>
        </div>
        <div class="container info__modal">
            <h3 class="title">${title}</h3>
            <p>${overview}</p>
            <a class="button button__card button__card-ver-aho" href="">
            <strong> ▶  ver ahora</strong>
            </a>
            <a id="despuesito"class="button button__card button__card-ver-des" href="">
            <strong> + ver después</strong>
            </a>
        </div>  
        `    
        modalClose.style.display= "block"
            modalContent.innerHTML= "";
            modalContent.append(caja);
        });
        }
      
    modales();
  }) // fin forEach
} //fin funcion show movie with event listener




// CRUD agregar peliculas
// const m = document.('item')
// m.addEventListener('click', ()=>{
  // console.log("abriste modal")
// })



const UrlAdd = '  '
const add = document.getElementById('add');
const modal = document.querySelector('.modal');
const content = document.querySelector('.modal-content');
const modalClose = document.querySelector('.modal-close');
const crud = document.querySelector('#crud');
const formRegistro =document.querySelector('#form')
console.log(formRegistro)
modalClose.style.display = " none";

add.addEventListener('click', (e) => {
  e.preventDefault();
 
 
  modal.classList.add('is-active');
  modalClose.style.display = "inline";

})
modalClose.addEventListener('click', (e) => {
  modal.classList.remove('is-active');
  modalClose.style.display = "none";
})

//POST
 const nuevaPelicula = async(a ,b , c, d, v) => {
  await fetch('http://localhost:4001/newMovie', {
    method: 'POST',
    body: JSON.stringify({
      overview:`${a}`,
      poster_path:`${b}`,
      title:`${c}`,
      release_date:`${d}`,
      vote_average:`${v}`
    }),
    headers :{
      "Content-Type": "application/json; charset=UTF-8"
    },
  });
}

const btnAgg = document.getElementById('btnAgg')
btnAgg.addEventListener('click',async(e)=>{
  e.preventDefault()
  let nombrePelicula = document.getElementById('nombre-pelicula').value
let releaseDate = document.getElementById('release_date').value;
let voteAverage = document.getElementById('vote_average').value;
let urlImagen = document.getElementById('url-imagen').value;
let descripcion = document.getElementById('descripcion').value;
  
await nuevaPelicula(descripcion, urlImagen ,nombrePelicula ,releaseDate, voteAverage);

})
const btnPeli = document.getElementById('btnPeli');
btnPeli.addEventListener('click', async (e) => {
e.preventDefault();
let buscaquedaPeli = document.getElementById('buscaquedaPeli').value;
let nombrePelicula = document.getElementById('nombre-pelicula').readOnly = true;
let releaseDate = document.getElementById('release_date').readOnly = true;
let voteAverage = document.getElementById('vote_average').readOnly = true;
let urlImagen = document.getElementById('url-imagen').readOnly = true;
let descripcion = document.getElementById('descripcion').readOnly = true;

  const res = await fetch(API_URL);
  const data = await res.json();
  const {
    results
  } = data
  console.log(data);
let fil = results.find(y=>(y.title == buscaquedaPeli)) 

document.getElementById('descripcion').value = fil.overview;
document.getElementById('url-imagen').value = fil.poster_path; 
document.getElementById('nombre-pelicula').value = fil.title;
document.getElementById('release_date').value = fil.release_date;
document.getElementById('vote_average').value =fil.vote_average;

a=fil.overview;
b=fil.poster_path
c=fil.title
d= fil.release_date
v=fil.vote_average

// console.log(i);

const btnEdit = document.querySelector('#btnEdit');
btnEdit.addEventListener('click', async (e)=>{ 
  e.preventDefault();

let nombrePelicula = document.getElementById('nombre-pelicula').readOnly = false;
let releaseDate = document.getElementById('release_date').readOnly = false;
let voteAverage = document.getElementById('vote_average').readOnly = false;
let urlImagen = document.getElementById('url-imagen').readOnly = false;
let descripcion = document.getElementById('descripcion').readOnly = false;

const btnAgg =document.querySelector('#btnAgg')
const contenido = document.createTextNode("Guardar Cambios")
btnAgg.classList.add('cambiosPost')
btnAgg.innerHTML = "";
btnAgg.appendChild(contenido);

const guardarCambios = document.querySelector('.cambiosPost')
console.log('http://localhost:4001/newMovie'+"/"+fil.id);
guardarCambios.addEventListener('click', async (e)=>{
  e.preventDefault();
  const editPelicula = async(a ,b , c, d, v) => {
    await fetch('http://localhost:4001/newMovie', {
      method: 'POST',
      body: JSON.stringify({
        overview:`${a}`,
        poster_path:`${b}`,
        title:`${c}`,
        release_date:`${d}`,
        vote_average:`${v}`
      }),
      headers :{
        "Content-Type": "application/json; charset=UTF-8"
      },
    });
  }
  await editPelicula(a, b, c, d ,v);
})

});// fin  btnEdit

}),//fin de btnBuscarPelicula




  //
  // <li><a href="#raya"><p ></p></a></li>
  // <li><a href="#unidos"><p ></p></a></li>



getData(API_URL);