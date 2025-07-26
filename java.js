const track = document.querySelector('.carousel-track');
let index = 0;
const slides = document.querySelectorAll('.team-member');
const totalSlides = slides.length;
const slideWidth = slides[0].getBoundingClientRect().width;

function moveToSlide() {
    track.style.transform = 'translateX(' + (-index * (slideWidth + 20)) + 'px)'; // 20px is the gap between slides
}

function autoSlide() {
    index++;
    if (index >= totalSlides) {
        index = 0;
    }
    moveToSlide();
}

setInterval(autoSlide, 3000); // Change slide every 3 seconds
