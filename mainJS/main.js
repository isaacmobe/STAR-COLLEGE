document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    
    // Get the current page URL
    const currentPage = window.location.href;

    // Loop through each navigation link
    navLinks.forEach(link => {
        // Check if the link's href matches the current page URL
        if (link.href === currentPage) {
            // Add a class to style the active link
            link.classList.add('active-link');
        }

        // Add click event listener to each link
        link.addEventListener('click', function() {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active-link'));
            // Add active class to clicked link
            this.classList.add('active-link');
        });
    });
});