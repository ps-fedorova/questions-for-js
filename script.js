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
