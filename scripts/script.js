// coneccion de API
const URL = 'https://raw.githubusercontent.com/jennymontoya1001/endpointheroesjson/main/heroes.json'; 
const obtenerData = async ()=>{
const res = await fetch(URL);
const data = await res.json();   
const {results} = data; 
return results;
// descomposicion de data
// console.log(results);
}



const btn = document.getElementById('btnSearch');
btn.addEventListener('click', async () =>{
    
    const search = document.getElementById('movie-search').value;
    const data = await obtenerData();
    let letterSearch = search.substring(0, 4);
    let getSearch = data.filter(movie =>(movie.superhero.toLowerCase() === search.toLowerCase()) || (movie.publisher.toLowerCase() === search.toLowerCase()));
    
    console.log(getSearch);
   





    data.forEach(movie => {
        let {
            superhero,
            name,
            publisher,
            alter_ego,
            image,
        } = movie;
    
        });
    
    
})