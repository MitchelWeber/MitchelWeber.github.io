document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website loaded');

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = anchor.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Theme Toggle
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Load saved theme from local storage
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
    }

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            body.classList.toggle('light-mode');

            // Save user preference
            if (body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light');
            } else {
                localStorage.setItem('theme', 'dark');
            }
        });
    }
});
