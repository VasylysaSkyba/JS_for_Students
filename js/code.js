const slides = document.querySelectorAll("#slides .slide");
let currentSlide = 0;
const slideInterval = setInterval(nextSlide, 2000);


// function nextSlide() {
//     slides[currentSlide].className = "slide";
//     currentSlide = (currentSlide + 1) % slides.length;
//     slides[currentSlide].className = "showing";
// }

let playing = true;
const pauseButton = document.getElementById("pause");

function pauseSlideshow() {
    pauseButton.innerHTML = "Play";
    playing = false;
    clearInterval(slideInterva);
}


function playSlideshow() {
    pauseButton.innerHTML = "Pause"; 
    playing = true;
    slideInterva = setInterval(nextSlide, 2000)
}

pauseButton.onclick = function () {
    if (playing) {
        pauseSlideshow()
    } else {
        playSlideshow()
    }
};

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previouseSlide() {
    goToSlide(currentSlide - 1);
}
