// SELECT THE DOM ELEMENTS FOR OUTPUT
const currentyear = document.querySelector("#currentyear");

// use the date object

const today = new Date();
currentyear.innerHTML = ` <span class="highlight">${today.getFullYear()}</span>`;
 









