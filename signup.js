document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();

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

  // Retrieve existing users from localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if username already exists
  const userExists = users.some((user) => user.username === username);
  if (userExists) {
    alert("Username is already taken. Please choose another one.");
    return;
  }

  // Add new user
  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Signup successful! You can now log in.");
  window.location.href = "login.html";
});
