// conecct de API
const URL = 'https://raw.githubusercontent.com/jennymontoya1001/endpointheroesjson/main/heroes.json'; 
const obtenerData = async ()=>{
const res = await fetch(URL);
const data = await res.json();   
const {results} = data; 
return results;
// descomposicion de data
// console.log(results);
}


// bottoms
const btnSearch = document.getElementById('btnSearch');
// 

// Event listeners 

// Event Search
btnSearch.addEventListener('click', async () =>{
    const search = document.getElementById('movie-search').value;
    const data = await obtenerData();
    let letterSearch = search.substring(0, 4);
    let getSearch = data.filter(movie =>(movie.superhero.toLowerCase() === search.toLowerCase()) || (movie.publisher.toLowerCase() === search.toLowerCase()));
    console.log(data);
        // console.log(JSON.parse(getSearch));

    //  data.forEach(movie => {
    //     let {
    //         superhero,
    //         name,
    //         publisher,
    //         alter_ego,
    //         image,
    //     } = movie;
    //     if (superhero.substring(0, 4) === letterSearch.substring(0, 4) ){
    //     console.log(letterSearch);
    // }    
    // });
});
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_URL = 'http://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'



const url = 'https://raw.githubusercontent.com/jennymontoya1001/endpointheroesjson/main/heroes.json';

const principal = document.getElementById('principal');

const getData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    const {
        results
    } = data;
    return results;
    // descomposicion de data
    // console.log(results);
}

const showMovies = async() => {
    let data = await getData();
    data.forEach(movies => {
        const {
            superhero,
            publisher,
            name,
            image
        } = movies;
    const info = document.createElement('div');
    info.classList.add('card');
        info.innerHTML = `
        <div class="card-content ">
       <a id="item"href="#"> <img src="${image}" alt=></a>
          </div>
      `
principal.appendChild(info);


// modal
// const item = document.querySelector('#item');
// const modalBackground = document.querySelector('.modal-background');
// const modal = document.querySelector('.modal');

// item.addEventListener('click', ()=>{
//     modal.classList.add('is-active');
// console.log(item);

// })





 });
};
showMovies();


