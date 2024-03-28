//2. function countRabbits() {
//     for (let i = 0; i <= 3; i++){
//        alert ("Кролик номер " + i);
//     }
// }



/*---------------------------------- 3 --------------------------*/
// Пошук: getElement*

// Пошук є невід'ємною частиною роботи із складними документами. Пряма
// Навігація від одного елемента до іншого зручна, коли вони знаходяться поруч. Але
// що робити, якщо потрібно дістати довільний елемент звідкись із глибини
// документа?
// Для реалізації цієї функції DOM є додаткові методи пошуку.

// document.getElementById або просто id
// Якщо подивитися на структуру атрибуту, можна зрозуміти, що в документі потрібно
// знайти елемент за атрибутом id.
// Ця функція працюватиме лише в тому випадку, якщо Ви призначите елементу
// спеціальний атрибут id. Тоді можна отримати елемент змінної з ім'ям
// значення id.

// const elem = document.getElementById("content");
// elem.style.background = "red";
// alert(elem == content); перевіряємо True

// content.style.background = "red";

/*-------------------------------- 4 ----------------------------*/
// getElementsByTagName
// Відмінною рисою методу getElementsByTagName (або просто tag)
// є зручність його використання та функціональність. Наприклад, Вам потрібно
// знайти всі елементи з певним тегом. Ви не можете зробити це через ID,
// тому що даний атрибут займатиметься пошуком лише одного елемента.
// Тоді як tag шукатиме всі елементи із заданим тегом усередині елемента (elem).
// Після того, як tag знайде всі елементи, що шукаються, цей метод подасть їх у вигляді
// список.
// Регістр тега не має значення.
// Наприклад:
// отримати всі div-елементи

// const elements = document.getElementsByTagName("div");
//  console.log(elements) //дістатися блоків

/*-------------------------------- 5 ----------------------------*/
// document.getElementsByName
// Виклик document.getElementsByName(name) дозволяє отримати всі елементи з
// заданим атрибутом name.
// Наприклад, усі елементи з ім'ям age:

// const elems = document.getElementsByName('age');
// console.log(elems);

/*----------------- 6 По кнопці змінити значення ----------------------------*/

// function onButton (){
//     const text = document.getElementById ("text");
//     text.innerHTML = "На кнопку вже натиснули!!!" ;
//     }


/*----------------- 7 По кнопці випадковий колір ----------*/
// function onButton() {
//     const textColor = document.getElementById("text2");
//     //рандомний колір//
//     const red = Math.floor(Math.random() * 250); //  Math.floor- округлення до найменшого
//     const green = Math.floor(Math.random() * 250); //Math.random - рандомне значення
//     const blue = Math.floor(Math.random() * 250);

//     //сет кольорів//
//     text2.style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
// }


/*------- 8 Маленький калькулятор ----------- */

// function onButton() {
//     //отримуємо числа//
//     const aEl = document.getElementById("a");
//     const bEl = document.getElementById("b");
//     //отримуємо відповіть//
//     const cEl = document.getElementById("c");
//     //перетворення//
//     const a = Number(aEl.value) //Number - пертворює передані значення в число
//     const b = Number(bEl.value) //value- значееня
//     const c = a + b
//     //зберігаємо результат//
//     cEl.value = c;
// }

