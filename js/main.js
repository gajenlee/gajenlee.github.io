document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle logic
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '64px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = 'var(--surface)';
                navLinks.style.padding = '16px';
                navLinks.style.borderBottom = '1px solid var(--outline-variant)';
                navLinks.style.gap = '16px';
            }
        });
    }

    // Set active link based on current URL
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.nav-link');
    
    links.forEach(link => {
        // Create URL objects to reliably compare pathnames
        const linkPath = new URL(link.href).pathname;
        
        // Remove hardcoded active class first to let JS handle it cleanly
        link.classList.remove('active');
        
        if (linkPath === currentPath || 
           (currentPath.endsWith('/') && linkPath.endsWith('/index.html'))) {
            link.classList.add('active');
        }
    });
});
