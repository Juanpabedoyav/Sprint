const URL = 'https://raw.githubusercontent.com/jennymontoya1001/endpointheroesjson/main/heroes.json'; 
const obtenerData = async ()=>{
const res = await fetch(URL);
const data = await res.json();   
const {results} = data; 
return results;
// descomposicion de data
// console.log(results);
}


