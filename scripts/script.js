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


