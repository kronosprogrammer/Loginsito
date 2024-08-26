
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const users = JSON.parse(localStorage.getItem("users")) || [];

        

if (currentUser) {
    document.getElementById("username").innerText = currentUser.name;
} else {
    window.location.href = "login.html";
}

const userlist = document.getElementById("userlist");
users.forEach(user => {
    const li = document.createElement("li");
    li.innerText = `${user.name} - ${user.email}`;
    userlist.appendChild(li);
});