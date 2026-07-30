/* ==========================================
   ANVI TRAVELS - script.js
========================================== */

// Sticky Header
window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.style.background = "#046A38";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";
    } else {
        header.style.background = "rgba(4,106,56,.95)";
        header.style.boxShadow = "none";
    }
});

// Back To Top Button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topBtn.style.display = "flex";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Smooth Scroll Navigation

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// Booking Form

const bookingForm = document.querySelector(".booking-form");

if(bookingForm){

bookingForm.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you for choosing AnVi Travels!\n\nWe have received your booking request.\n\nOur team will contact you shortly.");

bookingForm.reset();

});

}

// Simple Fade Animation

const cards = document.querySelectorAll(

".service-card,.fleet-card,.package-card,.why-card,.testimonial-card"

);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(50px)";
card.style.transition=".6s ease";

observer.observe(card);

});

// Statistics Counter

const counters=document.querySelectorAll(".stat-box h2");

counters.forEach(counter=>{

const update=()=>{

const target=parseInt(counter.innerText);

if(isNaN(target)) return;

let current=+counter.getAttribute("data-count")||0;

const increment=Math.ceil(target/60);

if(current<target){

current+=increment;

if(current>target) current=target;

counter.innerText=current+"+";

counter.setAttribute("data-count",current);

setTimeout(update,30);

}

};

update();

});

// Current Year

const copy=document.querySelector(".copyright");

if(copy){

copy.innerHTML="© "+new Date().getFullYear()+" AnVi Travels. All Rights Reserved.";

}

console.log("AnVi Travels Website Loaded Successfully.");
