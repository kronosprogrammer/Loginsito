const loginform = document.getElementById("loginform");

loginform.addEventListener("submit", function(event) { 
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = "dashboard.html";
    } else { 
        document.getElementById("error").innerText = "Email o contraseña incorrectos";
    }
});