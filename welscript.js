// Toggling the active class on the navbar links
const navbarLinks = document.getElementById("navbar-links");
//selecting the menu toggle button
const menuToggle = document.getElementById("menubtn")

menuToggle.addEventListener("click", () => {
  navbarLinks.classList.toggle("activeList");
  // alert("working")
});

// Optional: Close the menu when a link is clicked
// navbarLinks.addEventListener('click', () => {
//     navbarLinks.classList.remove('activeList');
// });
