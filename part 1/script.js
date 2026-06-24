



document.addEventListener("DOMContentLoaded", function() {

    
    const hamburger = document.getElementById('hamburger');
    const closeDrawer = document.getElementById('close-drawer');
    const drawer = document.getElementById('drawer');

    
    if (hamburger && drawer) {
        hamburger.addEventListener('click', () => {
            drawer.classList.add('active');
        });
    }

    
    if (closeDrawer && drawer) {
        closeDrawer.addEventListener('click', () => {
            drawer.classList.remove('active');
        });
    }

    
    const drawerLinks = document.querySelectorAll('.drawer a');
    drawerLinks.forEach(link => {
        link.addEventListener('click', () => {
            drawer.classList.remove('active');
        });
    });

    
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
