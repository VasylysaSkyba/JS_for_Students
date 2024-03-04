Урок 6. jQuery.

Знайомство з jQuery
jQuery – це зручний, простий у розумінні та використанні JavaScript Framework.
Крім того, jQuery дуже функціональний у використанні, з його допомогою навіть
Ви можете створювати сайти. Для початку роботи в jQuery Вам знадобляться основи
JavaScript, оскільки цей фреймворк повністю користується JavaScript. З
За допомогою jQuery можна створювати анімації, слайди, а також відпрацьовувати
складні події.
Оскільки у Вас вже є основи роботи з JavaScript, давайте одразу перейдемо до
прикладів.

Як працює jQuery?
Для роботи Вам знадобиться сам фреймворк. Його можна завантажити з домашньої
сторінки проекту, а потім проініціалізувати:

<head>
<script type=”text/javascript” src=”jquery.js”></script>
</head>

Як отримати елемент за допомогою jQuery?

Щоб зрозуміти принципи роботи jQuery, давайте ознайомимося з основними
елементами роботи у фреймворку:
• $(“#header”) – отримання елемента з id=”header”;
• $(“h3”) – отримання всіх елементів <h3>;
• $(“div#content .photo”) – отримання всіх елементів із класом =”photo”
які перебувають у елементі div з id=”content”;
• $(“ul li”) – отримання всіх <li> елементів зі списку <ul>;
• $(“ul li:first”) – отримання лише першого елемента <li> зі списку <ul>.

Після ознайомлення з елементами, давайте перейдемо безпосередньо до
прикладів.

---

Практичні приклади

Висувна панель (Приклад 1)
Створимо слайд-панель, яка змогла б рухатися вгору-вниз кліком.
HTML-код для неї:

<div	id=”panel”>
</div>
<p	class=”slide”><a	href=”#” class=”btn-slide”>Slide	Panel</a></p>

JS-код (рис. 1):

Пов'язана анімація (Приклад 2)
Попередній приклад був досить простим. Тепер розглянемо приклад
складніше. За його допомогою Ви зможете краще зрозуміти принципи роботи jQuery та
набити руку у створенні анімації.
Уважно вдивіться у приклад, поданий нижче. Ви можете простежити, як
всього кілька рядків коду змушують квадрат рухатися, змінювати розмір та
прозорість:
$(document).ready(function(){
$(“.run”).click(function(){
$(“#box”).animate({opacity: “0.1”, left: “+=400”}, 1200)
.animate({opacity: “0.4”, left: “+=160”, height: “20”, width:
"2-"}, "slow")
.animate({opacity: “1”, left: “0”, height: “100”, width: “100”},
"slow")
.animate({top: “0”, “fast”)
.slideUp()
.slideDown(“slow”)
return false;
});
});

Розглянемо структуру прикладу:

1. як тільки провантажилася сторінка, DOM готовий до різних
   маніпуляціям;
2. далі застосовуємо подію click для елемента <a class=”run”>
3. маніпулюємо елементом <div id=”box”>: зменшуємо його прозорість до
   0.1; разом з цим, нарощуємо позицію left ще на 400px, зі швидкістю
   1200 мс (milliseconds);
4. повільно змінюємо параметри зовнішнього: opacity = 0.4, top = 160px, height = 20,
   width=20; швидкість анімації вказуємо іншими параметрами: "slow",
   "normal", "fast" (або ж проставляємо час анімації в мілісекундах);
5. потім ставимо opacity = 1, left = 0, height = 100, width = 100, швидкість - "slow";
6. потім - top = 0, швидкість - "fast";
7. потім – slideUp (з дефолтною швидкістю анімації – “normal”);
8. потім - slideDown, зі швидкістю - "slow";
9. повертаємо false для того, щоб браузер не перейшов за посиланням.

Анімація для події hover (Приклад 3)
За допомогою цього прикладу Ви навчитеся створювати гарну анімацію для
події hover.
Коли Ви наводите мишкою на елемент меню (mouseover), відбувається пошук
елемента <em>, а також анімується його прозорість та розташування:
$(document).ready(function(){
$(“.menu a”).hover(function(){
$(this).next(“em”).animate({opacity: “show”, top: “-
75”},”slow”);
}, function(){
$(this).next(“em”).animate({opacity: “hide”, top: “-85”},
”fast”);
});
});

Галерея (Приклад 4)
Розглянемо приклад, як можна продати галерею без перезавантаження сторінки.
Для початку додамо тег <em> у заголовки <h2>.
Далі клацаємо на зображення в <p class=thumbs> і виконуємо такі дії:

1. зберігаємо значення атрибуту "href" у змінній "largePath";
2. зберігаємо значення атрибуту “title” у змінній “largeAlt”;
3. замінюємо в елементі <img id=”largeImg”> значення атрибутів “scr” та “alt”
   значеннями зі змінних “largePath” та “largeAlt”;
4. присвоюємо елементу "h2 em" значення "largeAlt".
   Приклад скрипту:
   $(document).ready(function(){
$(“h2”).append(‘<em></em>’){
   $(“.thumbs a”).click(function(){
var largePath = $(this).attr(“href”);
var largeAlt = $(this).attr(“title”);
$(“#largeImg”).attr({ src:largePath, alt: largeAlt });
   $(“h2 em”).html(“(“+largeAlt+”)”); return false;
   });
   });