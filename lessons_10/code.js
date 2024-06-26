function updateClock() {
    const now = new Date();                                     // Створює новий об'єкт Date, який представляє поточний момент часу.
    const hours = String(now.getHours()).padStart(2, '0');      // Отримує години з поточного моменту часу, перетворює їх у рядок та додає до них відстань в 2 символи зліва нулями за допомогою методу padStart, щоб завжди мати двоцифрове число.
    const minutes = String(now.getMinutes()).padStart(2, '0');  // Отримує хвилини з поточного моменту часу, перетворює їх у рядок та додає до них відстань в 2 символи зліва нулями за допомогою методу padStart, щоб завжди мати двоцифрове число.
    const seconds = String(now.getSeconds()).padStart(2, '0');  // Отримує секунди з поточного моменту часу, перетворює їх у рядок та додає до них відстань в 2 символи зліва нулями за допомогою методу padStart, щоб завжди мати двоцифрове число.
    const timeString = `${hours}:${minutes}:${seconds}`;        // Створює рядок, що представляє поточний час у форматі "години:хвилини:секунди".
    document.getElementById('clock').textContent = timeString;  // Встановлює текстовий вміст елемента з ідентифікатором 'clock' на значення timeString.
  }

  setInterval(updateClock, 1000);                               //Встановлює інтервал, який викликає функцію updateClock кожну секунду (1000 мілісекунд), щоб оновити час у годиннику.