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




// Populate select dropdown
const productSelect = document.getElementById("productName");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});


// Get current count from localStorage or default to 0
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

// Increment count
reviewCount++;

// Store updated count
localStorage.setItem("reviewCount", reviewCount);

// Display count somewhere on the page
const counterDisplay = document.getElementById("reviewCounter");
if (counterDisplay) {
    counterDisplay.textContent = `You have submitted ${reviewCount} review(s).`;
}
