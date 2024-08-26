
// Agrega un evento de click al botón de cerrar sesión
document.getElementById('cerrar-sesion').addEventListener('click', cerrarSesion);

const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const users = JSON.parse(localStorage.getItem("users")) || [];

        

function cerrarSesion() {
    localStorage.removeItem('token');
    window.location.href = 'login.html';
  }

// Nombre del bienvenido

if (currentUser) {
    document.getElementById("username").innerText = currentUser.name;
} else {
    window.location.href = "login.html";
}
// Funcion de los listados

const userlist = document.getElementById("userlist");
users.forEach(user => {
    const li = document.createElement("li");
    li.innerText = `${user.name} - ${user.email}`;
    userlist.appendChild(li);
});


