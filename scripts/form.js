// SELECT DOM ELEMENTS
const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const productSelect = document.querySelector("#product-name");


// DISPLAY CURRENT YEAR
const today = new Date();

currentYear.textContent = today.getFullYear();


// DISPLAY LAST MODIFIED DATE
lastModified.textContent = `Last Modified: ${document.lastModified}`;


// PRODUCT ARRAY
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];


// CREATE PRODUCT OPTIONS DYNAMICALLY
products.forEach(product => {

    const option = document.createElement("option");

    // The product ID is used as the option value
    option.value = product.id;

    // The product name is displayed to the user
    option.textContent = product.name;

    // Add the option to the select element
    productSelect.appendChild(option);
});

// COUNT COMPLETED REVIEWS ON REVIEW PAGE 
const reviewCountElement = document.querySelector("#reviewCount"); 
if (reviewCountElement) { 
  let reviewCount = Number(localStorage.getItem("reviewCount")) || 0; 
  reviewCount++; 
  localStorage.setItem("reviewCount", reviewCount); 
  reviewCountElement.textContent = reviewCount; 
}