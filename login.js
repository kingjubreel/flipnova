document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const res = await fetch(`http://localhost:3000/users?username=${username}&password=${password}`);
    const users = await res.json();

    if (users.length === 1) {
        localStorage.setItem("loggedInUser", JSON.stringify(users[0]));
        // alert("Log In Successful");
        window.location.href = "index.html";
    }

    else {
        alert("Invalid Log In Credentials");
    }


});