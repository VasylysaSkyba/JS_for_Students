Урок 5. Створення слайдера Java Script.

Створення простого слайд-шоу

Цікавим елементом, який можна створити за допомогою JavaScript, є
слайд шоу. Для його створення знадобиться контейнер для слайдів та самі слайди.

Приклад слайд-шоу:
<ul id="slides">
<li class="slide showing">Slide 1</li>
<li class="slide">Slide 2</li>
<li class="slide">Slide 3</li>
<li class="slide">Slide 4</li>
<li class="slide">Slide 5</li>
</ul>

Для створення слайд-шоу можна використати базові стилі. У їх
функціональні можливості входить:
• створювати контейнер для слайдів;
• розташовувати слайди один над одним усередині контейнера;
• регулювати поведінку слайдів при появі та зникненні;
• плавно змінювати прозорість слайдів для ефекту згасання та появи.

Важливо пам'ятати, що перед роботою в CSS потрібно змінити класи і використовувані
ідентифікатори, щоб не було конфліктів з Вашими сайтами. Давайте
розглянемо цей CSS:

Первинні стилі. З ними працює слайд-шоу

#slides {
  position: relative;
  height: 300px;
  padding: 0px;
  margin: 0px;
  list-style-type: none;
}
.slide {
  position: absolute; /*розташування один за одним*/
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  opacity: 0; /*прозорість 0, не прозорий 1 */
  z-index: 1; /*визначає порядок стека елемента. Іншими словами, Ви можете розмістити елемент на сторінці вище іншого елементу або перед ним*/
  -webkit-transition: opacity 1s; /* Це префікс для властивості transition для вебкітових браузерів (таких як Google Chrome та Safari).*/
  -moz-transition: opacity 1s; /*Це префікс для властивості transition для браузера Firefox (Gecko engine).*/
  -o-transition: opacity 1s; /*Це префікс для властивості transition для браузера Opera.*/
  transition: opacity 1s; /*Ця властивість transition визначає стандартні параметри анімації переходу для всіх браузерів, які підтримують CSS3.*/
}
.showing {
  opacity: 1;
  z-index: 2;
}
Давайте додамо різні стилі для нашого слайд-шоу, щоб він придбав цікавіший зовнішній вигляд. Для демо використовуємо такі стилі:
Другі стилі:

Зовнішній вигляд можете змінити

.slide {
  font-size: 20px;
  padding: 4px;
  box-sizing: border-box;    /*Будь-які поля та межі будуть включені в розміри висоти та ширини елемента*/
  background: #333;
  color: #fff;
}
.slide:nth-of-type(1) {    /*Селектор :nth-of-type(n) обирає елемент, що є n елементом одного типу свого батька.*/
        background: red;
        }
        .slide:nth-of-type(2) {
        background: orange;
        }
        .slide:nth-of-type(3) {
        background: green;
        }
        .slide:nth-of-type(4) {
        background: blue;
        }
        .slide:nth-of-type(5) {
        background: purple;
        }


Слід зазначити, що JavaScript (JS) під час роботи зі слайдами виконує вкрай
важливе завдання: ховає поточний слайд та показує наступний. Для реалізації
даної задачі, перш за все, потрібно змінити назви класів слайдів. 

Ось код JS: 
const slides = document.querySelectorAll("#slides .slide");
let currentSlide = 0;
const slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
  slides[currentSlide].className = "slide";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = "slide showing";
}

Давайте розглянемо його структуру:
1. За допомогою querySelectorAll отримуємо всі слайди з контейнера.
2. Після цього створюємо змінну для отримання поточного слайду.
3. Потім задаємо інтервал у дві секунди для наступного слайду (2000ms).


Докладніше розберемо функцію nextSlide.

Насамперед, нам потрібно сховати поточний слайд. Для цього змінимо його клас.
Властивість transition автоматично обробляє плавне згасання, що допомагає
сховати поточний слайд та показати наступний.
Тепер додамо новий клас поточного слайду. Якщо ж він був останнім, з
допомогою оператора % повертаємось до першого слайду. Цей оператор відмінно
підходить у випадках, коли необхідно виконати математичні операції з
циклами. Прикладом може бути календар. У нашому випадку це 5 слайдів.
Наступним кроком буде підрахунок всіх чисел: 1% 5 = 1, 2% 5 = 2, 3% 5 = 3, 4% 5 = 4, і,
зрештою, 5%5=0.

Після отримання індексу слайду змінюємо клас та показуємо новий. І знову
прозорість обробляється властивістю transition.
Ось і створено просте слайд-шоу.
Однак не забувайте про сумісність: властивість transition не підтримується в IE9
та у більш ранніх версіях. У такому разі ефект загасання зміниться на звичайний
різкий перехід до наступного слайду.


Додаємо елементи керування в слайдер
Наступним етапом у створенні слайд-шоу стане додавання кнопок паузи,
наступного слайду та попереднього.
Поговоримо про кнопку паузи. Додати її в HTML можна у такий спосіб:
<button class="controls" id="pause">Pause</button>

Тепер додамо цей код до JS:

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
}

Розглянемо структуру скрипту:
1. Змінна playing задіяна у моменти, коли слайдер активний.
2. Кнопка паузи занесена в змінну pauseButton, щоб потім не шукати
її у документі.
3. Функція pauseSlideshow зупиняє слайдер і як можна побачити в
скрипті, записує в кнопку паузи «Play».
4. Функція playSlideshow запускає слайдер, а кнопку програвання (Play)
записує "Pause".
5. Наприкінці вставлено оброблювач кліка, щоб кнопка Play/Pause могла
ставити слайдер на паузу та запускати його.


Кнопки наступний та попередній

Спочатку вивчимо, як додавати в HTML кнопки Next і Previous:
<button class="controls" id="previous">Previous</button>
<button class="controls" id="next">Next</button>
Тепер змінимо цю функцію JavaScript:

function nextSlide() {
  slides[currentSlide].className = "slide";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = "slide showing";
}

на:
function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slides[currentSlide].className = "slide";
  const length = slides.length; // Зберегти довжину масиву в змінній
  currentSlide = (n + length) % length; // Використовувати збережену довжину
  slides[currentSlide].className = "slide showing";
}

Для більшої гнучкості до скрипту вище додано загальну функцію goToSlide. Також,
щоб не отримати негативного значення, був злегка змінений спосіб
обчислення змінної currentSlide.

Для тесту можна замінити slides.length на будь-яке число і подивитися, що
потрапить у currentSlide зі зміною значення n.

Щоб кнопки почали працювати, додайте цей код до скрипту: 

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