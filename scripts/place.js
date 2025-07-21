// I made the year constant using the ID - currentyear
const year = document.querySelector("#currentyear");

// I use the date object here

const today = new Date();

// Get the year

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;


// getdates.js
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;




// place.js// Function to calculate wind chill based on temperature and wind speed
// Formula: W = 35.74 + 0.6215*T - 35.75*(V^0.16) + 0.4275*T*(V^0.16)
// where T is the temperature in Fahrenheit and V is the wind speed in mph

function calculateWindChill(tempF, speedMph) {
    return 35.74 + 0.6215 * tempF - 35.75 * speedMph ** 0.16 + 0.4275 * tempF * speedMph ** 0.16;
}

// Example static values for now (later these will come from real data)
const temperature = 50; //in °F
const windSpeed = 3;   // in mph

// Check if conditions meet wind chill rules
const windChill = (temperature <= 50 && windSpeed > 3)
    ? calculateWindChill(temperature, windSpeed).toFixed(1) + " °F"
    : "N/A";

// Display it in the table
document.getElementById("windChillValue").textContent = windChill;
