const formreg = document.getElementById('formreg');

formreg.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ name, email, password });

    localStorage.setItem('users', JSON.stringify(users));

    alert('Registro Exitoso');
    window.location.href = 'login.html';
});