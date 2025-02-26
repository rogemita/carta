document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links li a");

    // Toggle del menú al hacer clic en el botón hamburguesa
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Cierra el menú cuando se selecciona una sección
    navItems.forEach(item => {
        item.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });
});