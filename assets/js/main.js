// ==========================================
// MAIN JAVASCRIPT FILE
// ==========================================

import { createNavbar, createFooter, initNavbar, initScrollAnimations } from './components.js';

// Get current page name from the HTML file
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';
    return page.replace('.html', '').replace('index', 'home');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Insert navbar and footer
    const currentPage = getCurrentPage();
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = createNavbar(currentPage);
        initNavbar();
    }

    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = createFooter();
    }

    // Initialize scroll animations
    initScrollAnimations();
});

