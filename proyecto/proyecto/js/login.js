
// Formulario del login
const loginform = document.getElementById("loginform");


// Funcion del boton
loginform.addEventListener("submit", function(event) {
    event.preventDefault();


    // Funciones de los inputs
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    // Validacion de los usuarios
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(user => user.email === email && user.password === password);

    // Si concuerdan se transladan al dashboard
    if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = "dashboard.html";

        //Alerta de error si no concuerdan la validacion

    } else {
        document.getElementById("error").innerText = "Unos de los datos es incorrecto";
    }
});