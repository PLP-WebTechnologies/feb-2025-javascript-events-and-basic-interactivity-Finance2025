// Event Handling Section
const colorButton = document.getElementById("colorButton");
if (colorButton) {
    colorButton.addEventListener("click", function () {
        document.body.style.backgroundColor = "lightblue";
    });
}

const textButton = document.getElementById("textButton");
if (textButton) {
    textButton.addEventListener("click", function () {
        this.textContent = "You clicked the button!";
    });
}

// Image Hover Effects
const galleryImages = document.querySelectorAll(".gallery-image");
galleryImages.forEach(image => {
    image.addEventListener("mouseover", function () {
        this.style.transform = "scale(1.2)";
    });

    image.addEventListener("mouseout", function () {
        this.style.transform = "scale(1)";
    });
});

// Keypress Detection
document.addEventListener("keypress", function (event) {
});

// Tabs Section
const tabs = document.querySelectorAll(".tab");
const tabContent = document.getElementById("tabContent");

if (tabs.length > 0 && tabContent) {
    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            tabContent.innerHTML
            tabs.forEach(t => t.style.backgroundColor = ""); // reset others
            tab.style.backgroundColor 
        });
    });
}

// Form Validation Section
const form = document.getElementById("myForm");
if (form) {
    form.addEventListener("submit", function (event) {
        const username = document.getElementById("username")?.value || "";
        const email = document.getElementById("email")?.value || "";
        const password = document.getElementById("password")?.value || "";

        // Validate Username
        if (username.trim() === "") {
            alert("Username is required!");
            event.preventDefault();
            return;
        }

        // Validate Email Format
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
            return;
        }

        // Validate Password Length
        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            event.preventDefault();
            return;
        }

        alert("Form submitted successfully!");
    });
}

