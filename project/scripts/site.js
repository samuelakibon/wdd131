
// COUNTWISE INVENTORY SERVICES
// Main site JavaScript


// ---------- SERVICE DATA ----------

const serviceOptions = [
    {
        id: "stock-counting",
        name: "Stock Counting",
        description: "Physical counting and verification of inventory quantities."
    },
    {
        id: "inventory-auditing",
        name: "Inventory Auditing",
        description: "Reviewing physical stock and inventory records for discrepancies."
    },
    {
        id: "warehouse-organization",
        name: "Warehouse Organization",
        description: "Improving the arrangement and visibility of inventory."
    },
    {
        id: "inventory-management",
        name: "Inventory Management Support",
        description: "Practical support for improving inventory control processes."
    }
];


// ---------- FOOTER ----------

function updateFooter() {
    const currentYear = document.querySelector("#current-year");
    const lastModified = document.querySelector("#last-modified");

    const today = new Date();

    if (currentYear) {
        currentYear.textContent = `${today.getFullYear()}`;
    }

    if (lastModified) {
        lastModified.textContent = `${document.lastModified}`;
    }
}


// ---------- MOBILE NAVIGATION ----------

function setupNavigation() {
    const menuButton = document.querySelector(".menu-button");
    const navigation = document.querySelector(".primary-navigation");

    if (!menuButton || !navigation) {
        return;
    }

    menuButton.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            `${isOpen}`
        );
    });
}


// ---------- SERVICE DROPDOWN ----------

function populateServiceOptions() {
    const serviceSelect = document.querySelector("#service");

    if (!serviceSelect) {
        return;
    }

    serviceOptions.forEach((service) => {
        const option = document.createElement("option");

        option.value = `${service.id}`;
        option.textContent = `${service.name}`;

        serviceSelect.appendChild(option);
    });
}


// ---------- FORM DATA ----------

function getFormData() {
    const parameters = new URLSearchParams(window.location.search);

    return {
        name: parameters.get("name") || "",
        company: parameters.get("company") || "",
        email: parameters.get("email") || "",
        phone: parameters.get("phone") || "",
        service: parameters.get("service") || "",
        inventorySize: parameters.get("inventory-size") || "",
        date: parameters.get("date") || "",
        message: parameters.get("message") || ""
    };
}


// ---------- FIND SERVICE NAME ----------

function findServiceName(serviceId) {
    const service = serviceOptions.find(
        (item) => item.id === serviceId
    );

    if (service) {
        return service.name;
    }

    return "Inventory Service";
}


// ---------- CONFIRMATION DETAILS ----------

function displayRequestDetails(formData) {
    const detailsContainer = document.querySelector("#request-details");

    if (!detailsContainer) {
        return;
    }

    const serviceName = findServiceName(formData.service);

    detailsContainer.innerHTML = `
        <div class="confirmation-detail">
            <span>Name</span>
            <strong>${formData.name}</strong>
        </div>

        <div class="confirmation-detail">
            <span>Company</span>
            <strong>${formData.company}</strong>
        </div>

        <div class="confirmation-detail">
            <span>Email</span>
            <strong>${formData.email}</strong>
        </div>

        <div class="confirmation-detail">
            <span>Service</span>
            <strong>${serviceName}</strong>
        </div>

        <div class="confirmation-detail">
            <span>Inventory Size</span>
            <strong>${formData.inventorySize}</strong>
        </div>

        <div class="confirmation-detail">
            <span>Preferred Date</span>
            <strong>${formData.date || "Not specified"}</strong>
        </div>

        <div class="confirmation-detail">
            <span>Additional Information</span>
            <strong>${formData.message || "None provided"}</strong>
        </div>
    `;
}


// ---------- CONFIRMATION MESSAGE ----------

function displayConfirmationMessage(formData) {
    const confirmationMessage = document.querySelector(
        "#confirmation-message"
    );

    if (!confirmationMessage) {
        return;
    }

    if (formData.name) {
        confirmationMessage.textContent =
            `Thank you, ${formData.name}. Your inventory service request has been received.`;
    } else {
        confirmationMessage.textContent =
            `Your inventory service request has been received.`;
    }
}


// ---------- REVIEW COUNTER ----------

function updateConfirmationCounter() {
    const counterElement = document.querySelector("#review-counter");

    if (!counterElement) {
        return;
    }

    let requestCount = Number(
        localStorage.getItem("countwiseRequests")
    ) || 0;

    requestCount += 1;

    localStorage.setItem(
        "countwiseRequests",
        `${requestCount}`
    );

    counterElement.textContent =
        `${requestCount}`;
}


// ---------- CONFIRMATION PAGE ----------

function initializeConfirmationPage() {
    const detailsContainer = document.querySelector("#request-details");

    if (!detailsContainer) {
        return;
    }

    const formData = getFormData();

    if (!formData.name && !formData.company && !formData.email) {

        detailsContainer.innerHTML = `
            <p>
                No submitted request was found.
                Please return to the contact page and submit the form.
            </p>
        `;

        return;
    }

    displayRequestDetails(formData);
    displayConfirmationMessage(formData);
    updateConfirmationCounter();
}


// ---------- INITIALIZE SITE ----------

updateFooter();
setupNavigation();
populateServiceOptions();
initializeConfirmationPage();