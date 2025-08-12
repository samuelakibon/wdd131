// ==========================
// SHARED FEATURES
// ==========================

// Hamburger menu toggle
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation-container");

if (hamButton) {
    hamButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        hamButton.classList.toggle("open");
    });
}

// Set current year
const yearEl = document.querySelector("#currentyear");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// Set last modified date
const lastModifiedEl = document.querySelector("#lastModified");
if (lastModifiedEl) {
    lastModifiedEl.textContent = `Last Modified: ${document.lastModified}`;
}

// Highlight active nav link
document.querySelectorAll("#navMenu a").forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});

// ==========================
// HOME PAGE (index.html)
// ==========================
if (document.body.contains(document.querySelector("#tip-output"))) {
    const tips = [
        "Practice a new skill for at least 20 minutes every day.",
        "Teach someone else what you’ve learned to deepen your understanding.",
        "Break big goals into smaller, manageable tasks.",
        "Join a community of like-minded learners for motivation.",
        "Stay consistent — progress is built one step at a time."
    ];

    // Get last shown tip index from localStorage
    let lastTipIndex = localStorage.getItem("lastTipIndex");
    let newTipIndex;

    do {
        newTipIndex = Math.floor(Math.random() * tips.length);
    } while (newTipIndex == lastTipIndex);

    document.querySelector("#tip-output").textContent = tips[newTipIndex];
    localStorage.setItem("lastTipIndex", newTipIndex);
}

// ==========================
// RESOURCES PAGE (resources.html)
// ==========================
if (document.body.contains(document.querySelector("#resources-container"))) {
    const resourcesData = [
        {
            category: "Soft Skills",
            items: ["Effective Communication", "Teamwork", "Conflict Resolution"]
        },
        {
            category: "Technical Skills",
            items: ["HTML & CSS Basics", "JavaScript Fundamentals", "Intro to Python"]
        },
        {
            category: "Professional Skills",
            items: ["Time Management", "Public Speaking", "Networking Strategies"]
        }
    ];

    const resourcesContainer = document.querySelector("#resources-container");

    resourcesData.forEach(resource => {
        const section = document.createElement("div");
        section.classList.add("resource-category");

        // Collapsible header
        const header = document.createElement("h3");
        header.textContent = resource.category;
        header.classList.add("collapsible");

        // Items list
        const list = document.createElement("ul");
        list.classList.add("collapsed");
        resource.items.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            list.appendChild(li);
        });

        // Toggle on click
        header.addEventListener("click", () => {
            list.classList.toggle("collapsed");
        });

        section.appendChild(header);
        section.appendChild(list);
        resourcesContainer.appendChild(section);
    });
}

// ==========================
// CONTACT PAGE (contact.html)
// ==========================
if (document.body.contains(document.querySelector("#contactForm"))) {
    const form = document.querySelector("#contactForm");
    const formMessage = document.querySelector("#formMessage");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const skills = [...form.querySelectorAll("input[name='skills']:checked")].map(cb => cb.value);
        const message = form.message.value.trim();

        // Basic validation
        if (!name || !email) {
            formMessage.textContent = "Please fill in all required fields.";
            formMessage.classList.remove("hidden");
            formMessage.style.color = "red";
            return;
        }

        // Store in localStorage
        const formData = { name, email, skills, message, date: new Date().toISOString() };
        localStorage.setItem("contactFormData", JSON.stringify(formData));

        // Success message
        formMessage.textContent = "Thank you! Your message has been saved.";
        formMessage.classList.remove("hidden");
        formMessage.style.color = "green";

        // Clear form
        form.reset();
    });
}
