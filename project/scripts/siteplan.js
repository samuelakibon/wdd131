const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation-container");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});




// I made the year constant using the ID - currentyear
const year = document.querySelector("#currentyear");

// I use the date object here

const today = new Date();

// Get the year

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;


// getdates.js
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;


// Handle menu clicks
document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault(); // Stop page from reloading

        // Remove "active" from all
        document.querySelectorAll("#navMenu a").forEach(a => a.classList.remove("active"));

        // Add "active" to clicked one
        e.target.classList.add("active");


    });
});
