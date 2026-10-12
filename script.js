/* =========================================
HAFEZA — DEVELOPER PORTFOLIO
Interactive features
========================================= */

document.addEventListener("DOMContentLoaded", () => {
// Find the mobile menu button and navigation links.
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navigationItems = document.querySelectorAll(".nav-links a");

```
// Stop if the navigation elements are missing.
if (!menuToggle || !navLinks) {
    return;
}

// Open or close the mobile navigation.
menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

// Close the menu after a navigation link is selected.
navigationItems.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});

// Close the menu when Escape is pressed.
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    }
});
```

});
