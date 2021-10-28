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
            <img src="${image}" alt=>
          </div>
        
      `
      principal.appendChild(info);

    });

};
showMovies();