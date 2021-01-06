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

// 10 Написать цикл for, который выведет в консоль все чётные цифры от 10 до 20

function f10() {
  console.log(` условие проверяется после каждой итерации, а не до неё
 Это гарантирует, что тело цикла выполнится хотя бы один раз.
 do {
    <тело цикла>
} while (условие);
`)
}

document.getElementById('b10').onclick = f10;
