// Домашнє завдання №7.

// Напишіть на JavaScript код, і в ньому:
// 1. Заповніть масив таким чином: у перший елемент запишіть 'x',
// другий 'xx', третій 'xxx' і так далі.
// 2. Створіть функцію arrayFill, яка заповнюватиме масив заданими
// значеннями. Першим параметром функція набуває значення, яким
// заповнювати масив, а другим - скільки елементів має бути в масиві.
// Приклад: arrayFill('x', 5) зробить масив ['x', 'x', 'x', 'x', 'x'].
// 3. Коли створено масив з числами, дізнайтеся скільки елементів від початку
// масиву потрібно скласти, щоб у сумі вийшло більше 10-ти.
// 4. Результат прикріпити до домашнього завдання.

// let arry = new Array();
// let array = [];


let fruits = ["Яблуко", "Апельсин", "Слива"];
// fruits [0] = "Банан";
// alert ( fruits [0] ); // Яблуко
// alert ( fruits [1] ); // Апельсин
// alert(fruits[2]); //	Слива
console.log(fruits[1]);
console.log(fruits.length);
console.log(fruits);

fruits.push('Ананас'); //додається елемен в кінець масиву
console.log(fruits);
fruits.unshift('Кокос'); //додається елемент на початок масиву



//  let fr= ["Яблуко", "Апельсин", "Слива"];
// for (let i = 0; i < fr.length; i++) {
// alert (fr [i]);
// }

// Початковий масив
let numbers = [10, 20, 30, 40, 50];

// Видалення елементу з початку масиву за допомогою методу shift()
let firstElement = numbers.shift();
console.log("Видалено елемент з початку:", firstElement);
console.log("Масив після видалення:", numbers);

// Видалення елементу з кінця масиву за допомогою методу pop()
let lastElement = numbers.pop();
console.log("Видалено елемент з кінця:", lastElement);
console.log("Масив після видалення:", numbers);

// Видалення елементу всередині масиву за допомогою методу splice()
let removedElements = numbers.splice(1, 2); // Видаляємо 2 елементи починаючи з індексу 1
console.log("Видалено елементи всередині:", removedElements);
console.log("Масив після видалення:", numbers);


// Сортування, метод sort(fn)
// Давайте розглянемо різні способи сортування елементів масиву.
// Метод sort() сортує елементи дома.

// Наприклад:
// var arr = [1, 2, 15];
// arr.sort();
// alert(arr); // 1, 15, 2

// function compareNumeric(a, b){
//     if (a > b) return 1;
//     if (a < b) return -1;
//     }
//     var arr = [1, 2, 15];
//     arr.sort(compareNumeric);
// console.log(arr); // 1, 2, 15
   
// console.log(arr.sort((a, b) => a - b)); //короттний запис сортування


//----- HomeWork------
// 1. Заповніть масив таким чином: у перший елемент запишіть 'x',
// другий 'xx', третій 'xxx' і так далі.
// function fillArrayWithPattern(length) {
//     let arr = [];
//     for (let i = 1; i <= length; i++) {
//       arr.push('x'.repeat(i));
//     }
//     return arr;
//   }
  
  // 2. Створіть функцію arrayFill, яка заповнюватиме масив заданими
  // значеннями. Першим параметром функція набуває значення, яким
  // заповнювати масив, а другим - скільки елементів має бути в масиві.
  // Приклад: arrayFill('x', 5) зробить масив ['x', 'x', 'x', 'x', 'x'].
//   function arrayFill(value, length) {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//       arr.push(value);
//     }
//     return arr;
//   }
  
  // 3. Коли створено масив з числами, дізнайтеся скільки елементів від початку
  // масиву потрібно скласти, щоб у сумі вийшло більше 10-ти.
//   function sumToMoreThanTen(arr) {
//     let sum = 0;
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//       count++;
//       if (sum > 10) {
//         break;
//       }
//     }
//     return count;
//   }
  
  // Приклади використання:
//   console.log(fillArrayWithPattern(5)); // ['x', 'xx', 'xxx', 'xxxx', 'xxxxx']
//   console.log(arrayFill('x', 5)); // ['x', 'x', 'x', 'x', 'x']
  
//   const numbersArray = [2, 3, 5, 1, 4];
//   console.log(sumToMoreThanTen(numbersArray)); // 3
  