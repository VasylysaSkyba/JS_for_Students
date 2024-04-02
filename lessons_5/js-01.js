const slides = document.querySelectorAll("#slides .slide");   /*За допомогою querySelectorAll отримуємо всі слайди з контейнера.*/ 
let currentSlide = 0;                                         /*Після цього створюємо змінну для отримання поточного слайду.*/
const slideInterval = setInterval(nextSlide, 2000);           /*Потім задаємо інтервал у дві секунди для наступного слайду (2000ms)*/ 

//Після виконання цієї функції слайдер переходить до наступного слайда у презентації.
// function nextSlide() {
//   slides[currentSlide].className = "slide";                   /* Цей рядок змінює клас поточного слайда на "slide", видаляючи клас "showing" (якщо він був наданий). Це приховує поточний слайд.*/
//   currentSlide = (currentSlide + 1) % slides.length;          /*Цей рядок змінює змінну currentSlide, щоб вказати на наступний слайд. Він обчислюється як (currentSlide + 1) % slides.length, щоб забезпечити зациклювання презентації: якщо currentSlide досягає максимального індексу, він переходить на початок масиву slides.*/ 
//   slides[currentSlide].className = "slide showing";           /*Цей рядок змінює клас наступного слайда на "slide showing", щоб зробити його видимим.*/ 
// }

/* встановляємо кнопку <button class="controls" id="pause">Pause</button>*/ 

let playing = true;                                             /*Змінна playing задіяна у моменти, коли слайдер активний.*/                             
const pauseButton = document.getElementById("pause");           /*Кнопка паузи занесена в змінну pauseButton, щоб потім не шукати її у документі.*/

function pauseSlideshow() {                                    /*Функція pauseSlideshow зупиняє слайдер і як можна побачити в скрипті, записує в кнопку паузи «Play». */
  pauseButton.innerHTML = "Play";
  playing = false;
  clearInterval(slideInterval);                                 /*Ця функція JavaScript, яка використовується для зупинки повторного виконання затриманого коду, який був запущений за допомогою функції setInterval(). */
}

function playSlideshow() {                                      /*Функція playSlideshow запускає слайдер, а кнопку програвання (Play) записує "Pause". */
  pauseButton.innerHTML = "Pause";
  playing = true;
  slideInterval = setInterval(nextSlide, 2000);
}

pauseButton.onclick = function () {                            /*Наприкінці вставлено оброблювач кліка, щоб кнопка Play/Pause могла ставити слайдер на паузу та запускати його. */
  if (playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
};


/*Кнопки наступний та попередній

Спочатку вивчимо, як додавати в HTML кнопки Next і Previous:
<button class="controls" id="previous">Previous</button>
<button class="controls" id="next">Next</button> */


//змінити цю
// function nextSlide() {
//     slides[currentSlide].className = "slide";
//     currentSlide = (currentSlide + 1) % slides.length;
//     slides[currentSlide].className = "slide showing";
// }


//   на цю

function nextSlide() {                         /*Функція nextSlide() викликає goToSlide() з аргументом currentSlide + 1, що переводить презентацію до наступного слайда. */
    goToSlide(currentSlide + 1);
  }
  
  function previousSlide() {                   /*Функція previousSlide() викликає goToSlide() з аргументом currentSlide - 1, що переводить презентацію до попереднього слайда. */
    goToSlide(currentSlide - 1);
  }
  
function goToSlide(n) {
  slides[currentSlide].className = "slide";
  const length = slides.length;               // Зберегти довжину масиву в змінній
  currentSlide = (n + length) % length;       // Використовувати збережену довжину
  slides[currentSlide].className = "slide showing";
}
  /*Функція goToSlide(n) приймає індекс слайда як аргумент n і змінює поточний слайд на вказаний, встановлюючи його клас на "slide showing".
   Для цього вона використовує арифметику залишку для забезпечення циклічного переходу між слайдами: (n + length) % length. 
   Коли n перевищує довжину масиву слайдів length, залишок від ділення на довжину повертається до початку масиву, дозволяючи циклічний перехід.*/

const next = document.getElementById("next");
const previous = document.getElementById("previous");

next.onclick = function () {
  pauseSlideshow();                         /*Функція, яка призупиняє автоматичне переключення слайдів у презентації */
  nextSlide();                              /*Функція, яка переходить до наступного слайда у презентації. */
};

previous.onclick = function () {
  pauseSlideshow();                         /*Функція, яка призупиняє автоматичне переключення слайдів у презентації */
  previousSlide();                           /*Функція, яка переходить до попереднього слайда у презентації. */
};
