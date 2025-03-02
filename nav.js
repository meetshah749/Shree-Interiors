document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".primary-nav");
    console.log("Navigation script loaded!");  

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });
});
