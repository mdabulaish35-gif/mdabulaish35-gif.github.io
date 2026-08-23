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

// =========================================
// CONTACT FORM
// =========================================

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const submitButton = contactForm.querySelector(
            ".contact-submit"
        );

        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        const formData = new FormData(contactForm);

        try {

            const response = await fetch(contactForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {

                // Clear the entire form
                contactForm.reset();

                // Success message
                formStatus.textContent =
                    "✓ Message sent successfully! Thank you for contacting me.";

                formStatus.className = "success";

            } else {

                formStatus.textContent =
                    "Something went wrong. Please try again.";

                formStatus.className = "error";
            }

        } catch (error) {

            formStatus.textContent =
                "Unable to send message. Please check your internet connection.";

            formStatus.className = "error";
        }

        submitButton.disabled = false;
        submitButton.textContent = "Send Message →";

    });

}