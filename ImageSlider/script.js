let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function changeSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    updateSlider();
}

function updateSlider() {
    const newTransformValue = -currentIndex * 100 + '%';
    document.querySelector('.slider').style.transform = 'translateX(' + newTransformValue + ')';
}

// Automatic slide change every 3 seconds
