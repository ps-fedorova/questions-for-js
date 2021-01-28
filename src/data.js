export const data = [
  {
    question: "Чем отличается число и строка при выводе в консоль?",
    answer: "цветом: число - синий, текст - черный",
  },
  {
    question: "Где пишется код JS?",
    answer: `между тегов &#60;script&#62;&#60;/script&#62;
перед закрывающим тегом &#60;/body&#62;, но можно и в head с соответствующими атрибутами
&#60;script src="forTests.js"&#62;&#60;/script&#62; В этом случае между тегами будет игнорироваться встроенный код`,
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
  if (a &#62; 5) {
    console.log('a &#62; 5')
  } else if (a &#62; 10) {
    console.log('a &#62; 10')
  } else {
    console.log('ничего')
  }
}

fx(1);
`,
  },
  {
    question: "Конструкция switch ... case (2 варианта)",
    answer: `Важно: проверка на равенство всегда строгая 
<a href="https://learn.javascript.ru/switch">https://learn.javascript.ru/switch</a>

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
  case (i9 &#62;= 1):
    out9.textContent = '1';
    break;
  case (i9 &#62;= 33):
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

while (number &#60;= 20) {
    console.log(number += 2);
    number += 2;
} `,
  },
  {
    question: "Написать цикл for, который выведет в консоль все чётные цифры от 10 до 20",
    answer: `for (let i = 10; i &#60;= 20; i += 2) {
  console.log(i)
}`,
  },
  {
    question: `Можно ли пропускать часть в for (i = 0; i < 3; i++)?`,
    answer: `мы можем пропустить начало и шаг:

let i = 0;

for (; i < 3;) {
  alert( i++ );
}
Это сделает цикл аналогичным while (i < 3)

А можно и вообще убрать всё, получив бесконечный цикл:

for (;;) {
  // будет выполняться вечно
}
`,
  },
  {
    question: `Расскажите про break и continue`,
    answer: `директива break позволяет выйти из цикла. Пример: 
    
let sum = 0;
while (true) {
  let value = +prompt("Введите число", '');
  if (!value) break; // (*)
  sum += value;
}
alert( 'Сумма: ' + sum );
Директива break в строке (*) полностью прекращает выполнение цикла и передаёт управление на строку за его телом, то есть на alert.

С continue цикл не прерывается, а переходит к следующей итерации (если условие все ещё равно true).
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue;  // если true, пропустить оставшуюся часть тела цикла
  alert(i); // 1, затем 3, 5, 7, 9
  
  Директива continue позволяет избегать вложенности!
  И нельзя использовать break/continue справа от оператора „?“
}
`,
  },
  {
    question: `Чем отличается тернарный оператор от конструкции if/else?`,
    answer: `Тернарный оператор возвращает значение, а if/else - нет. 
Смысл оператора ? – вернуть то или иное значение, в зависимости от условия. Когда нужно выполнить разные ветви кода – if.`,
  },
  {
    question: "Чем отличается цикл do...while от while?",
    answer: `условие проверяется после каждой итерации, а не до неё
 Это гарантирует, что тело цикла выполнится хотя бы один раз.
 do {
    &#60;тело цикла&#62;
} while (условие);
`,
  },
  {
    question: `Что выведет консоль? Какое значение выводится(старое или новое)?
let a = 1; console.log(a++); console.log(a--);
let b = 1; console.log(++b); console.log(--b);
let c = 1; console.log(1+c); console.log(1-c);`,
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
Что вернет функция, если результат отсутствует?
Исполняется ли код после return?`,
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
console.log(typeof undefined);
console.log(typeof 0);
console.log(typeof NaN);
console.log(typeof -Infinity);
console.log(typeof 10n);
console.log(typeof true) ;
console.log(typeof "foo");
console.log(typeof Symbol("id"));
console.log(typeof Math);
console.log(typeof null);
console.log(typeof alert);
console.log(typeof function () {});`,
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
Пустая строка -&#62; ""
NaN
`,
  },
  {
    question: `Что выведет консоль?
console.log(Boolean({}));
console.log(Boolean([]));`,
    answer: `console.log(Boolean({})); // true
console.log(Boolean([])); // true
`,
  },
  {
    question: `Вывести по первым буквам АННА
const acrostic = [
'Ангел лёг у края небосклона.',
'Наклонившись, удивлялся безднам.',
'Новый мир был синим и беззвездным.',
'Ад молчал, не слышалось ни стона.'
];`,
    answer: `const acrostic = [
  'Ангел лёг у края небосклона.',
  'Наклонившись, удивлялся безднам.',
  'Новый мир был синим и беззвездным.',
  'Ад молчал, не слышалось ни стона.'
];

let ANNA = '';

for (let i = 0; i &#60; acrostic.length; i += 1) {
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
getElementById (получить элемент по идентификатору);
getElementsByClassName (получить элементы по имени класса);
getElementsByTagName (получить элементы по имени тега)`,
    answer: "Поддержка составных селекторов",
  },
  {
    question: `С атрибутом HTML-элемента можно выполнить одно из четырёх действий:
1. проверить наличие;
2. получить значение;
3. изменить или установить значение;
4. удалить атрибут.
Привести примеры с соответствующими методами`,
    answer: `elem.hasAttribute("name") – проверяет наличие атрибута
elem.getAttribute("name") – получает значение атрибута
elem.setAttribute("name", "value") – устанавливает атрибут
elem.removeAttribute("name") – удаляет атрибут`,
  },
  {
    question: "Согласно спецификации у setAttribute есть два обязательных параметра, но в то же время disabled не предполагает никакого значения. Что делать?",
    answer: "disabledCheckbox.setAttribute('disabled', 'чтобы метод сработал, второй аргумент необходим, но его значение неважно');",
  },
  {
    question: "Как обратиться к атрибуту без методов? Например, окрасить кнопку в голубой",
    answer: "document.querySelector('button').style.background = \"lightBlue\";",
  },
  {
    question: "Каким свойством удобно пользоваться для управления классами?",
    answer: "classList",
  },
  {
    question: "Привести примеры работы методов classList",
    answer: `1. classList.contains
2. classList.add
3. classList.remove
4. classList.toggle`,
  },
  {
    question: "Добавить всем элементам \"il\" любой класс (2 способами: через for и forEach)",
    answer: `const li = document.querySelectorAll('li')

li.forEach((el) =&#62; {
  el.classList.add('a')
})

for (let i = 0; i &#60; li.length; i++) {
  li[i].classList.add('b')
}`,
  },
  {
    question: "Какие свойства используют для управления содержимым элемента?",
    answer: `1. innerHTML - для управления разметкой,
2. textContent - для управления текстовым содержимым
3. innerText - текст + CSS. То есть innerText проигнорирует всё, что скрыто свойством display: none
свойство innerText не стандартизировано, лучше его не применять`,
  },
  {
    question: "Есть три способа назначения обработчиков событий. Какие?",
    answer: `Атрибут HTML: onclick="...".
DOM-свойство: elem.onclick = function.
Специальные методы: elem.addEventListener(event, handler[, options]) для добавления, removeEventListener для удаления.
[, options] - необязательный параметр`
    ,
  },
  {
    question: "Чем addEventListener выгодно отличается от elem.onclick = function?",
    answer: "Метод addEventListener позволяет добавлять несколько обработчиков на одно событие одного элемента",
  },
  {
    question: "Привести пример самых часто используемых DOM-событий",
    answer: `События мыши:

* click – происходит, когда кликнули на элемент левой кнопкой мыши (на устройствах с сенсорными экранами оно происходит при касании).
* contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши.
* mouseover / mouseout – когда мышь наводится на / покидает элемент.
* mousedown / mouseup – когда нажали / отжали кнопку мыши на элементе.
* mousemove – при движении мыши.

События на элементах управления:

* submit – пользователь отправил форму &#60;form&#62;.
* focus – пользователь фокусируется на элементе, например нажимает на &#60;input&#62;.

Клавиатурные события:

* keydown и keyup – когда пользователь нажимает / отпускает клавишу.

События документа:

* DOMContentLoaded – когда HTML загружен и обработан, DOM документа полностью построен и доступен.

CSS events:

* transitionend – когда CSS-анимация завершена.`,
  },
  {
    question: `Создать самую простую форму в HTML. 
Повесить на событие "submit" обработчик, чтобы по клику на кнопку в консоль выводилось "Форма отправлена" (необходимо отменить стандартное поведение браузера)`,
    answer: `&#60;form class='form'&#62;
  &#60;label&#62;Форма
    &#60;input class='form__input' type='text'&#62;
  &#60;/label&#62;
  &#60;button class='form__button' type='submit'&#62;Сохранить&#60;/button&#62;
&#60;/form&#62;
    
    
let formElement = document.querySelector('form');

formElement.addEventListener('submit', function (evt) {
  evt.preventDefault()
  console.log('Форма отправлена');
});`,
  },
  {
    question: "Чем работа через свойства innerHTML и textContent отличается от insertAdjacentHTML и insertAdjacentText",
    answer: `каждый раз, когда вы переопределяете innerHTML и textContent, всё DOM-дерево, вложенное в элемент, удаляется и пересоздаётся заново
insertAdjacentHTML и insertAdjacentText добавляют разметку и текст в документ и не затрагивают существующие элементы`,
  },
  {
    question: "Синтаксис insertAdjacentHTML",
    answer: "elem.insertAdjacentHTML('beforebegin' || 'afterbegin' || 'beforeend' || 'afterend', 'html')",
  },
  {
    question: "Чем value отличается от значения внутри тега?",
    answer: `То, что указывается внутри тега отображается на UI, а 
то, что указывается в value при отправке формы идет на сервер`,
  },
  {
    question: "Чем var отличается от let и const?",
    answer: `1. для «var» не существует блочной области видимости (var выходит за пределы блоков if, for и подобных.)
2. «var» обрабатываются в начале запуска функции`,
  },
  {
    question: `Методы поиска в строке
console.log('Яндекс.Практикум'.indexOf('Я'));
console.log('эспрессо'.indexOf('к'));
console.log('Ночь, улица, фонарь, аптека'.indexOf('фонарь'));
console.log('Шалаш'.indexOf('ш'));
console.log('Гарри Поттер и узник Азкабана'.includes('Гарри Поттер'));
console.log('Вендетта'.startsWith('В'));
console.log('Это ещё не конец'.endsWith('конец'));`,
    answer: `console.log('Яндекс.Практикум'.indexOf('Я')); // 0
console.log('эспрессо'.indexOf('к')); // -1
console.log('Ночь, улица, фонарь, аптека'.indexOf('фонарь')); // 13
console.log('Шалаш'.indexOf('ш')); // 4
console.log('Гарри Поттер и узник Азкабана'.includes('Гарри Поттер')); // true
console.log('Вендетта'.startsWith('В')); // true
console.log('Это ещё не конец'.endsWith('конец')); // true`,
  },
  {
    question: "Перевести строку 'ТтТтТтТтТ' в верхний регистр и в нижний",
    answer: "",
  },
  {
    question: `Написать функцию-палиндром через .split() и через цикл. 
Тест: "А роза упала на лапу Азора"`,
    answer: `function palindrome(str) {
      str = str.toLowerCase().replace(/\s/g,'');
      return str === str.split('').reverse().join('');
    }
    
      function palindrome2(str) {
        str = str.toLowerCase().replace(/\s/g,'');
        const lastIndex = str.length - 1;
        for (let i = 0; i &#60; str.length / 2; i++) {
            if (str[i] !== str[lastIndex - i]) {
                return false;
            }
        }
        return true;
    }
    
    console.log(palindrome('А роза упала на лапу Азора')); // true
    console.log(palindrome2('А роза упала на лапу Азора')); // true`,
  },
  {
    question: `Что делает метод .split()? Что выведет консоль? 
console.log('Вася, Петя, Маша'.split(', ', 2));
`,
    answer: `Превращает строку в массив. Первый аргумент показывает, где заканчивается один элемент массива и начинается следующий
[\"Вася\", \"Петя\"]
`,
  },
  {
    question: `Что делает метод .slice()? Что выведет консоль? 
console.log('Не прислоняться'.slice(6, 10));
console.log('Не прислоняться'.slice(6));`,
    answer: `Извлекает часть строки
слон
слоняться`,
  },
  {
    question: `Вывести в консоль имя с большой буквы
const myName = prompt('Как Вас зовут?', '');`,
    answer: `if (myName) {
      console.log(myName[0].toUpperCase() + myName.slice(1));
  }`,
  },
  {
    question: "Вывести в консоль 7.3 миллиона и микросекунду ",
    answer: `console.log(7.3e6)
console.log(1e-6)`,
  },
  {
    question: "4 функции для работы с округлением",
    answer: `Math.floor(1.1)
Math.ceil(1.1)
Math.round(1.1)	
Math.trunc(1.1)`,
  },
  {
    question: `Как округлить число до 2 знаков после запятой? (2 способа)
Привести оба результата к числу и вывести в консоль`,
    answer: `console.log(Math.round(1.23456 * 100) / 100 )
console.log(+1.23456.toFixed(2))`,
  },
  {
    question: `Что выведет консоль? console.log(0.1 + 0.2), 
почему?
как бороться?`,
    answer: `0.30000000000000004
Число хранится в памяти в бинарной форме, как последовательность бит – единиц и нулей. Но дроби, такие как 0.1, 0.2, которые выглядят довольно просто в десятичной системе счисления, на самом деле являются бесконечной дробью в двоичной форме.
Округлять`,
  },
  {
    question: "Какими методами можно откинуть единицу измерения? Например, нужно получить числовое значение для 19.5€ и 100px",
    answer: "parseInt('100px') и parseFloat('19.5€')",
  },
  {
    question: `console.log(parseInt('100px'))
console.log(parseFloat('12.5em'))
console.log(parseInt('12.3'))
console.log(parseFloat('12.3.4'))  
console.log(parseInt('a123'))`,
    answer: `console.log(parseInt('100px')) // 100
console.log(parseFloat('12.5em')) // 12.5
console.log(parseInt('12.3')) // 12
console.log(parseFloat('12.3.4')) // 12.3
console.log(parseInt('a123')) // NaN`,
  },
  {
    question: "Вывести в консоль случайное счисло диапазона [0, 1)",
    answer: "console.log(Math.random())",
  },
  {
    question: `Написать функцию, которая возвращает случайное целое число в заданном интервале, включительно
function getRandomIntInclusive(min, max) {}
console.log(getRandomIntInclusive(1, 3))`,
    answer: `function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    }
  
console.log(getRandomIntInclusive(1, 3))

Может показаться заманчивым использовать Math.round() для округления, но это может сделать распределение неравномерным`,
  },
  {
    question: `Найти максимальный элемент в массиве через apply и через spread
const arr = [10, 45, 50, 344, 30];`,
    answer: `Math.max.apply(null, arr);
Math.max(...arr);`,
  },
  {
    question: "Каким методом можно проверить число на принадлежность к целым числам?",
    answer: "Number.isInteger(5.6)",
  },
  {
    question: "Неявное преобразование типа — то, которое происходит без прямого указания разработчика. В JavaScript три вида неявного преобразования типов. Перечислить",
    answer: `1. приведение к строке,
2. приведение к числу,
3. приведение к логическому типу`,
  },
  {
    question: `Что покажет консоль?
console.log(1 + '');
console.log(undefined + '');
console.log(null >= 1);
console.log('451' < 452);
console.log(67 + +'33');
console.log('3' - 1);
console.log('4' / 4);
console.log('4' + 4);`,
    answer: `console.log(1 + ''); // 1 (строка)
console.log(undefined + ''); // undefined
console.log(null >= 1); // false
console.log('451' < 452); // true
console.log(67 + +'33'); // 100
console.log('3' - 1); // 2
console.log('4' / 4); // 1 
console.log('4' + 4); // 44 (строка)`,
  },
  {
    question: `Какими методами можно явно привести приметив к строке, числу и логическому типу?`,
    answer: `String(2);
 Number('2');
 Boolean(2);`,
  },
  {
    question: `Что делает оператор "!!" ?`,
    answer: `Переводит значение в логический тип

!!true; // true
!!'непустая строка'; // true
!!''; // false
!!1; // true
!!0; // false 

Например, вместо

if (x != null)
    return true;
else
    return false;
можно воспользоваться изящным

return !!x;`,
  },
  {
    question: `Что будет, если поставить && между правдивыми условиями?
console.log(2 * 2 === 4 && 5 < 6 && 'Каждый может стать');`,
    answer: `оператор вернёт последнее из них:
console.log(2 * 2 === 4 && 5 < 6 && 'Каждый может стать'); // 'Каждый может стать'`,
  },
  {
    question: `Что будет, среди условий есть ложные?
console.log(2 * 2 === 4 && undefined && 'Каждый может стать');    `,
    answer: `&& вернёт из них первое ложное
console.log(2 * 2 === 4 && undefined && 'Каждый может стать'); // undefined`,
  },
  {
    question: `Приоритетность операторов "&&", "||" и "!"`,
    answer: `сначала выполняется логическое НЕ, потом И, а затем — ИЛИ. 
(Операции в скобках выполняются первыми)
!, &&, ||`,
  },
  {
    question: `DOM. Чем отличается console.log(elem) от console.dir(elem)?`,
    answer: `console.log(elem) выводит элемент в виде DOM-дерева.
console.dir(elem) выводит элемент в виде DOM-объекта, что удобно для анализа его свойств.`,
  },
  {
    question: `Как ведет себя innerHTML, если его вставить в тег &#60;script>?`,
    answer: `Скрипты не выполнятся!
Если innerHTML вставляет в документ тег &#60;script> – он становится частью HTML, но не запускается. Это нужно для безопасности`,
  },
  {
    question: `В чем состоит "Неприятный минус innerHTML"?`,
    answer: `Если давать пользователю вводить что-то с помощью innerHTML и insertAdjacentHTML, пользователь может ввести разметку и что-нибудь поломать. Перед вставкой кода на страницу осуществляется только минимальная проверка HTML на наличие тега &#60;script> `,
  },
  {
    question: `С помощью каких методов можно создать DOM-элемент с помощью JS? 
Подсказка:  
1 - принимает на вход имя тега, который нужно создать 
2 - принимает на вход текст узла`,
    answer: `const divElement = document.createElement('div');
const textItem = document.createTextNode('Hello, world');`,
  },
  {
    question: `Существует 5 методов добавления элементов на страницу. Как они работают?`,
    answer: `1. node.append(...nodes or strings) — добавляет узлы или строки в конец node;
2. node.prepend(...nodes or strings) — в начало node;
3. node.before(...nodes or strings) — до node;
4. node.after(...nodes or strings) — после node;
5. node.replaceWith(...nodes or strings) — заменяет node заданными узлами или строками.

Пример: 
const list = document.querySelector('.todo-list');

const listItem = document.createElement('li');
listItem.textContent = 'Полить цветы';

// добавляем элемент списка в конец списка
list.append(listItem); 

Методы append, prepend, before, after и replaceWith принимают на вход любое количество аргументов. Это значит, что при передаче аргументов можно пользоваться «раскладыванием» массива аргументов, с которым вы познакомились в прошлой теме:
const list = document.querySelector('.todo-list');

// массив дел на сегодня
const tasks = [
  'Сделать проектную работу ',
  'Погулять с собакой',
  'Пройти туториал по Реакту'
];

// создадим из массива дел массив элементов
const taskElements = tasks.map(task => {
  const listItem = document.createElement('li');
  listItem.textContent = task;
  return listItem;
});

// добавим элементы в DOM, «разложив» массив
list.append(...taskElements); 
`,
  },
  {
    question: ``,
    answer: ``,
  },
  {
    question: ``,
    answer: ``,
  },
  {
    question: ``,
    answer: ``,
  },
  {
    question: ``,
    answer: ``,
  },
  {
    question: ``,
    answer: ``,
  },
  {
    question: ``,
    answer: ``,
  },
  {
    question: ``,
    answer: ``,
  },
  {
    question: ``,
    answer: ``,
  },
  {
    question: ``,
    answer: `&#60;script&#62;&#60;/script&#62`,
  },
]
