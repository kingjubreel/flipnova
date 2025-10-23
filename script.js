// document.addEventListener('DOMContentLoaded', () => {
//   // Checking if user is logged in
//   const user = localStorage.getItem("loggedInUser");
//   if (!user) {
//     alert("Please login first!");
//     window.location.href = "welcome.html";
//     return;
//   }

//   // Logout feature
//   document.getElementById("logoutBtn").addEventListener("click", () => {
//     localStorage.removeItem("loggedInUser");
//     // alert("Logged out successfully!");
//     window.location.href = "welcome.html";
//   });


//   const imageInput = document.getElementById('imageup');
//   const descInput = document.getElementById('desc');
//   const nameInput = document.getElementById('nomen');
//   const countryInput = document.getElementById('nation');
//   const igInput = document.getElementById('igname');
//   const numInput = document.getElementById('mobileno');
//   const uploadbtn = document.getElementById('submitbtn');
//   const gallery = document.getElementById('hustlelist');
    
//   uploadbtn.addEventListener('click', () => {
//     const imageFile = imageInput.files[0];
//     const caption = descInput.value.trim();
//     const name = nameInput.value.trim();
//     const country = countryInput.value.trim();
//     const ig = igInput.value.trim();
//     const phoneno = numInput.value.trim();

//     if (!imageFile || caption === "" || name === "" || country === "" || ig === "" || phoneno === "") {
//       alert("Please fill in all fields and select an image.");
//       return;
//     }

//     const reader = new FileReader();
//     reader.onload = function(event) {
//       imageURL = event.target.result;

//       const hustleItem = document.createElement('div');
//       hustleItem.classList.add('hustle-item');

//       const imagecard = document.createElement('img');
//       imagecard.src = imageURL;
//       imagecard.alt = caption;

//       const captionElement = document.createElement('p');
//       captionElement.textContent = caption;

//       const nameElement = document.createElement('p');
//       nameElement.textContent = "Name: " + name;

//       const countryElement = document.createElement('p');
//       countryElement.textContent = "Country: " + country;

//       const igElement = document.createElement('p');
//       igElement.textContent = "Instagram: @" + ig;

//       const phonenoElement = document.createElement('p');
//       phonenoElement.textContent = "Phone: " + phoneno;

//       hustleItem.appendChild(imagecard);
//       hustleItem.appendChild(captionElement);
//       hustleItem.appendChild(nameElement);
//       hustleItem.appendChild(countryElement);
//       hustleItem.appendChild(igElement);
//       hustleItem.appendChild(phonenoElement);

//       gallery.appendChild(hustleItem);

//       // Clearing inputs
//       imageInput.value = '';
//       descInput.value = '';
//       nameInput.value = '';
//       countryInput.value = '';
//       igInput.value = '';
//       numInput.value = '';
//     }

//     reader.readAsDataURL(imageFile);
//   });
// });


// // Toggling the active class on the navbar links
// const navbarLinks = document.getElementById("navbar-links");
// //selecting the menu toggle button
// const menuToggle = document.getElementById("menubtn")

// menuToggle.addEventListener("click", () => {
//   navbarLinks.classList.toggle("activeList");
//   // alert("working")
// });

// // Optional: Close the menu when a link is clicked
// navbarLinks.addEventListener('click', () => {
//     navbarLinks.classList.remove('activeList');
// });



// document.addEventListener('DOMContentLoaded', () => {
//   // ✅ Check if user is logged in
//   const user = localStorage.getItem("loggedInUser");
//   if (!user) {
//     alert("Please login first!");
//     window.location.href = "welcome.html";
//     return;
//   }

//   // ✅ Logout feature
//   document.getElementById("logoutBtn").addEventListener("click", () => {
//     localStorage.removeItem("loggedInUser");
//     window.location.href = "welcome.html";
//   });

//   // ✅ Get references to inputs
//   const imageInput = document.getElementById('imageup');
//   const descInput = document.getElementById('desc');
//   const nameInput = document.getElementById('nomen');
//   const countryInput = document.getElementById('nation');
//   const igInput = document.getElementById('igname');
//   const numInput = document.getElementById('mobileno');
//   const uploadbtn = document.getElementById('submitbtn');
//   const gallery = document.getElementById('hustlelist');

//   // ✅ Reusable function to display a hustle card
//   function displayHustle(hustle) {
//     const hustleItem = document.createElement('div');
//     hustleItem.classList.add('hustle-item');

//     hustleItem.innerHTML = `
//       <img src="${hustle.image}" alt="${hustle.description}">
//       <p>${hustle.description}</p>
//       <p>Name: ${hustle.name}</p>
//       <p>Country: ${hustle.country}</p>
//       <p>Instagram: @${hustle.instagram}</p>
//       <p>Phone: ${hustle.phone}</p>
//     `;

//     gallery.appendChild(hustleItem);
//   }

//   // ✅ Load existing hustles from JSON server
//   fetch("http://localhost:3000/hustles")
//     .then(res => res.json())
//     .then(hustles => {
//       hustles.forEach(hustle => displayHustle(hustle));
//     })
//     .catch(err => console.error("Error loading hustles:", err));

//   // ✅ Handle new uploads
//   uploadbtn.addEventListener('click', () => {
//     const imageFile = imageInput.files[0];
//     const caption = descInput.value.trim();
//     const name = nameInput.value.trim();
//     const country = countryInput.value.trim();
//     const ig = igInput.value.trim();
//     const phoneno = numInput.value.trim();

//     if (!imageFile || caption === "" || name === "" || country === "" || ig === "" || phoneno === "") {
//       alert("Please fill in all fields and select an image.");
//       return;
//     }

//     const reader = new FileReader();
//     reader.onload = function(event) {
//       const imageURL = event.target.result; // ✅ base64 string

//       // Build hustle object
//       const hustleData = {
//         image: imageURL,
//         description: caption,
//         name: name,
//         country: country,
//         instagram: ig,
//         phone: phoneno
//       };

//       // ✅ Save to JSON server
//       fetch("http://localhost:3000/hustles", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(hustleData)
//       })
//         .then(res => res.json())
//         .then(savedHustle => {
//           console.log("Hustle saved:", savedHustle);
//           displayHustle(savedHustle);

//           // ✅ Clear inputs
//           imageInput.value = '';
//           descInput.value = '';
//           nameInput.value = '';
//           countryInput.value = '';
//           igInput.value = '';
//           numInput.value = '';
//         })
//         .catch(err => console.error("Error saving hustle:", err));
//     };

//     reader.readAsDataURL(imageFile);
//   });
// });


// // ✅ Navbar toggle
// const navbarLinks = document.getElementById("navbar-links");
// const menuToggle = document.getElementById("menubtn");

// menuToggle.addEventListener("click", () => {
//   navbarLinks.classList.toggle("activeList");
// });

// // Optional: Close the menu when a link is clicked
// navbarLinks.addEventListener('click', () => {
//   navbarLinks.classList.remove('activeList');
// });

document.addEventListener('DOMContentLoaded', () => {
  const user = localStorage.getItem("loggedInUser");
  if (!user) {
    alert("Please login first!");
    window.location.href = "welcome.html";
    return;
  }

  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "welcome.html";
  });

  const imageInput = document.getElementById('imageup');
  const descInput = document.getElementById('desc');
  const nameInput = document.getElementById('nomen');
  const countryInput = document.getElementById('nation');
  const igInput = document.getElementById('igname');
  const numInput = document.getElementById('mobileno');
  const uploadbtn = document.getElementById('submitbtn');
  const gallery = document.getElementById('hustlelist');

  // ✅ Pagination setup
  let hustles = []; 
  let currentPage = 1;
  const itemsPerPage = 5;

  function displayPage(page) {
    gallery.innerHTML = ""; // clear previous items

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageItems = hustles.slice(startIndex, endIndex);

    pageItems.forEach(hustle => displayHustle(hustle));

    updatePaginationControls();
  }

  function updatePaginationControls() {
    const paginationDiv = document.getElementById("pagination");
    paginationDiv.innerHTML = `
      <button id="prevBtn" ${currentPage === 1 ? "disabled" : ""}>Prev</button>
      <span class="page-no"> Page ${currentPage} of ${Math.ceil(hustles.length / itemsPerPage)} </span>
      <button id="nextBtn" ${currentPage === Math.ceil(hustles.length / itemsPerPage) ? "disabled" : ""}>Next</button>
    `;

    document.getElementById("prevBtn").addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        displayPage(currentPage);
      }
    });

    document.getElementById("nextBtn").addEventListener("click", () => {
      if (currentPage < Math.ceil(hustles.length / itemsPerPage)) {
        currentPage++;
        displayPage(currentPage);
      }
    });
  }

  function displayHustle(hustle) {
    const hustleItem = document.createElement('div');
    hustleItem.classList.add('hustle-item');
    hustleItem.innerHTML = `
      <img src="${hustle.image}" alt="${hustle.description}">
      <p>${hustle.description}</p>
      <p>Name: ${hustle.name}</p>
      <p>Country: ${hustle.country}</p>
      <p>Instagram: @${hustle.instagram}</p>
      <p>Phone: ${hustle.phone}</p>
    `;
    gallery.appendChild(hustleItem);
  }

  // ✅ Load hustles from server
  fetch("http://localhost:3000/hustles")
    .then(res => res.json())
    .then(data => {
      hustles = data;
      displayPage(currentPage);
    })
    .catch(err => console.error("Error loading hustles:", err));

  // ✅ Handle new upload
  uploadbtn.addEventListener('click', () => {
    const imageFile = imageInput.files[0];
    const caption = descInput.value.trim();
    const name = nameInput.value.trim();
    const country = countryInput.value.trim();
    const ig = igInput.value.trim();
    const phoneno = numInput.value.trim();

    if (!imageFile || caption === "" || name === "" || country === "" || ig === "" || phoneno === "") {
      alert("Please fill in all fields and select an image.");
      return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
      const imageURL = event.target.result;

      const hustleData = {
        image: imageURL,
        description: caption,
        name: name,
        country: country,
        instagram: ig,
        phone: phoneno
      };

      fetch("http://localhost:3000/hustles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(hustleData)
      })
        .then(res => res.json())
        .then(savedHustle => {
          hustles.push(savedHustle); // add to local list
          displayPage(currentPage);  // refresh page view

          // clear inputs
          imageInput.value = '';
          descInput.value = '';
          nameInput.value = '';
          countryInput.value = '';
          igInput.value = '';
          numInput.value = '';
        })
        .catch(err => console.error("Error saving hustle:", err));
    };

    reader.readAsDataURL(imageFile);
  });
});

// ✅ Navbar toggle
const navbarLinks = document.getElementById("navbar-links");
const menuToggle = document.getElementById("menubtn");

menuToggle.addEventListener("click", () => {
  navbarLinks.classList.toggle("activeList");
});

navbarLinks.addEventListener('click', () => {
  navbarLinks.classList.remove('activeList');
});
