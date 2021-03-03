export const dataArrays = [
  {
    question: `Что такое массив?`,
    answer: `Особая структура данных для хранения упорядоченных коллекций`,
  },
  {
    question: `Два варианта синтаксиса для создания пустого массива`,
    answer: `let arr = new Array();
let arr = [];`,
  },
  {
    question: `Что такое length?`,
    answer: `Наибольший цифровой индекс плюс один
let fruits = [];
fruits[123] = "Яблоко";

alert( fruits.length ); // 124`,
  },
  {
    question: `Что будет, если уменьшить length?`,
    answer: `Массив станет короче. Этот процесс необратим
let arr = [1, 2, 3, 4, 5];

arr.length = 2; // укорачиваем до двух элементов
alert( arr ); // [1, 2]`,
  },
  {
    question: `Что будет, если new Array вызывается с одним аргументом, который представляет собой число?`,
    answer: `Вызов new Array(number) создаёт массив с заданной длиной, но без элементов.
    
let arr = new Array(2); // создастся ли массив [2]?
alert( arr[0] ); // undefined! нет элементов.
alert( arr.length ); // length 2`,
  },
  {
    question: `Проверить, является ли объект массивом`,
    answer: `Array.isArray({}) // false
Array.isArray([]) // true`,
  },
  {
    question: ``,
    answer: ``,
  },
]
