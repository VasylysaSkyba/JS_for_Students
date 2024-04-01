const slides = document.querySelectorAll("#slides .slide");
let currentSlide = 0;
const slideInterval = setInterval(nextSlide, 2000);

//спочатку ця функція
function nextSlide() {
  slides[currentSlide].className = "slide";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = "slide showing";
}


let playing = true;
const pauseButton = document.getElementById("pause");

function pauseSlideshow() {
  pauseButton.innerHTML = "Play";
  playing = false;
  clearInterval(slideInterval);
}

function playSlideshow() {
  pauseButton.innerHTML = "Pause";
  playing = true;
  slideInterval = setInterval(nextSlide, 2000);
}

pauseButton.onclick = function () {
  if (playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
};


//змінити цю
// function nextSlide() {
//     slides[currentSlide].className = "slide";
//     currentSlide = (currentSlide + 1) % slides.length;
//     slides[currentSlide].className = "slide showing";
// }


//   на цю



// function nextSlide() {
//     goToSlide(currentSlide + 1);
//   }
  
//   function previousSlide() {
//     goToSlide(currentSlide - 1);
//   }
  
//   function goToSlide(n) {
//     slides[currentSlide].className = "slide";
//     const length = slides.length; // Зберегти довжину масиву в змінній
//     currentSlide = (n + length) % length; // Використовувати збережену довжину
//     slides[currentSlide].className = "slide showing";
//   }

const next = document.getElementById("next");
const previous = document.getElementById("previous");

next.onclick = function () {
  pauseSlideshow();
  nextSlide();
};

previous.onclick = function () {
  pauseSlideshow();
  previousSlide();
};
