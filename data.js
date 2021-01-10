export const data = [
  {
    question: "Чем отличается число и строка при выводе в консоль?",
    answer: "цветом: число - синий, текст - черный",
  },
  {
    question: "Где пишется код JS?",
    answer: `между тегов <script></script>
перед закрывающим тегом </body>, но можно и в head с соответствующими атрибутами
<script src="forTests.js"></script> В этом случае между тегами будет игнорироваться встроенный код`,
  },
  {
    question: "Перечислить арифметические операторы",
    answer: `+  -  *  /  **  %  +=  ()
присвоение со сложением +=
let year = 365;
year = year + 1;
year += 1;`,
  },
  {
    question: "Конструкция else ... if",
    answer: `function x(a) {
  if (a > 5) {
    console.log('a > 5')
  } else if (a > 10) {
    console.log('a > 10')
  } else {
    console.log('ничего')
  }
}

fx(1);`,
  },
  {
    question: "Конструкция switch ... case (2 варианта)",
    answer: `Важно: проверка на равенство всегда строгая https://learn.javascript.ru/switch

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
}

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
}`,
  },
  {
    question: "Выбрать последний элемент массива let arr = [ 'q', 'w', 'e ', 'r'];",
    answer: 'arr[arr.length - 1]',
  },
  {
    question: "Добавить 't' в конец массива let arr = [ 'q', 'w', 'e ', 'r'];",
    answer: "arr[arr.length] = t",
  },
  {
    question: "Написать цикл while, который выведет в консоль все чётные цифры от 10 до 20",
    answer: `let number = 10;

while (number <= 20) {
    console.log(number += 2);
    number += 2;
} `,
  },
  {
    question: "Написать цикл for, который выведет в консоль все чётные цифры от 10 до 20",
    answer: `for (let i = 10; i <= 20; i += 2) {
  console.log(i)
}`,
  },
  {
    question: "Чем отличается цикл do...while от while?",
    answer: `условие проверяется после каждой итерации, а не до неё
 Это гарантирует, что тело цикла выполнится хотя бы один раз.
 do {
    <тело цикла>
} while (условие);
`,
  },
  {
    question: `Что выведет консоль? Какое значение выводится(старое или новое)?
<br>let a = 1; console.log(a++); console.log(a--);
<br>let b = 1; console.log(++b); console.log(--b);
<br>let c = 1; console.log(1+c); console.log(1-c);`,
    answer: `1 "старое"
2 "старое"
2 "новое"
1 "новое"
2 "новое"
0 "новое"
`
  },
  {
    question: `Что делает return?
<br>Что вернет функция, если результат отсутствует?
<br>Исполняется ли код после return?`,
    answer: `return завершает выполнение текущей функции и возвращает её значение
undefined
нет`
  },
  {
    question: "Пары «ключ — значение» делятся на два типа. Какие и что они значат?",
    answer: `Свойства и методы.
Если значение представляет собой функцию, такую пару называют методом.
Если значение — строка, число, булево значение, массив или объект, такую пару называют свойством`,
  },
  {
    question: "Получить доступ к свойству двумя способами let myObject = { stringKey: 'значение' };",
    answer: `myObject.stringKey
myObject['stringKey']
`
  },
  {
    question: "Проверить, является ли 'a' числом",
    answer: `let a = 1;
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
`,
  },
  {
    question: `Что выведет консоль?
        <br>console.log(typeof undefined);
        <br>console.log(typeof 0);
        <br>console.log(typeof NaN);
        <br>console.log(typeof -Infinity);
        <br>console.log(typeof 10n);
        <br>console.log(typeof true) ;
        <br>console.log(typeof "foo");
        <br>console.log(typeof Symbol("id"));
        <br>console.log(typeof Math);
        <br>console.log(typeof null);
        <br>console.log(typeof alert);
        <br>console.log(typeof function () {});`,
    answer: `typeof undefined    // "undefined"
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
`,
  },
  {
    question: "Сколько типов данных в JS? Перечислить и описать",
    answer: `number для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(2^53-1).
bigint для целых чисел произвольной длины.
string для строк.
boolean для true/false.
null для неизвестных значений. || Значения нет.
undefined для неприсвоенных значений. || Значение не определено.
symbol для уникальных идентификаторов.
object для более сложных структур данных.
`,
  },
  {
    question: "Какие данные среди примитивных являются ложными?",
    answer: `их 6:
null
undefined
false
0
Пустая строка -> ""
NaN
`,
  },
  {
    question: `Вывести по первым буквам АННА
<br>const acrostic = [
<br>'Ангел лёг у края небосклона.',
<br>'Наклонившись, удивлялся безднам.',
<br>'Новый мир был синим и беззвездным.',
<br>'Ад молчал, не слышалось ни стона.'
<br>];`,
    answer: `const acrostic = [
  'Ангел лёг у края небосклона.',
  'Наклонившись, удивлялся безднам.',
  'Новый мир был синим и беззвездным.',
  'Ад молчал, не слышалось ни стона.'
];

let ANNA = '';

for (let i = 0; i < acrostic.length; i += 1) {
  ANNA += acrostic[i][0];
}
console.log(ANNA);
`,
  },
  {
    question: "Написать код, чтобы в консоль вывела undefined и null",
    answer: `let elem;
console.log(elem);

const element = document.querySelector('.class');
console.log(element);
`,
  },
  {
    question: "Написать функцию, которая проверяет содержится ли в вводе число ",
    answer: `const a = +prompt("Enter a number", '')
alert(Number.isFinite(a))`,
  },
  {
    question: "Написать функцию, которая проверяет ввод на NaN. Почему нельзя проверить напрямую?",
    answer: `console.log(Number.isNaN(NaN))
Потому что console.log(NaN === NaN); // false`,
  },
  {
    question: "Получить из числа NaN и Infinity",
    answer: `const initialNumber = 451;
console.log(initialNumber * 'хочу стать не-числом'); // NaN
console.log(initialNumber / 0); // Infinity`,
  },
  {
    question: `Главное преимущество методов querySelector и querySelectorAll перед 
<br>getElementById (получить элемент по идентификатору);
<br>getElementsByClassName (получить элементы по имени класса);
<br>getElementsByTagName (получить элементы по имени тега)`,
    answer: "Поддержка составных селекторов",
  },
  {
    question: `С атрибутом HTML-элемента можно выполнить одно из четырёх действий:
<br>1. проверить наличие;
<br>2. получить значение;
<br>3. изменить или установить значение;
<br>4. удалить атрибут.
<br>Привести примеры с соответствующими методами`,
    answer: `elem.hasAttribute(name) – проверяет наличие атрибута
elem.getAttribute(name) – получает значение атрибута
elem.setAttribute(name, value) – устанавливает атрибут
elem.removeAttribute(name) – удаляет атрибут`,
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
]
