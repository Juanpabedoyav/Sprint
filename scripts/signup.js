// URLS SERVERS
const url = 'http://localhost:4000/newUser';


// botton
const form = document.querySelector('.form');

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

    // Send data to signup.json add user
    await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            name,
            userName,
            email,
            password
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
    });

    // Load main page then of signup 
    if (name != "" && userName != "" && email != "" && password != "") {
        console.log("Registro exitoso bienvenido");
        alert("Registro Exitoso Bienvenido");
        window.open("index.html");
        setTimeout(window.open("index.html", 8000));
    };
});

// Event login
login.addEventListener('click', (e) => {
    e.preventDefault();
    // let fieldEmail = document.querySelector('.field--email');
    form.innerHTML = "";
    form.classList.add('form');
    form.innerHTML += `
    <h1 class="verificar-email">Verifica tu cuenta</h1>
    <div class="field field--email">
    <label for="email" class="label">Correo eletrónico</label>
    <p class="control has-icons-left">
     <input id="email" class="input is-normal" type="email"
                            placeholder="Ingresa tu correo eletrónico" required>
        <span class="icon is-left">
            <i class="fas fa-envelope"></i>
                </span>
            </div>  
        <p class="control">
        <button id="btnVerificar" class="button is-normal type="button">Verificar Email</button>
        </p>
        <p class="back">
        <a id="back" class="link" href="signup.html">Volver</a>
     </p>
    
    `
    const btnVerificar= document.getElementById('btnVerificar');
    btnVerificar.addEventListener('click', async()=>{
    
        let inputEmail = document.querySelector('input[type="email"]').value;

      const res = await fetch (url);
      const data = await res.json();
      
      let user = data.find(usuario => (usuario.email == inputEmail))
        const{name, userName, email} = user;


         if(user = true){
            const field = document.querySelector('.field');
            field.innerHTML = "";
            field.innerHTML += `
            <div class="field field--email">
            <label for="email" class="label">Correo eletrónico</label>
            <p class="control has-icons-left">
                <input id="email" class="input is-normal" type="email"
                    placeholder="Ingresa tu correo eletrónico" required>
                <span class="icon is-left">
                    <i class="fas fa-envelope"></i>
                </span>
            </p>   
            </div>
            <div class="field">
                    <label for="name" class="label">Nombre</label>
                    <p class="control has-icons-left">
                        <input id="name" class="input is-normal" type="text" placeholder="Ingresa tu nombre" required>
                        <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                <label for="userName" class="label">Apodo</label>
                <p class="control has-icons-left">
                    <input id="userName" class="input is-normal" type="text" placeholder="Ingresa tu apodo"
                        required>
                    <span class="icon  is-left">
                        <i class="fas fa-at"></i>
                    </span>
                </p>
            </div>
            <p class="control">
            <button id="btnEdit" class="button is-normal type="botton">Editar</button>
        </p>
        <p class="control">
                    <button id="btnSave" class="button is-normal" type="botton">Guardar Cambios</button>
                </p>
            `;
          
            
            let inputEmail = document.getElementById('email').readOnly = true;
            let inputName = document.getElementById('name').readOnly = true;
            let inputApodo = document.getElementById('userName').readOnly = true;


            document.querySelector('input[type="email"]').value= email;
            document.getElementById('name').value= name;
            document.getElementById('userName').value= userName;
        }
        // changes the profile  PUT AND DELETE
        const btnEdit = document.getElementById('btnEdit');        
        btnEdit.addEventListener('click',()=>{
            let inputName = document.getElementById('name').readOnly = false;
            let inputApodo = document.getElementById('userName').readOnly = false;
        });
        
        
        
        
        const btnSave = document.getElementById('btnSave');


    })  
})
