let words = ["мавпа", "стіл", "академія"];                   // Створює масив слів, з яких обирається одне для вгадування.
let word = words[Math.floor(Math.random() * words.length)];  // Вибирає випадкове слово з масиву words.
let answerArray = [];                                        // Створює порожній масив для збереження відповіді гравця.
for (let i = 0; i < word.length; i++) {                      // Заповнює масив answerArray підкресленнями _, кількість яких відповідає кількості літер у вибраному слові. Це представляє собою відображення слів, які гравець ще не вгадав.
  answerArray[i] = "_";
}
let remainingLetters = word.length;                          // Зберігає кількість літер, які ще не були вгадані.

while (remainingLetters > 0) {                               // Цикл, який продовжується, доки є літери, які не були вгадані.
  alert(answerArray.join(" "));                              // Показує поточний стан вгаданого слова, розділеного пробілами.
  let guess = prompt(                                        // Запитує введення гравця для вгадування літери.
    "Вгадайте літеру або натисніть Скасувати, щоб вийти з гри."
  );

  if (guess === null) {                                      // Перевіряє, чи користувач натиснув "Скасувати", якщо так, то гра завершується.
    break;
  } else if (guess.length !== 1) {                           // Перевіряє, чи введено лише одну літеру.
    alert("Будь ласка, введіть одну літеру.");
  } else {
    for (let j = 0; j < word.length; j++) {                  // Перевіряє кожну літеру в загаданому слові.
      if (word[j] === guess) {                               // Перевіряє, чи введена літера співпадає з будь-якою літерою загаданого слова.

        answerArray[j] = guess;                              // Якщо літера вгадана правильно, вона додається до відображення слова, а кількість залишених літер для вгадування зменшується.
        remainingLetters--;
      }
    }
  }``
}

alert(answerArray.join(" "));                                // Показує поточний стан вгаданого слова.
alert("Відмінно! Слово: " + word);                           // Показує гравцеві загадане слово після завершення гри.
