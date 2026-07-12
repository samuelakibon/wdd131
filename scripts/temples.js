// SELECT THE DOM ELEMENTS FOR OUTPUT
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const mainnav = document.querySelector(".navigation")
const hambutton = document.querySelector("#menu")



// use the date object

const today = new Date();
currentyear.innerHTML = ` <span class="highlight">${today.getFullYear()}</span>`;
document.getElementById("lastModified").innerHTML = "Last Modified: " + document.lastModified;


// The hamburger menu

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});






