// ===============================
// LIUWA GARDENS WEBSITE SCRIPT
// ===============================


// Mobile Navigation Toggle
const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuBtn.classList.toggle("open");
    });
}


// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        if (navLinks) {
            navLinks.classList.remove("active");
        }
    });
});


// ===============================
// Smooth Scrolling
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });
});


// ===============================
// Gallery Image Viewer
// ===============================

const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox img");
const closeLightbox = document.querySelector(".close-lightbox");


galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        if(lightbox){

            lightbox.style.display = "flex";

            lightboxImg.src = image.src;

        }

    });

});


if(closeLightbox){

closeLightbox.addEventListener("click",()=>{

    lightbox.style.display="none";

});

}



// Close image viewer when clicking outside image

if(lightbox){

lightbox.addEventListener("click",(e)=>{

    if(e.target !== lightboxImg){

        lightbox.style.display="none";

    }

});

}



// ===============================
// Scroll Animation
// ===============================


const revealElements = document.querySelectorAll(
".reveal, section"
);


function revealOnScroll(){

    revealElements.forEach(element=>{

        const position =
        element.getBoundingClientRect().top;

        const screen =
        window.innerHeight - 100;


        if(position < screen){

            element.classList.add("show");

        }

    });

}


window.addEventListener(
"scroll",
revealOnScroll
);


revealOnScroll();



// ===============================
// Navbar Background Change
// ===============================

const navbar=document.querySelector("header");


window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});



// ===============================
// WhatsApp Floating Button
// ===============================


const whatsapp=document.querySelector(".whatsapp");


if(whatsapp){

whatsapp.addEventListener("click",()=>{

console.log(
"Opening WhatsApp chat..."
);

});

}




// ===============================
// Current Year Footer
// ===============================

const year=document.querySelector("#year");


if(year){

year.textContent=new Date()
.getFullYear();

}



// ===============================
// Image Lazy Loading
// ===============================

const images=document.querySelectorAll("img");


images.forEach(img=>{

img.setAttribute(
"loading",
"lazy"
);

});



// ===============================
// Contact Form Protection
// ===============================

const form=document.querySelector("form");


if(form){

form.addEventListener("submit",(e)=>{

const name =
document.querySelector("#name");

const email =
document.querySelector("#email");


if(name && name.value.trim()===""){

alert("Please enter your name");

e.preventDefault();

}


if(email && email.value.trim()===""){

alert("Please enter your email");

e.preventDefault();

}


});

}



// ===============================
// Welcome Message
// ===============================

console.log(
"🌿 Liuwa Gardens website loaded successfully!"
);