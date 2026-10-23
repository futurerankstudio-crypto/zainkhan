// Automatically update the copyright year.

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Display a message when the page finishes loading.

document.addEventListener("DOMContentLoaded", () => {
    console.log("Future Rank Studio website loaded successfully!");
});