// Set current year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');
if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });
}

// Reveal animations on scroll & on load
const revealElements = () => {
    const windowHeight = window.innerHeight;
    document.querySelectorAll('.fade-in-up').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= windowHeight * 0.92) {
            el.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealElements);
window.addEventListener('resize', revealElements);
document.addEventListener('DOMContentLoaded', () => {
    revealElements();
    // Safety check after brief render
    setTimeout(revealElements, 100);
});
