// URLS SERVERS
const url = 'http://localhost:4000/newUser' ;


// botton
const form = document.getElementById('form');

// links rediretion

const login = document.getElementById('login');
// Listener Events

// // Event Sign Up

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let userName = document.getElementById('userName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

// Send data to signup.json
    await fetch(url, {
    method : "POST",
    body: JSON.stringify({
        name,
        userName,
        email, 
        password 
    }),
    headers:
    {"Content-Type": "application/json; charset=UTF-8" },
    });    
      // document.getElementById('name').required = true;

 // Load main page then of signup 
 if (name != "" && userName!= "" && email!= "" && password!= ""){
    console.log("Registro exitoso bienvenido");
    alert("Registro Exitoso Bienvenido");
    window.open("index.html");
    setTimeout(window.open("index.html", 8000));
    window.close("signup.html");
};
});

// Event login
login.addEventListener('click', (e)=> {
    e.preventDefault();
    let container = document.getElementById('container');
    let form = document.createElement('form');
    container.innerHTML = "";

    form.classList.add('form');
    // form.innerHTML `  `;

})