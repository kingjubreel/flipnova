document.getElementById("signupForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();

        if (!username || !password || !confirmPassword) {
            alert("All fields are required.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        const res = await fetch(`http://localhost:3000/users?username=${encodeURIComponent(username)}`);
        const existingUsers = await res.json();
        if (existingUsers.length > 0) {
            alert("Username is already taken. Please choose another one.");
            return;
        }

        const createUser = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        if (!createUser.ok) {
            throw new Error("Failed to create user");
        }

        // Redirect
        window.location.href = "login.html";
    } catch (err) {
        console.error("Signup error:", err);
        alert("Something went wrong. Check console for details.");
    }
});
