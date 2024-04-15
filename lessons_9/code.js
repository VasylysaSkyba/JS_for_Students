const getRandomNumber = function (size) {                   //Здобути випадкове число від 0 до size-1
return Math.floor(Math.random() * size);
};

const getDistance = function (event, target) {              // Розрахувати відстань від кліка (event) до скарбу (target)
const diffX = event.offsetX - target.x;
const diffY = event.offsetY - target.y;
return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

const getDistanceHint = function (distance) {                // Отримати строку підказки для відстані

if (distance < 10) {
  return "Обпалишся!";
} else if (distance < 20) {
  return "Дуже гаряче";
} else if (distance < 40) {
  return "Гаряче";
} else if (distance < 80) {
  return "Тепло";
} else if (distance < 160) {
  return "Холодно";
} else if (distance < 320) {
  return "Дуже холодно";
} else {
  return "Замерзнеш!";
}
};


const width = 400;                                             // Створити змінні
const height = 400;
let clicks = 0;


const target = {                                               // Випадкове розташування скарбу
x: getRandomNumber(width),
y: getRandomNumber(height)
};

$("#map").click(function (event) {                            // Додати обробник кліка для елементу img
clicks++;

const distance = getDistance(event, target);                   // Отримати відстань від місця кліка до скарбу
const distanceHint = getDistanceHint(distance);                // Перетворити відстань у підказку
$("#distance").text(distanceHint);                             // Записати нову підказку в елемент #distance
if (distance < 8) {                                            // Якщо клік був достатньо близько, привітати з перемогою
alert("Скарб знайдено! Зроблено кліків: " + clicks);
}
});

