// ===================================
// PORTFOLIO JAVASCRIPT
// ===================================


// ===================================
// MOBILE NAVIGATION
// ===================================

const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

if (menuIcon && navLinks) {

    menuIcon.addEventListener("click", function () {

        navLinks.classList.toggle("show");

        const icon = menuIcon.querySelector("i");

        if (icon) {

            if (navLinks.classList.contains("show")) {
                icon.classList.replace("fa-bars", "fa-xmark");
            } else {
                icon.classList.replace("fa-xmark", "fa-bars");
            }

        }

    });


    document.querySelectorAll(".nav-link").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("show");

            const icon = menuIcon.querySelector("i");

            if (icon) {
                icon.classList.replace("fa-xmark", "fa-bars");
            }

        });

    });

}


// ===================================
// TYPING ANIMATION
// ===================================

const typingText = document.querySelector(".typing-text");

const words = [
    "Full Stack Developer",
    "Python Developer",
    "Web Developer",
    "Problem Solver"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    if (!typingText) return;

    const currentWord = words[wordIndex];

    if (deleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    typingText.textContent = currentWord.substring(0, characterIndex);

    let speed = deleting ? 50 : 100;

    if (!deleting && characterIndex === currentWord.length) {

        speed = 1500;
        deleting = true;

    }

    else if (deleting && characterIndex === 0) {

        deleting = false;

        wordIndex++;

        if (wordIndex === words.length) {
            wordIndex = 0;
        }

        speed = 500;

    }

    setTimeout(typeEffect, speed);

}

if (typingText) {
    typeEffect();
}


// ===================================
// SCROLL REVEAL ANIMATION
// ===================================

const revealElements = document.querySelectorAll(".reveal");


function revealOnScroll() {

    revealElements.forEach(function (element) {

        const elementPosition = element.getBoundingClientRect().top;

        const screenPosition = window.innerHeight - 100;

        if (elementPosition < screenPosition) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);


// ===================================
// ACTIVE NAVIGATION
// ===================================

const sections = document.querySelectorAll("section[id]");

const navigationLinks = document.querySelectorAll(".nav-link");


function activeNavigation() {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", activeNavigation);


// ===================================
// BACK TO TOP BUTTON
// ===================================

const backToTop = document.getElementById("backToTop");


if (backToTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            backToTop.style.display = "block";

        } else {

            backToTop.style.display = "none";

        }

    });


    backToTop.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


// ===================================
// CONTACT FORM
// ===================================

const contactForm = document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name")?.value || "";

        const email = document.getElementById("email")?.value || "";

        const subject = document.getElementById("subject")?.value || "";

        const message = document.getElementById("message")?.value || "";


        const mailSubject = encodeURIComponent(subject);

        const mailBody = encodeURIComponent(

            "Name: " + name +

            "\nEmail: " + email +

            "\n\nMessage:\n" + message

        );


        const mailLink =

            "mailto:jegatheesh4065@gmail.com?subject="

            + mailSubject + "&body=" + mailBody;


        window.location.href = mailLink;

    });

}


// ===================================
// DARK / LIGHT MODE
// ===================================

const themeToggle = document.getElementById("themeToggle");


const savedTheme = localStorage.getItem("portfolioTheme");


if (savedTheme === "light") {

    document.body.classList.add("light-mode");

}


function updateThemeIcon() {

    if (!themeToggle) return;

    const icon = themeToggle.querySelector("i");

    if (!icon) return;


    if (document.body.classList.contains("light-mode")) {

        icon.className = "fas fa-sun";

    } else {

        icon.className = "fas fa-moon";

    }

}


updateThemeIcon();


if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");


        const currentTheme =

            document.body.classList.contains("light-mode")

                ? "light"

                : "dark";


        localStorage.setItem("portfolioTheme", currentTheme);


        updateThemeIcon();

    });

}


// ===================================
// FOOTER YEAR
// ===================================

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


// ===================================
// PROJECT DETAILS MODAL
// ===================================

function initProjectModal() {

    const modal = document.getElementById("projectModal");

    const closeBtn = document.getElementById("closeModal");

    const title = document.getElementById("modalTitle");

    const description = document.getElementById("modalDescription");

    const image = document.getElementById("modalImage");

    const features = document.getElementById("modalFeatures");

    const technologies = document.getElementById("modalTechnologies");

    const thumbnails = document.getElementById("thumbnailContainer");

    const nextBtn = document.getElementById("nextImage");

    const prevBtn = document.getElementById("prevImage");


    // Check whether modal HTML exists

    if (
        !modal ||
        !closeBtn ||
        !title ||
        !description ||
        !image ||
        !features ||
        !technologies ||
        !thumbnails ||
        !nextBtn ||
        !prevBtn
    ) {

        console.error("Project modal HTML elements are missing!");

        return;

    }


    let images = [];

    let currentIndex = 0;


    // ===================================
    // PROJECT DATA
    // ===================================

    const projects = {

        jd: {

            title: "JD Elegance",

            description:
                "JD Elegance is a beauty and cosmetics e-commerce website developed using Python and Django. It allows customers to explore beauty products, manage wishlists, add products to their cart and place orders.",

            images: [

                "images/jd-elegance.jpg",

                "images/jd-home.png",

                "images/jd-products.png"

            ],

            features: [

                "Customer Registration and Login",

                "Product Categories",

                "Product Details",

                "Wishlist Management",

                "Shopping Cart",

                "Order Management",

                "Admin Dashboard"

            ],

            technologies: [

                "HTML",

                "CSS",

                "JavaScript",

                "Bootstrap",

                "Python",

                "Django",

                "MySQL"

            ]

        },


        chocolush: {

            title: "Chocolush",

            description:
                "Chocolush is a chocolate e-commerce website developed using Python and Django. It provides an interactive platform where customers can explore chocolate collections, search products and manage their shopping cart.",

            images: [

                "images/chocolush.jpg",

                "images/chocolush-home.png",

                "images/chocolush-products.png"

            ],

            features: [

                "Product Categories",

                "Product Search",

                "Product Details",

                "Shopping Cart",

                "Customer Authentication",

                "Order Management",

                "Admin Dashboard"

            ],

            technologies: [

                "HTML",

                "CSS",

                "JavaScript",

                "Bootstrap",

                "Python",

                "Django"

            ]

        }

    };


    // ===================================
    // DISPLAY PROJECT IMAGE
    // ===================================

    function displayImage() {

        if (!images.length) return;


        image.src = images[currentIndex];

        image.alt = title.textContent + " screenshot";


        thumbnails.innerHTML = "";


        images.forEach(function (src, index) {

            const thumb = document.createElement("img");

            thumb.src = src;

            thumb.alt = "Project screenshot " + (index + 1);


            if (index === currentIndex) {

                thumb.classList.add("active");

            }


            thumb.addEventListener("click", function () {

                currentIndex = index;

                displayImage();

            });


            thumbnails.appendChild(thumb);

        });

    }


    // ===================================
    // OPEN PROJECT MODAL
    // ===================================

    document.querySelectorAll(".open-project").forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.preventDefault();


            const projectName = this.dataset.project;

            const project = projects[projectName];


            if (!project) {

                console.error("Project data not found:", projectName);

                return;

            }


            // Project title

            title.textContent = project.title;


            // Project description

            description.textContent = project.description;


            // Project images

            images = project.images;

            currentIndex = 0;

            displayImage();


            // Project features

            features.innerHTML = "";


            project.features.forEach(function (item) {

                const li = document.createElement("li");

                li.textContent = item;

                features.appendChild(li);

            });


            // Project technologies

            technologies.innerHTML = "";


            project.technologies.forEach(function (item) {

                const span = document.createElement("span");

                span.textContent = item;

                technologies.appendChild(span);

            });


            // Show modal

            modal.classList.add("active");


            // Disable background scrolling

            document.body.style.overflow = "hidden";


            console.log("Project modal opened:", project.title);

        });

    });


    // ===================================
    // NEXT IMAGE
    // ===================================

    nextBtn.addEventListener("click", function () {

        if (!images.length) return;


        currentIndex++;

        if (currentIndex >= images.length) {

            currentIndex = 0;

        }


        displayImage();

    });


    // ===================================
    // PREVIOUS IMAGE
    // ===================================

    prevBtn.addEventListener("click", function () {

        if (!images.length) return;


        currentIndex--;


        if (currentIndex < 0) {

            currentIndex = images.length - 1;

        }


        displayImage();

    });


    // ===================================
    // CLOSE MODAL
    // ===================================

    function closeModal() {

        modal.classList.remove("active");

        document.body.style.overflow = "";

    }


    closeBtn.addEventListener("click", closeModal);


    // Close when clicking outside modal content

    modal.addEventListener("click", function (event) {

        if (event.target === modal) {

            closeModal();

        }

    });


    // Close using Escape key

    document.addEventListener("keydown", function (event) {

        if (
            event.key === "Escape" &&
            modal.classList.contains("active")
        ) {

            closeModal();

        }

    });


    console.log("Project modal initialized successfully!");

}


// ===================================
// INITIALIZE MODAL SAFELY
// ===================================

if (document.readyState === "loading") {

    document.addEventListener("DOMContentLoaded", initProjectModal);

} else {

    initProjectModal();

}