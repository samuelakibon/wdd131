// SELECT THE DOM ELEMENTS FOR OUTPUT 
const currentyear = document.querySelector("#currentyear"); 
const lastModified = document.querySelector("#lastModified"); 
const windChill = document.querySelector("#windChill"); 
const tempOutput = document.querySelector("#temp");
const windOutput = document.querySelector("#wind");

// use the date object 
const today = new Date(); 
currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`; 
lastModified.innerHTML = "Last Modified: " + document.lastModified; 

// For the Windmill / Wind Chill
// One-line function returning the result
const calculateWindChill = (T, V) => 13.12 + (0.6215 * T) - (11.37 * Math.pow(V, 0.16)) + (0.3965 * T * Math.pow(V, 0.16)); 

// Inputs (Example data) 
let temperature = 5; // Must be <= 10 °C 
let windSpeed = 12; // Must be > 4.8 km/h

// Add the temperature and windSpeed inputs to my html

tempOutput.textContent = `${temperature} °C`;
windOutput.textContent = `${windSpeed} km/h`;


// Conditional check before execution 
if (temperature <= 10 && windSpeed > 4.8) { 
    let result = calculateWindChill(temperature, windSpeed); 
    // .toFixed(1) rounds it to one decimal place (e.g., 2.3°C) instead of showing 2.345678...
    windChill.textContent = `${result.toFixed(1)} °C`; 
} else { 
    windChill.textContent = "N/A"; 
}