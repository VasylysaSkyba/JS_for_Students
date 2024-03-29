Урок 2. Оператори. Робота з користувачем.

Оператори
----------

У процесі навчання особливе місце займає знайомство з термінологією.	
Перш ніж перейти до теми уроку, потрібно дізнатися кілька термінів, які	
використовують у програмуванні, щоб розуміти, про що йтиметься.

Поговоримо про операнд.	

Операнд - це те, до чого застосовується оператор. 

Наприклад, 6 * 3 - оператор множення з лівим і правим операндами. Операнд також	
називають "аргументом оператора".

Унарний оператор - це оператор, що застосовується до певного виразу.	
Наприклад, оператор унарний мінус (-) у коді змінює знак числа на	
протилежний:

1. const x = 1 ;
2. x = -x ;
3. alert ( x ) ; // -1, застосували унарний мінус

Існує також бінарний оператор.	

Цей оператор застосовується відразу до двох	
операндів.	Тобто, унарний мінус існує також і в бінарній формі:

1. const x = 3 , y = 6 ;
2. alert ( y - x ) ; // 3, бінарний мінус

Додавання рядків, бінарний +
-----------------------------

Як і в математиці, плюс (+) виконує функцію складання числа.
Однак бінарний оператор + можна застосувати і до рядків. Тоді він об'єднає ці рядки в один:

1. const a = "моє" + "ім'я" ;
2. alert (a) ; //моє ім'я

Це об'єднання відбувається, якщо хоча б один аргумент є рядком.	
Відповідно, другий аргумент теж буде перетворено до існуючого рядка.

Крім того, абсолютно не важливо, з якого боку знаходиться операнд-рядок,	
ліворуч чи праворуч, все одно нестроковий аргумент перетворюється в нього. 

Наприклад:
1. alert ( '3' + 2 ) ; // "32"
2. alert ( 2 + '3' ) ; // "23"

Присвоювання
-------------

Існує також оператор присвоювання (=).

Оператор присвоювання характеризується одним із найнижчих пріоритетів.	
І коли відбувається процес присвоювання дочогось змінної, 
наприклад, x = 2 * 2 + 2, то спершу буде виконана арифметика, і тільки потім присвоювання.

1. const x = 2 * 2 + 2 ;
2. alert ( x ) ; // 6

Взяття залишку %
-----------------

На особливу увагу заслуговує оператор взяття залишку (%). Його особливість у	
тому, що він не має жодного стосунку до відсотків, навіть незважаючи на те, яким	
символом він позначений.

Результат a % b - це залишок від ділення a на b.
Наприклад:
1. alert ( 5 % 2 ) ; // 1, залишок від ділення 5 на 2
2. alert ( 8 % 3 ) ; // 2, залишок від ділення 8 на 3
3. alert ( 6 % 3 ) ; // 0, залишок від ділення 6 на 3

Оператори порівняння та логічні значення
-----------------------------------------

Багато операторів порівняння знайомі нам із математики.	
Наприклад:
- Більше/менше: a > b, a < b.
- Більше-одно або менше-одно: a >= b, a <= b.
- Дорівнює a == b.	Для проведення порівняння використовують два символи рівності (=).
Якби було використано один символ, то це означало б	
присвоювання, замість порівняння.
- Не дорівнює.	В арифметиці він позначається як ≠, а в JavaScript не дорівнює - це	
знак оклику перед знаком рівності (!=).

Логічні значення
-----------------

Поговоримо про логічні типи.

Існує всього два логічних значення:
- true - має сенс "так", "вірно", "істина".
- false - означає "ні", "невірно", "брехня".
Наприклад:
1. alert ( 2 > 1 ) ; // true, вірно
2. alert ( 2 == 1 ) ; // false, невірно
3. alert ( 2 != 1 ) ; // true

Логічні значення можуть бути використані і безпосередньо.	 
Наприклад, присвоювати значення змінним або просто працювати з ними:
1. const a = true ; // присвоювати явно
2. const b = 3 > 4 ; // або як результат порівняння
3. alert ( b ) ; // false
4. alert ( a == b ) ; // (true == false) напевно, виведе false

Порівняння рядків
Потрібно запам'ятати, що рядки в коді порівнюються побуквено:
1. alert ( 'Б' > 'А' ) ; // true

Взаємодія з користувачем
-------------------------

Prompt
------

Давайте поговоримо про дуже цікаву функцію - prompt.

Ця функція приймає два аргументи:
 result = prompt (title, default) ;

Ця функція виводить модальне вікно із заголовком title, а також полем для	
введення тексту, заповненим рядком за замовчуванням default і кнопками OK/CANCEL.

У цьому вікні користувач має або щось ввести і натиснути OK, або скасувати	
введення кліком на CANCEL або натисканням Esc на клавіатурі.

Виклик prompt повертає те, що ввів відвідувач - рядок або спеціальне	
значення null, якщо введення скасовано.

Як і у випадку з alert, вікно prompt є модальним. 
1. const years = prompt ( 'Скільки вам років?' , 100) ;
2. alert ( 'Вам ' + years + ' років! ' ).

Confirm
--------

Синтаксис:
 result = confirm (question) ;

Аргумент confirm виводить вікно із запитанням question і двома кнопками: OK і CANCEL.

Результатом буде true при натисканні OK і false при натисканні CANCEL (або Esc).

Наприклад:
1. const isAdmin = confirm ("Ви - адміністратор?" ) ;
2. alert ( isAdmin) ;

Умови
------

Якщо потрібно виконати певні дії, залежно від умови, можна скористатися оператором if.

Наприклад:
1. const year = promt ( 'У якому році з'явилася академія ШАГ?' , ' ' ' ) ;
2. if (year != 2011) alert ('А ось і неправильно!' ) ;

Оператор if ("якщо") отримує умову.	 У прикладі вище це year != 2011. Він	
обчислює її і, якщо результат буде true, виконує команду.

Якщо необхідно виконати низку команд, то їх потрібно оформити блоком коду в	
фігурних дужках:
1. if (year != 2011) {
2. alert ( 'А ось...' ) ;
3. alert ( '...і неправильно!' ) ;
4. }

Існує також необов'язковий блок else ("інакше"). 
Цей блок виконується, якщо умова невірна:
1. const year = prompt ( 'У якому році з'явилася академія ШАГ?' , ' ' ) ;
2. if (year != 2011) 
4. alert ( 'А ось і неправильно!' ) ;
3. else alert ( 'Та ви знавець!' )