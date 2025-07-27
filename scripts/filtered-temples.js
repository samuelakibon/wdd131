const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

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



// THE FILTERED-TEMPLE JS

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Accra Ghana",
        location: "Accra Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-15503-thumb.jpg"

    },

    {
        templeName: "Cody Wyoming",
        location: "Cody Wyoming",
        dedicated: "2024, September, 27",
        area: 9950,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/cody-wyoming-temple/cody-wyoming-temple-35009-thumb.jpg"
    },

    {
        templeName: "Apia Samoa",
        location: "Apia Samoa",
        dedicated: "1983, August, 5",
        area: 18691,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/apia-samoa-temple/apia-samoa-temple-61730.jpg"
    },
    {
        templeName: "Burley Idaho",
        location: "Burley Idaho",
        dedicated: "2026, January, 11",
        area: 38600,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/burley-idaho-temple/burley-idaho-temple-60270-main.jpg"
    },

    {
        templeName: "Madrid Spain",
        location: "Madrid Spain",
        dedicated: "1999, March, 19",
        area: 45800,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg"
    },




];



const container = document.getElementById("templesContainer");






function renderTemples(templesToRender) {
    container.innerHTML = ""; // Clear previous temples

    templesToRender.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("temple-card");

        card.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
            <img
                src="${temple.imageUrl}"
                loading="lazy"
                alt="${temple.templeName}"
                style="width: 100%; max-width: 350px; height: auto;"
            >
        `;

        container.appendChild(card);
    });
}



// Filtering logic
function filterTemples(type) {
    let filtered = [];

    switch (type.toLowerCase()) {
        case "old":
            filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
            break;
        case "new":
            filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
            break;
        case "large":
            filtered = temples.filter(t => t.area > 90000);
            break;
        case "small":
            filtered = temples.filter(t => t.area < 10000);
            break;
        default: // "home"
            filtered = temples;
    }

    renderTemples(filtered);
}

// Handle menu clicks
document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault(); // Stop page from reloading

        // Remove "active" from all
        document.querySelectorAll("#navMenu a").forEach(a => a.classList.remove("active"));

        // Add "active" to clicked one
        e.target.classList.add("active");

        const filterType = e.target.title.toLowerCase();
        filterTemples(filterType);
    });
});

// Load all temples on page load
renderTemples(temples);