// SELECT THE DOM ELEMENTS FOR OUTPUT
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// use the date object

const today = new Date();
currentyear.innerHTML = ` <span class="highlight">${today.getFullYear()}</span>`;
 




document.getElementById("lastModified").innerHTML = "Last Modified: " + document.lastModified;






