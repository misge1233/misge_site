// ==========================================
// REUSABLE COMPONENTS MODULE
// ==========================================

// Navbar Component
export function createNavbar(currentPage = 'home') {
    const pages = [
        { name: 'Home', path: 'index.html' },
        { name: 'About', path: 'about.html' },
        { name: 'Services', path: 'services.html' },
        { name: 'Projects', path: 'projects.html' },
        { name: 'Blog', path: 'blog.html' },
        { name: 'Contact', path: 'contact.html' }
    ];

    const currentPagePath = pages.find(p => p.name.toLowerCase() === currentPage.toLowerCase());
    
    return `
        <nav class="navbar" id="navbar">
            <div class="nav-container">
                <a href="index.html" class="logo">Portfolio</a>
                <ul class="nav-menu" id="navMenu">
                    ${pages.map(page => `
                        <li>
                            <a href="${page.path}" class="nav-link ${page.path === currentPagePath?.path ? 'active' : ''}">
                                ${page.name}
                            </a>
                        </li>
                    `).join('')}
                </ul>
                <div class="nav-toggle" id="navToggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    `;
}

// Footer Component
export function createFooter() {
    const currentYear = new Date().getFullYear();
    return `
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-links">
                    <a href="index.html" class="footer-link">Home</a>
                    <a href="about.html" class="footer-link">About</a>
                    <a href="services.html" class="footer-link">Services</a>
                    <a href="projects.html" class="footer-link">Projects</a>
                    <a href="blog.html" class="footer-link">Blog</a>
                    <a href="contact.html" class="footer-link">Contact</a>
                </div>
                <p class="footer-text">&copy; ${currentYear} Portfolio. All rights reserved.</p>
            </div>
        </footer>
    `;
}

// Initialize Navbar Functionality
export function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Skill Icon Mapping
export const skillIcons = {
    'Python': '🐍',
    'Machine Learning': '🤖',
    'AI': '🧠',
    'LLMs': '💬',
    'NLP': '📝',
    'Flask': '🌶️',
    'FastAPI': '⚡',
    'React': '⚛️',
    'PostgreSQL': '🐘',
    'AWS': '☁️',
    'TensorFlow': '🔷',
    'PyTorch': '🔥',
    'Scikit-learn': '📊',
    'Docker': '🐳',
    'Git': '📦'
};

// Service Icon Mapping
export const serviceIcons = {
    'AI & ML Development': '🤖',
    'LLM-powered Apps': '💬',
    'Data Analysis': '📊',
    'Web Apps': '🌐',
    'Freelancing': '💼'
};

// Intersection Observer for fade-in animations
export function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll('.card, .skill-item, .project-card, .blog-card').forEach(el => {
        observer.observe(el);
    });
}

