/* =========================================
   MOZAMEL ORGEN
   Main JavaScript
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       MOBILE MENU
    ========================================= */

    const menuToggle =
        document.getElementById("menuToggle");

    const navbar =
        document.getElementById("navbar");


    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", () => {

            const isOpen =
                navbar.classList.toggle("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });


        /* إغلاق القائمة بعد اختيار قسم */

        navbar.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navbar.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /*
    =========================================
    1. SMOOTH SCROLL
    =========================================
    */

    const navigationLinks =
        document.querySelectorAll(
            '.navbar a[href^="#"], .hero a[href^="#"]'
        );


    navigationLinks.forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");


            if (!targetId || targetId === "#") {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (!target) {
                return;
            }


            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /*
    =========================================
    2. EXTERNAL LINKS
    =========================================

    فتح الروابط الخارجية في نافذة جديدة.
    */

    const externalLinks =
        document.querySelectorAll(
            'a[target="_blank"]'
        );


    externalLinks.forEach(link => {

        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    });


    /*
    =========================================
    3. CURRENT YEAR
    =========================================

    تحديث سنة حقوق الموقع تلقائيًا.
    */

    const yearElements =
        document.querySelectorAll(
            "[data-current-year]"
        );


    yearElements.forEach(element => {

        element.textContent =
            new Date().getFullYear();

    });


    /*
    =========================================
    4. DOWNLOAD BUTTON FEEDBACK
    =========================================

    تأثير بسيط عند الضغط على أزرار التحميل.
    */

    const downloadButtons =
        document.querySelectorAll(
            ".download-card a"
        );


    downloadButtons.forEach(button => {

        button.addEventListener("click", () => {

            button.classList.add(
                "download-clicked"
            );


            setTimeout(() => {

                button.classList.remove(
                    "download-clicked"
                );

            }, 500);

        });

    });


    /*
    =========================================
    5. SCROLL REVEAL
    =========================================

    ظهور العناصر بشكل لطيف عند النزول
    في الصفحة.
    */

    const revealElements =
        document.querySelectorAll(
            ".section-heading, " +
            ".about-content, " +
            ".social-card, " +
            ".download-card, " +
            ".tutorial-placeholder, " +
            ".contact-box"
        );


    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (!entry.isIntersecting) {
                            return;
                        }


                        entry.target.classList.add(
                            "show"
                        );


                        observer.unobserve(
                            entry.target
                        );

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(element => {

            element.classList.add("reveal");

            revealObserver.observe(element);

        });

    } else {

        /* دعم المتصفحات التي لا تدعم IntersectionObserver */

        revealElements.forEach(element => {

            element.classList.add("show");

        });

    }


    /*
    =========================================
    6. CONSOLE MESSAGE
    =========================================
    */

    console.log(
        "Mozamel Orgen Website Loaded Successfully 🎹"
    );

});