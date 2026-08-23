// =========================================
// WAIT FOR HTML TO LOAD
// =========================================

document.addEventListener("DOMContentLoaded", function () {


    // =========================================
    // MOBILE MENU
    // =========================================

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", function () {

            navLinks.classList.toggle("show");

        });

    }


    // =========================================
    // WORK DROPDOWN - MOBILE
    // =========================================

    const workBtn = document.querySelector(".work-btn");
    const dropdown = document.querySelector(".dropdown");

    if (workBtn && dropdown) {

        workBtn.addEventListener("click", function (event) {

            event.preventDefault();

            dropdown.classList.toggle("open");

        });

    }


    // =========================================
    // THEME BUTTON
    // =========================================

    const themeBtn = document.getElementById("themeBtn");

    if (themeBtn) {

        themeBtn.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");


            // Change icon

            if (document.body.classList.contains("dark-mode")) {

                themeBtn.textContent = "☀";

            } else {

                themeBtn.textContent = "☾";

            }

        });

    }

});