export const dataDOM = [
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

list.append(listItem); 

Методы append, prepend, before, after и replaceWith принимают на вход любое количество аргументов. Это значит, что при передаче аргументов можно пользоваться «раскладыванием» массива аргументов:

const list = document.querySelector('.todo-list');
const tasks = ['1', '2', '3'];

const taskElements = tasks.map(task => {
  const listItem = document.createElement('li');
  listItem.textContent = task;
  return listItem;
});

list.append(...taskElements);


аналог через цикл:

tasks.forEach((item) => {
  const arrForItem = document.createElement("li");
  arrForItem.textContent = item;

  list.append(arrForItem);
})
`,
  },
  {
    question: `Методы remove и closest. Привести примеры использования`,
    answer: `document.querySelector('h1').remove();

document.getElementById('consoleClear').closest('div') - возвращает ближайший родительский элемент с переданным селектором (div)`,
  },
  {
    question: `Как выбрать ребенка и родителя DOM-элемента?`,
    answer: `document.querySelector('ul').children - в свойстве children хранится псевдомассив дочерних элементов
document.querySelector('body').children[0] - выбрать первый элемент массива

parentElement – родитель-элемент (работает аналогично)

Есть и другие ссылки:
- первый и последний дочерний элемент (+2)
- предыдущий и следующий соседи (+2)

Все эти свойства доступны только для чтения. Перезаписать их не получится

const body = document.querySelector('body');

console.log(body.children); // HTMLCollection(3) [p, p, p]
body.children = [];
console.log(body.children); // HTMLCollection(3) [p, p, p]`,
  },
  {
    question: `Как переместить DOM-элемент?`,
    answer: `элемент удалится с прошлого места и встанет на новое
    
const list = document.querySelector('.todo-list');
const listItems = list.children;

list.append(listItems[0]); // переместили первый элемент todo-листа в конец

справедливо для всех пяти методов добавления: append, prepend, before, after и replaceWith`,
  },
  {
    question: `Как клонировать элемент? 
Скопируются ли обработчики элемента?
Добавится ли элемент в DOM?`,
    answer: `const deepCopy = elem.cloneNode(true); // клонировать элемент вместе со всем его содержимым
const shallowCopy = elem.cloneNode(false); // клонирование без дочерних элементов

Обработчики событий элемента не скопируются. Их придётся добавить заново
Метод cloneNode только копирует элемент, но не добавляет его в DOM. Для этого к копии используют append или др.`,
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
    answer: ``,
  },
  {
    question: ``,
    answer: `&#60;script&#62;&#60;/script&#62`,
  },
]
