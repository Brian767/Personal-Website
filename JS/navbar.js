// Theme Toggle Functionality
const themeToggleButton = document.getElementById('themeToggleButton');
const body = document.body;

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggleButton.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeToggleButton.textContent = theme === 'dark' ? '☀︎' : '⏾';
}

// Dropdown Menu Functionality
const navToggle = document.getElementById('navToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    dropdownMenu.classList.toggle('show');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
        navToggle.classList.remove('active');
        dropdownMenu.classList.remove('show');
    }
});

// Handle dropdown item clicks
const dropdownItems = document.querySelectorAll('.dropdown-item');
dropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
        // Don't prevent default - let the links work normally
        
        // Update active state based on current page
        updateActiveNavItem();
        
        // Close dropdown
        navToggle.classList.remove('active');
        dropdownMenu.classList.remove('show');
    });
});

// Function to update active nav item based on current page
function updateActiveNavItem() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    
    dropdownItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage || 
            (currentPage === '' && href === 'index.html') ||
            (currentPage === 'index.html' && href === 'index.html')) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Update active nav item on page load
document.addEventListener('DOMContentLoaded', updateActiveNavItem);