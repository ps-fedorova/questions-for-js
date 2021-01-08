"use strict"

document.getElementById('consoleClear').onclick = console.clear;

// 1 Чем отличается число и строка при выводе в консоль?
function f1() {
  console.log(1);
  console.log('текст');
}

document.getElementById('b1').onclick = f1

// 2 Где пишется код JS?
function f2() {
  console.log(`
между тегов <script></script>
перед закрывающим тегом </body>, но можно и в head с соответствующими атрибутами
<script src="./script.js"></script> В этом случае между тегами будет игнорироваться встроенный код`)
}

document.getElementById('b2').onclick = f2

// 3 Перечислить арифметические операторы
function f3() {
  console.log('+  -  *  /  **  %  +=  ()');
  console.log(`присвоение со сложением +=
let year = 365;
year = year + 1;
year += 1;
`);
}

document.getElementById('b3').onclick = f3

// 4 Конструкция else ... if
function f4() {
  console.log(`function f41(a) {
  if (a > 5) {
    console.log('a > 5')
  } else if (a > 10) {
    console.log('a > 10')
  } else {
    console.log('ничего')
  }
}

f41(1);`);
}

document.getElementById('b4').onclick = f4

// 5 Конструкция switch ... case
function f5() {
  console.log(`Важно: проверка на равенство всегда строгая https://learn.javascript.ru/switch
  
let a = 4;

switch (a) {
  case 3:
    alert( 'Маловато' );
    break;
  case 4:
    alert( 'В точку!' );
    break;
  case 5:
  case 6:
    alert( 'Перебор' );
    break;
  default:
    alert( "Нет таких значений" );
}`)
  console.log(`  
const i9 = +document.querySelector('.i-9').value;  

switch (true) {
  case (i9 >= 1):
    out9.textContent = '1';
    break;
  case (i9 >= 33):
    out9.textContent = '2';
    break;

  default:
    out9.textContent = '0';
}`)
}

document.getElementById('b5').onclick = f5

// 6 Выбрать последний элемент массива let arr = [ 'q', 'w', 'e ', 'r'];

function f6() {
  console.log('arr[arr.length - 1]')
}

document.getElementById('b6').onclick = f6;

// 7 Добавить 't' в конец массива let arr = [ 'q', 'w', 'e ', 'r'];

function f7() {
  console.log('arr[arr.length] = t')
}

document.getElementById('b7').onclick = f7;

// 8 Написать цикл while, который выведет в консоль все чётные цифры от 10 до 20

function f8() {
  console.log(`let number = 10;

while (number <= 20) {
    console.log(number += 2);
    number += 2;
} `)
}

document.getElementById('b8').onclick = f8;

// 9 Написать цикл for, который выведет в консоль все чётные цифры от 10 до 20

function f9() {
  console.log(`for (let i = 10; i <= 20; i += 2) {
  console.log(i)
}`)
}

document.getElementById('b9').onclick = f9;

// 10 Чем отличается цикл do...while от while?

function f10() {
  console.log(` условие проверяется после каждой итерации, а не до неё
 Это гарантирует, что тело цикла выполнится хотя бы один раз.
 do {
    <тело цикла>
} while (условие);
`)
}

document.getElementById('b10').onclick = f10;

// 11 Что выведет консоль? Какое значение выводится(старое или новое)?

function f11() {
  let a = 1;
  console.log(a++, 'старое');
  console.log(a--, 'старое');
  let b = 1;
  console.log(++b, 'новое');
  console.log(--b, 'новое');
  let c = 1;
  console.log(1 + c, 'новое');
  console.log(1 - c, 'новое');
}

document.getElementById('b11').onclick = f11;

// 12 Что делает return? Что вернет функция, если результат отсутствует?
//    Исполняется ли код после return?

function f12() {
  console.log(`return завершает выполнение текущей функции и возвращает её значение
undefined
нет`);
}

document.getElementById('b12').onclick = f12;

// 13 Что делает return? Что вернет функция, если результат отсутствует?
//    Исполняется ли код после return?

function f13() {
  console.log(`Свойства и методы.
Если значение представляет собой функцию, такую пару называют методом.
Если значение — строка, число, булево значение, массив или объект, такую пару называют свойством`);
}

document.getElementById('b13').onclick = f13;

// 14 Получить доступ к свойству двумя способами
//    let myObject = { stringKey: 'значение' };

function f14() {
  console.log(`myObject.stringKey
myObject['stringKey']
`);
}

document.getElementById('b14').onclick = f14;


// 15 Проверить, является ли "a" числом
function f15() {
  console.log(`let a = 1;
let b = '1';

function foo(a) {
  if (typeof a === 'number') {
    console.log('число')
  } else {
    console.log('не число')
  }
}

foo(a);
foo(b);
`);
}

document.getElementById('b15').onclick = f15;

// 16 Что выведет консоль?
function f16() {
  console.log(`typeof undefined    // "undefined"
typeof 0            // "number"
typeof NaN          // "number"
typeof -Infinity    // "number"
typeof 10n          // "bigint"
typeof true         // "boolean"
typeof "foo"        // "string"
typeof Symbol("id") // "symbol"
typeof Math         // "object"
typeof null         // "object"
typeof alert        // "function"
typeof alert        // "function"
`);
}

document.getElementById('b16').onclick = f16;

// 17 Сколько типов данных в JS? Перечислить и описать
function f17() {
  console.log(`number для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(2^53-1).
bigint для целых чисел произвольной длины.
string для строк.
boolean для true/false.
null для неизвестных значений. || Значения нет. 
undefined для неприсвоенных значений. || Значение не определено.
symbol для уникальных идентификаторов.
object для более сложных структур данных.
`);
}

document.getElementById('b17').onclick = f17;

// 18 Сколько типов данных в JS? Перечислить и описать
function f18() {
  console.log(`их 6:
null
undefined
false
0
Пустая строка -> ""
NaN
`);
}

document.getElementById('b18').onclick = f18;

// 19 Вывести по первым буквам АННА
function f19() {
  console.log(`const acrostic = [
  'Ангел лёг у края небосклона.',
  'Наклонившись, удивлялся безднам.',
  'Новый мир был синим и беззвездным.',
  'Ад молчал, не слышалось ни стона.'
];

let annaAkhmatova = '';

for (let i = 0; i < acrostic.length; i += 1) {
  annaAkhmatova += acrostic[i][0];
}
console.log(annaAkhmatova);
`);
}

document.getElementById('b19').onclick = f19;

// 20 Написать код, чтобы в консоль вывела undefined и null
function f20() {
  console.log(`let elem;
console.log(elem);

const element = document.querySelector('.class');
console.log(element);
`);
}

document.getElementById('b20').onclick = f20;

// 21 Написать функцию, которая проверяет код на бесконечность
function f21() {
  console.log(`function a(x) {
 let b = Number.isFinite(x);
  if (b) {
    return 'Число конечно'
  } else {
    return 'Бесконечность'
  }
}
console.log(a(5));
`);
}

document.getElementById('b21').onclick = f21;

// 22 Написать функцию, которая проверяет ввод на NaN. Почему нельзя проверить напрямую?
function f22() {
  console.log(`function a(x) {
  let b = Number.isNaN(x);
  if (b) {
    return 'NaN'
  } else {
    return 'не NaN'
  }
}
console.log(a(5));

Потому что console.log(NaN === NaN); // false 
`);
}

document.getElementById('b22').onclick = f22;

// 23 Получить из числа NaN и Infinity
function f23() {
  console.log(`const initialNumber = 451;
console.log(initialNumber * 'хочу стать не-числом'); // NaN
console.log(initialNumber / 0); // Infinity 
`);
}

document.getElementById('b23').onclick = f23;
