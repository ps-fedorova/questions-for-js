!function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=5)}([function(n,e,t){var o=t(1),r=t(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[n.i,r,""]]);var s={insert:"head",singleton:!1};o(r,s);n.exports=r.locals||{}},function(n,e,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},s=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function l(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function a(n,e){for(var t={},o=[],r=0;r<n.length;r++){var s=n[r],a=e.base?s[0]+e.base:s[0],c=t[a]||0,u="".concat(a," ").concat(c);t[a]=c+1;var d=l(u),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(i[d].references++,i[d].updater(p)):i.push({identifier:u,updater:b(p,e),references:1}),o.push(u)}return o}function c(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var i=s(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var u,d=(u=[],function(n,e){return u[n]=e,u.filter(Boolean).join("\n")});function p(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=d(e,r);else{var s=document.createTextNode(r),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(s,i[e]):n.appendChild(s)}}function f(n,e,t){var o=t.css,r=t.media,s=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var m=null,g=0;function b(n,e){var t,o,r;if(e.singleton){var s=g++;t=m||(m=c(e)),o=p.bind(null,t,s,!1),r=p.bind(null,t,s,!0)}else t=c(e),o=f.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var t=a(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=l(t[o]);i[r].references--}for(var s=a(n,e),c=0;c<t.length;c++){var u=l(t[c]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}t=s}}}},function(n,e,t){(e=t(3)(!1)).push([n.i,':root {\r\n  --deg: 5deg;\r\n  --active: #ff9311;\r\n  --main: #ffa538;\r\n  --second: #ffd29c;\r\n  --answer: #fff2e1;\r\n  --black: #000000;\r\n  --grey: #b3b3b3;\r\n  --menu: #ffffff;\r\n  --range: 0%;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n  scroll-padding-top: 68px;\r\n}\r\n\r\n/** {*/\r\n/*  outline: dodgerblue solid 1px;*/\r\n/*}*/\r\n\r\n.body {\r\n  font-family: monospace;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nmain {\r\n  margin: 3vw 7vw 3vw 3vw;\r\n}\r\n\r\n.dashBoard {\r\n  display: grid;\r\n  justify-content: space-between;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 10px;\r\n  position: sticky;\r\n  left: 0;\r\n  top: 0;\r\n  background-color: var(--menu);\r\n  border-bottom: var(--black) solid 1px;\r\n  box-sizing: border-box;\r\n  padding: 12px;\r\n  width: 100vw;\r\n  height: 63px;\r\n}\r\n\r\n.dashBoard__route {\r\n  display: flex;\r\n}\r\n\r\n.dashBoard__item {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.dashBoard__fontSize, #JS {\r\n  width: 120px;\r\n}\r\n\r\n\r\n#consoleClear, #JS_browser {\r\n  width: 120px;\r\n  margin-left: 12px;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  margin: 20px;\r\n}\r\n\r\n.fontSize {\r\n  width: 100%;\r\n  margin: 5px 0 0 0;\r\n}\r\n\r\ninput[type="range"] {\r\n  -webkit-appearance: none;\r\n  position: relative;\r\n}\r\n\r\ninput[type="range"]:focus {\r\n  outline: none;\r\n}\r\n\r\ninput[type="range"]::-webkit-slider-runnable-track {\r\n  background: var(--black);\r\n  height: 2px;\r\n}\r\n\r\ninput[type="range"]::-webkit-slider-thumb {\r\n  width: 16px;\r\n  height: 16px;\r\n  border-radius: 50%;\r\n  -webkit-appearance: none;\r\n  background-color: var(--main);\r\n  margin-top: -6px;\r\n  z-index: 99;\r\n  position: relative;\r\n  transition: 0.5s all ease;\r\n}\r\n\r\ninput:before {\r\n  position: absolute;\r\n  content: "";\r\n  width: 50%;\r\n  height: 2px;\r\n  background: var(--grey);\r\n}\r\n\r\npre {\r\n  display: block;\r\n  white-space: pre-wrap;\r\n  word-break: break-word;\r\n  line-height: 20px;\r\n  margin: 8px auto;\r\n  font-size: 14px;\r\n}\r\n\r\n.answer {\r\n  background-color: var(--answer);\r\n  display: none;\r\n}\r\n\r\n.answer_open {\r\n  display: block;\r\n}\r\n\r\n.question-list {\r\n  padding: 0;\r\n  list-style-type: none;\r\n}\r\n\r\n.question-item {\r\n  border-bottom: var(--main) 1px solid;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  position: fixed;\r\n  overflow-y: scroll;\r\n  height: calc(100vh - 80px);\r\n  top: 60px;\r\n  bottom: 20px;\r\n  right: 5px;\r\n}\r\n\r\n.navigation-list {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  gap: 10px;\r\n  padding: 0;\r\n  margin-right: 1vw;\r\n  list-style-type: none;\r\n}\r\n\r\n.navigation-item-link {\r\n  text-decoration: none;\r\n  color: var(--main);\r\n  transition: .5s;\r\n}\r\n\r\n.navigation-item-link:hover {\r\n  opacity: .5;\r\n}\r\n\r\n.navigation-item-link:link {\r\n  color: black;\r\n}\r\n\r\nbutton {\r\n  border: none;\r\n  background-color: var(--second);\r\n  margin-bottom: 0;\r\n  padding: 4px 6px;\r\n  transition: all .5s;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: var(--main);\r\n}\r\n\r\nbutton:active, button:focus {\r\n  outline: var(--active);\r\n  background-color: var(--active);\r\n}\r\n\r\nbutton::-moz-focus-inner {\r\n  border: 0;\r\n}\r\n\r\ninput[type="range"] {\r\n  -webkit-appearance: none;\r\n  position: relative;\r\n}\r\n\r\ninput[type="range"]:focus {\r\n  outline: none;\r\n}\r\n\r\ninput[type="range"]:before {\r\n  position: absolute;\r\n  content: "";\r\n  width: var(--range);\r\n  height: 2px;\r\n  background: var(--grey);\r\n}\r\n\r\ninput[type="range"]::-webkit-slider-runnable-track {\r\n  background: var(--black);\r\n  height: 2px;\r\n}\r\n\r\ninput[type="range"]::-webkit-slider-thumb {\r\n  width: 14px;\r\n  height: 14px;\r\n  border-radius: 100%;\r\n  border: none;\r\n  -webkit-appearance: none;\r\n  background-color: var(--black);\r\n  margin-top: -5px;\r\n  z-index: 99;\r\n  position: relative;\r\n  transition: 0.5s all ease;\r\n}\r\n\r\n#value {\r\n  position: absolute;\r\n  top: 2px;\r\n  left: -20px;\r\n  font-size: 14px;\r\n  color: var(--black);\r\n  transition: 0.5s color ease;\r\n}\r\n\r\n@media (max-width: 540px) {\r\n  .dashBoard__item {\r\n    display: none;\r\n  }\r\n\r\n  .question-item {\r\n    width: 100%;\r\n  }\r\n}\r\n',""]),n.exports=e},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var r=(i=o,l=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(a," */")),s=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[t].concat(s).concat([r]).join("\n")}var i,l,a;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(r[i]=!0)}for(var l=0;l<n.length;l++){var a=[].concat(n[l]);o&&r[a[0]]||(t&&(a[2]?a[2]="".concat(t," and ").concat(a[2]):a[2]=t),e.push(a))}},e}},function(n,e,t){},function(n,e,t){"use strict";t.r(e);t(0),t(4);const o=[{question:"Чем отличается число и строка при выводе в консоль?",answer:"цветом: число - синий, текст - черный"},{question:"Где пишется код JS?",answer:'между тегов &#60;script&#62;&#60;/script&#62;\nперед закрывающим тегом &#60;/body&#62;, но можно и в head с соответствующими атрибутами\n&#60;script src="forTests.js"&#62;&#60;/script&#62; В этом случае между тегами будет игнорироваться встроенный код'},{question:"Перечислить арифметические операторы",answer:"+  -  *  /  **  %  +=  ()\nприсвоение со сложением +=\nlet year = 365;\nyear = year + 1;\nyear += 1;"},{question:"Конструкция else ... if",answer:"function x(a) {\n  if (a &#62; 5) {\n    console.log('a &#62; 5')\n  } else if (a &#62; 10) {\n    console.log('a &#62; 10')\n  } else {\n    console.log('ничего')\n  }\n}\n\nfx(1);\n"},{question:"Конструкция switch ... case (2 варианта)",answer:"Важно: проверка на равенство всегда строгая \n<a href=\"https://learn.javascript.ru/switch\">https://learn.javascript.ru/switch</a>\n\nlet a = 4;\n\nswitch (a) {\n  case 3:\n    alert( 'Маловато' );\n    break;\n  case 4:\n    alert( 'В точку!' );\n    break;\n  case 5:\n  case 6:\n    alert( 'Перебор' );\n    break;\n  default:\n    alert( \"Нет таких значений\" );\n}\n\nconst i9 = +document.querySelector('.i-9').value;\n\nswitch (true) {\n  case (i9 &#62;= 1):\n    out9.textContent = '1';\n    break;\n  case (i9 &#62;= 33):\n    out9.textContent = '2';\n    break;\n\n  default:\n    out9.textContent = '0';\n}"},{question:"Выбрать последний элемент массива let arr = [ 'q', 'w', 'e ', 'r'];",answer:"arr[arr.length - 1]"},{question:"Добавить 't' в конец массива let arr = [ 'q', 'w', 'e ', 'r'];",answer:"arr[arr.length] = t"},{question:"Написать цикл while, который выведет в консоль все чётные цифры от 10 до 20",answer:"let number = 10;\n\nwhile (number &#60;= 20) {\n    console.log(number += 2);\n    number += 2;\n} "},{question:"Написать цикл for, который выведет в консоль все чётные цифры от 10 до 20",answer:"for (let i = 10; i &#60;= 20; i += 2) {\n  console.log(i)\n}"},{question:"Можно ли пропускать часть в for (i = 0; i < 3; i++)?",answer:"мы можем пропустить начало и шаг:\n\nlet i = 0;\n\nfor (; i < 3;) {\n  alert( i++ );\n}\nЭто сделает цикл аналогичным while (i < 3)\n\nА можно и вообще убрать всё, получив бесконечный цикл:\n\nfor (;;) {\n  // будет выполняться вечно\n}\n"},{question:"Расскажите про break и continue",answer:"директива break позволяет выйти из цикла. Пример: \n    \nlet sum = 0;\nwhile (true) {\n  let value = +prompt(\"Введите число\", '');\n  if (!value) break; // (*)\n  sum += value;\n}\nalert( 'Сумма: ' + sum );\nДиректива break в строке (*) полностью прекращает выполнение цикла и передаёт управление на строку за его телом, то есть на alert.\n\nС continue цикл не прерывается, а переходит к следующей итерации (если условие все ещё равно true).\nfor (let i = 0; i < 10; i++) {\n  if (i % 2 == 0) continue;  // если true, пропустить оставшуюся часть тела цикла\n  alert(i); // 1, затем 3, 5, 7, 9\n  \n  Директива continue позволяет избегать вложенности!\n  И нельзя использовать break/continue справа от оператора „?“\n}\n"},{question:"Чем отличается тернарный оператор от конструкции if/else?",answer:"Тернарный оператор возвращает значение, а if/else - нет. \nСмысл оператора ? – вернуть то или иное значение, в зависимости от условия. Когда нужно выполнить разные ветви кода – if."},{question:"Чем отличается цикл do...while от while?",answer:"условие проверяется после каждой итерации, а не до неё\n Это гарантирует, что тело цикла выполнится хотя бы один раз.\n do {\n    &#60;тело цикла&#62;\n} while (условие);\n"},{question:"Что выведет консоль? Какое значение выводится(старое или новое)?\nlet a = 1; console.log(a++); console.log(a--);\nlet b = 1; console.log(++b); console.log(--b);\nlet c = 1; console.log(1+c); console.log(1-c);",answer:'1 "старое"\n2 "старое"\n2 "новое"\n1 "новое"\n2 "новое"\n0 "новое"\n'},{question:"Что делает return?\nЧто вернет функция, если результат отсутствует?\nИсполняется ли код после return?",answer:"return завершает выполнение текущей функции и возвращает её значение\nundefined\nнет"},{question:"Пары «ключ — значение» делятся на два типа. Какие и что они значат?",answer:"Свойства и методы.\nЕсли значение представляет собой функцию, такую пару называют методом.\nЕсли значение — строка, число, булево значение, массив или объект, такую пару называют свойством"},{question:"Получить доступ к свойству двумя способами let myObject = { stringKey: 'значение' };",answer:"myObject.stringKey\nmyObject['stringKey']\n"},{question:"Проверить, является ли 'a' числом",answer:"let a = 1;\nlet b = '1';\n\nfunction foo(a) {\n  if (typeof a === 'number') {\n    console.log('число')\n  } else {\n    console.log('не число')\n  }\n}\n\nfoo(a);\nfoo(b);\n"},{question:'Что выведет консоль?\nconsole.log(typeof undefined);\nconsole.log(typeof 0);\nconsole.log(typeof NaN);\nconsole.log(typeof -Infinity);\nconsole.log(typeof 10n);\nconsole.log(typeof true) ;\nconsole.log(typeof "foo");\nconsole.log(typeof Symbol("id"));\nconsole.log(typeof Math);\nconsole.log(typeof null);\nconsole.log(typeof alert);\nconsole.log(typeof function () {});',answer:'typeof undefined    // "undefined"\ntypeof 0            // "number"\ntypeof NaN          // "number"\ntypeof -Infinity    // "number"\ntypeof 10n          // "bigint"\ntypeof true         // "boolean"\ntypeof "foo"        // "string"\ntypeof Symbol("id") // "symbol"\ntypeof Math         // "object"\ntypeof null         // "object"\ntypeof alert        // "function"\ntypeof alert        // "function"\n'},{question:"Сколько типов данных в JS? Перечислить и описать",answer:"number для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(2^53-1).\nbigint для целых чисел произвольной длины.\nstring для строк.\nboolean для true/false.\nnull для неизвестных значений. || Значения нет.\nundefined для неприсвоенных значений. || Значение не определено.\nsymbol для уникальных идентификаторов.\nobject для более сложных структур данных.\n"},{question:"Какие данные среди примитивных являются ложными?",answer:'их 6:\nnull\nundefined\nfalse\n0\nПустая строка -&#62; ""\nNaN\n'},{question:"Что выведет консоль?\nconsole.log(Boolean({}));\nconsole.log(Boolean([]));",answer:"console.log(Boolean({})); // true\nconsole.log(Boolean([])); // true\n"},{question:"Вывести по первым буквам АННА\nconst acrostic = [\n'Ангел лёг у края небосклона.',\n'Наклонившись, удивлялся безднам.',\n'Новый мир был синим и беззвездным.',\n'Ад молчал, не слышалось ни стона.'\n];",answer:"const acrostic = [\n  'Ангел лёг у края небосклона.',\n  'Наклонившись, удивлялся безднам.',\n  'Новый мир был синим и беззвездным.',\n  'Ад молчал, не слышалось ни стона.'\n];\n\nlet ANNA = '';\n\nfor (let i = 0; i &#60; acrostic.length; i += 1) {\n  ANNA += acrostic[i][0];\n}\nconsole.log(ANNA);\n"},{question:"Написать код, чтобы в консоль вывела undefined и null",answer:"let elem;\nconsole.log(elem);\n\nconst element = document.querySelector('.class');\nconsole.log(element);\n"},{question:"Написать функцию, которая проверяет содержится ли в вводе число ",answer:"const a = +prompt(\"Enter a number\", '')\nalert(Number.isFinite(a))"},{question:"Написать функцию, которая проверяет ввод на NaN. Почему нельзя проверить напрямую?",answer:"console.log(Number.isNaN(NaN))\nПотому что console.log(NaN === NaN); // false"},{question:"Получить из числа NaN и Infinity",answer:"const initialNumber = 451;\nconsole.log(initialNumber * 'хочу стать не-числом'); // NaN\nconsole.log(initialNumber / 0); // Infinity"},{question:"Главное преимущество методов querySelector и querySelectorAll перед \ngetElementById (получить элемент по идентификатору);\ngetElementsByClassName (получить элементы по имени класса);\ngetElementsByTagName (получить элементы по имени тега)",answer:"Поддержка составных селекторов"},{question:"С атрибутом HTML-элемента можно выполнить одно из четырёх действий:\n1. проверить наличие;\n2. получить значение;\n3. изменить или установить значение;\n4. удалить атрибут.\nПривести примеры с соответствующими методами",answer:'elem.hasAttribute("name") – проверяет наличие атрибута\nelem.getAttribute("name") – получает значение атрибута\nelem.setAttribute("name", "value") – устанавливает атрибут\nelem.removeAttribute("name") – удаляет атрибут'},{question:"Согласно спецификации у setAttribute есть два обязательных параметра, но в то же время disabled не предполагает никакого значения. Что делать?",answer:"disabledCheckbox.setAttribute('disabled', 'чтобы метод сработал, второй аргумент необходим, но его значение неважно');"},{question:"Как обратиться к атрибуту без методов? Например, окрасить кнопку в голубой",answer:"document.querySelector('button').style.background = \"lightBlue\";"},{question:"Каким свойством удобно пользоваться для управления классами?",answer:"classList"},{question:"Привести примеры работы методов classList",answer:"1. classList.contains\n2. classList.add\n3. classList.remove\n4. classList.toggle"},{question:'Добавить всем элементам "il" любой класс (2 способами: через for и forEach)',answer:"const li = document.querySelectorAll('li')\n\nli.forEach((el) =&#62; {\n  el.classList.add('a')\n})\n\nfor (let i = 0; i &#60; li.length; i++) {\n  li[i].classList.add('b')\n}"},{question:"Какие свойства используют для управления содержимым элемента?",answer:"1. innerHTML - для управления разметкой,\n2. textContent - для управления текстовым содержимым\n3. innerText - текст + CSS. То есть innerText проигнорирует всё, что скрыто свойством display: none\nсвойство innerText не стандартизировано, лучше его не применять"},{question:"Есть три способа назначения обработчиков событий. Какие?",answer:'Атрибут HTML: onclick="...".\nDOM-свойство: elem.onclick = function.\nСпециальные методы: elem.addEventListener(event, handler[, options]) для добавления, removeEventListener для удаления.\n[, options] - необязательный параметр'},{question:"Чем addEventListener выгодно отличается от elem.onclick = function?",answer:"Метод addEventListener позволяет добавлять несколько обработчиков на одно событие одного элемента"},{question:"Привести пример самых часто используемых DOM-событий",answer:"События мыши:\n\n* click – происходит, когда кликнули на элемент левой кнопкой мыши (на устройствах с сенсорными экранами оно происходит при касании).\n* contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши.\n* mouseover / mouseout – когда мышь наводится на / покидает элемент.\n* mousedown / mouseup – когда нажали / отжали кнопку мыши на элементе.\n* mousemove – при движении мыши.\n\nСобытия на элементах управления:\n\n* submit – пользователь отправил форму &#60;form&#62;.\n* focus – пользователь фокусируется на элементе, например нажимает на &#60;input&#62;.\n\nКлавиатурные события:\n\n* keydown и keyup – когда пользователь нажимает / отпускает клавишу.\n\nСобытия документа:\n\n* DOMContentLoaded – когда HTML загружен и обработан, DOM документа полностью построен и доступен.\n\nCSS events:\n\n* transitionend – когда CSS-анимация завершена."},{question:'Создать самую простую форму в HTML. \nПовесить на событие "submit" обработчик, чтобы по клику на кнопку в консоль выводилось "Форма отправлена" (необходимо отменить стандартное поведение браузера)',answer:"&#60;form class='form'&#62;\n  &#60;label&#62;Форма\n    &#60;input class='form__input' type='text'&#62;\n  &#60;/label&#62;\n  &#60;button class='form__button' type='submit'&#62;Сохранить&#60;/button&#62;\n&#60;/form&#62;\n    \n    \nlet formElement = document.querySelector('form');\n\nformElement.addEventListener('submit', function (evt) {\n  evt.preventDefault()\n  console.log('Форма отправлена');\n});"},{question:"Чем работа через свойства innerHTML и textContent отличается от insertAdjacentHTML и insertAdjacentText",answer:"каждый раз, когда вы переопределяете innerHTML и textContent, всё DOM-дерево, вложенное в элемент, удаляется и пересоздаётся заново\ninsertAdjacentHTML и insertAdjacentText добавляют разметку и текст в документ и не затрагивают существующие элементы"},{question:"Синтаксис insertAdjacentHTML",answer:"elem.insertAdjacentHTML('beforebegin' || 'afterbegin' || 'beforeend' || 'afterend', 'html')"},{question:"Чем value отличается от значения внутри тега?",answer:"То, что указывается внутри тега отображается на UI, а \nто, что указывается в value при отправке формы идет на сервер"},{question:"Чем var отличается от let и const?",answer:"1. для «var» не существует блочной области видимости (var выходит за пределы блоков if, for и подобных.)\n2. «var» обрабатываются в начале запуска функции"},{question:"Методы поиска в строке\nconsole.log('Яндекс.Практикум'.indexOf('Я'));\nconsole.log('эспрессо'.indexOf('к'));\nconsole.log('Ночь, улица, фонарь, аптека'.indexOf('фонарь'));\nconsole.log('Шалаш'.indexOf('ш'));\nconsole.log('Гарри Поттер и узник Азкабана'.includes('Гарри Поттер'));\nconsole.log('Вендетта'.startsWith('В'));\nconsole.log('Это ещё не конец'.endsWith('конец'));",answer:"console.log('Яндекс.Практикум'.indexOf('Я')); // 0\nconsole.log('эспрессо'.indexOf('к')); // -1\nconsole.log('Ночь, улица, фонарь, аптека'.indexOf('фонарь')); // 13\nconsole.log('Шалаш'.indexOf('ш')); // 4\nconsole.log('Гарри Поттер и узник Азкабана'.includes('Гарри Поттер')); // true\nconsole.log('Вендетта'.startsWith('В')); // true\nconsole.log('Это ещё не конец'.endsWith('конец')); // true"},{question:"Перевести строку 'ТтТтТтТтТ' в верхний регистр и в нижний",answer:""},{question:'Написать функцию-палиндром через .split() и через цикл. \nТест: "А роза упала на лапу Азора"',answer:"function palindrome(str) {\n      str = str.toLowerCase().replace(/s/g,'');\n      return str === str.split('').reverse().join('');\n    }\n    \n      function palindrome2(str) {\n        str = str.toLowerCase().replace(/s/g,'');\n        const lastIndex = str.length - 1;\n        for (let i = 0; i &#60; str.length / 2; i++) {\n            if (str[i] !== str[lastIndex - i]) {\n                return false;\n            }\n        }\n        return true;\n    }\n    \n    console.log(palindrome('А роза упала на лапу Азора')); // true\n    console.log(palindrome2('А роза упала на лапу Азора')); // true"},{question:"Что делает метод .split()? Что выведет консоль? \nconsole.log('Вася, Петя, Маша'.split(', ', 2));\n",answer:'Превращает строку в массив. Первый аргумент показывает, где заканчивается один элемент массива и начинается следующий\n["Вася", "Петя"]\n'},{question:"Что делает метод .slice()? Что выведет консоль? \nconsole.log('Не прислоняться'.slice(6, 10));\nconsole.log('Не прислоняться'.slice(6));",answer:"Извлекает часть строки\nслон\nслоняться"},{question:"Вывести в консоль имя с большой буквы\nconst myName = prompt('Как Вас зовут?', '');",answer:"if (myName) {\n      console.log(myName[0].toUpperCase() + myName.slice(1));\n  }"},{question:"Вывести в консоль 7.3 миллиона и микросекунду ",answer:"console.log(7.3e6)\nconsole.log(1e-6)"},{question:"4 функции для работы с округлением",answer:"Math.floor(1.1)\nMath.ceil(1.1)\nMath.round(1.1)\t\nMath.trunc(1.1)"},{question:"Как округлить число до 2 знаков после запятой? (2 способа)\nПривести оба результата к числу и вывести в консоль",answer:"console.log(Math.round(1.23456 * 100) / 100 )\nconsole.log(+1.23456.toFixed(2))"},{question:"Что выведет консоль? console.log(0.1 + 0.2), \nпочему?\nкак бороться?",answer:"0.30000000000000004\nЧисло хранится в памяти в бинарной форме, как последовательность бит – единиц и нулей. Но дроби, такие как 0.1, 0.2, которые выглядят довольно просто в десятичной системе счисления, на самом деле являются бесконечной дробью в двоичной форме.\nОкруглять"},{question:"Какими методами можно откинуть единицу измерения? Например, нужно получить числовое значение для 19.5€ и 100px",answer:"parseInt('100px') и parseFloat('19.5€')"},{question:"console.log(parseInt('100px'))\nconsole.log(parseFloat('12.5em'))\nconsole.log(parseInt('12.3'))\nconsole.log(parseFloat('12.3.4'))  \nconsole.log(parseInt('a123'))",answer:"console.log(parseInt('100px')) // 100\nconsole.log(parseFloat('12.5em')) // 12.5\nconsole.log(parseInt('12.3')) // 12\nconsole.log(parseFloat('12.3.4')) // 12.3\nconsole.log(parseInt('a123')) // NaN"},{question:"Вывести в консоль случайное счисло диапазона [0, 1)",answer:"console.log(Math.random())"},{question:"Написать функцию, которая возвращает случайное целое число в заданном интервале, включительно\nfunction getRandomIntInclusive(min, max) {}\nconsole.log(getRandomIntInclusive(1, 3))",answer:"function getRandomIntInclusive(min, max) {\n      min = Math.ceil(min);\n      max = Math.floor(max);\n      return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются\n    }\n  \nconsole.log(getRandomIntInclusive(1, 3))\n\nМожет показаться заманчивым использовать Math.round() для округления, но это может сделать распределение неравномерным"},{question:"Найти максимальный элемент в массиве через apply и через spread\nconst arr = [10, 45, 50, 344, 30];",answer:"Math.max.apply(null, arr);\nMath.max(...arr);"},{question:"Каким методом можно проверить число на принадлежность к целым числам?",answer:"Number.isInteger(5.6)"},{question:"Неявное преобразование типа — то, которое происходит без прямого указания разработчика. В JavaScript три вида неявного преобразования типов. Перечислить",answer:"1. приведение к строке,\n2. приведение к числу,\n3. приведение к логическому типу"},{question:"Что покажет консоль?\nconsole.log(1 + '');\nconsole.log(undefined + '');\nconsole.log(null >= 1);\nconsole.log('451' < 452);\nconsole.log(67 + +'33');\nconsole.log('3' - 1);\nconsole.log('4' / 4);\nconsole.log('4' + 4);",answer:"console.log(1 + ''); // 1 (строка)\nconsole.log(undefined + ''); // undefined\nconsole.log(null >= 1); // false\nconsole.log('451' < 452); // true\nconsole.log(67 + +'33'); // 100\nconsole.log('3' - 1); // 2\nconsole.log('4' / 4); // 1 \nconsole.log('4' + 4); // 44 (строка)"},{question:"Какими методами можно явно привести приметив к строке, числу и логическому типу?",answer:"String(2);\n Number('2');\n Boolean(2);"},{question:'Что делает оператор "!!" ?',answer:"Переводит значение в логический тип\n\n!!true; // true\n!!'непустая строка'; // true\n!!''; // false\n!!1; // true\n!!0; // false \n\nНапример, вместо\n\nif (x != null)\n    return true;\nelse\n    return false;\nможно воспользоваться изящным\n\nreturn !!x;"},{question:"Что будет, если поставить && между правдивыми условиями?\nconsole.log(2 * 2 === 4 && 5 < 6 && 'Каждый может стать');",answer:"оператор вернёт последнее из них:\nconsole.log(2 * 2 === 4 && 5 < 6 && 'Каждый может стать'); // 'Каждый может стать'"},{question:"Что будет, среди условий есть ложные?\nconsole.log(2 * 2 === 4 && undefined && 'Каждый может стать');    ",answer:"&& вернёт из них первое ложное\nconsole.log(2 * 2 === 4 && undefined && 'Каждый может стать'); // undefined"},{question:'Приоритетность операторов "&&", "||" и "!"',answer:"сначала выполняется логическое НЕ, потом И, а затем — ИЛИ. \n(Операции в скобках выполняются первыми)\n!, &&, ||"},{question:"DOM. Чем отличается console.log(elem) от console.dir(elem)?",answer:"console.log(elem) выводит элемент в виде DOM-дерева.\nconsole.dir(elem) выводит элемент в виде DOM-объекта, что удобно для анализа его свойств."},{question:"Как ведет себя innerHTML, если его вставить в тег &#60;script>?",answer:"Скрипты не выполнятся!\nЕсли innerHTML вставляет в документ тег &#60;script> – он становится частью HTML, но не запускается. Это нужно для безопасности"},{question:'В чем состоит "Неприятный минус innerHTML"?',answer:"Если давать пользователю вводить что-то с помощью innerHTML и insertAdjacentHTML, пользователь может ввести разметку и что-нибудь поломать. Перед вставкой кода на страницу осуществляется только минимальная проверка HTML на наличие тега &#60;script> "},{question:"С помощью каких методов можно создать DOM-элемент с помощью JS? \nПодсказка:  \n1 - принимает на вход имя тега, который нужно создать \n2 - принимает на вход текст узла",answer:"const divElement = document.createElement('div');\nconst textItem = document.createTextNode('Hello, world');"},{question:"Существует 5 методов добавления элементов на страницу. Как они работают?",answer:"1. node.append(...nodes or strings) — добавляет узлы или строки в конец node;\n2. node.prepend(...nodes or strings) — в начало node;\n3. node.before(...nodes or strings) — до node;\n4. node.after(...nodes or strings) — после node;\n5. node.replaceWith(...nodes or strings) — заменяет node заданными узлами или строками.\n\nПример: \nconst list = document.querySelector('.todo-list');\n\nconst listItem = document.createElement('li');\nlistItem.textContent = 'Полить цветы';\n\nlist.append(listItem); \n\nМетоды append, prepend, before, after и replaceWith принимают на вход любое количество аргументов. Это значит, что при передаче аргументов можно пользоваться «раскладыванием» массива аргументов:\n\nconst list = document.querySelector('.todo-list');\nconst tasks = ['1', '2', '3'];\n\nconst taskElements = tasks.map(task => {\n  const listItem = document.createElement('li');\n  listItem.textContent = task;\n  return listItem;\n});\n\nlist.append(...taskElements);\n\n\nаналог через цикл:\n\ntasks.forEach((item) => {\n  const arrForItem = document.createElement(\"li\");\n  arrForItem.textContent = item;\n\n  list.append(arrForItem);\n})\n"},{question:"Методы remove и closest. Привести примеры использования",answer:"document.querySelector('h1').remove();\n\ndocument.getElementById('consoleClear').closest('div') - возвращает ближайший родительский элемент с переданным селектором (div)"},{question:"Как выбрать ребенка и родителя DOM-элемента?",answer:"document.querySelector('ul').children - в свойстве children хранится псевдомассив дочерних элементов\ndocument.querySelector('body').children[0] - выбрать первый элемент массива\n\nparentElement – родитель-элемент (работает аналогично)\n\nЕсть и другие ссылки:\n- первый и последний дочерний элемент (+2)\n- предыдущий и следующий соседи (+2)\n\nВсе эти свойства доступны только для чтения. Перезаписать их не получится\n\nconst body = document.querySelector('body');\n\nconsole.log(body.children); // HTMLCollection(3) [p, p, p]\nbody.children = [];\nconsole.log(body.children); // HTMLCollection(3) [p, p, p]"},{question:"Как переместить DOM-элемент?",answer:"элемент удалится с прошлого места и встанет на новое\n    \nconst list = document.querySelector('.todo-list');\nconst listItems = list.children;\n\nlist.append(listItems[0]); // переместили первый элемент todo-листа в конец\n\nсправедливо для всех пяти методов добавления: append, prepend, before, after и replaceWith"},{question:"Как клонировать элемент? \nСкопируются ли обработчики элемента?\nДобавится ли элемент в DOM?",answer:"const deepCopy = elem.cloneNode(true); // клонировать элемент вместе со всем его содержимым\nconst shallowCopy = elem.cloneNode(false); // клонирование без дочерних элементов\n\nОбработчики событий элемента не скопируются. Их придётся добавить заново\nМетод cloneNode только копирует элемент, но не добавляет его в DOM. Для этого к копии используют append или др."},{question:"",answer:""},{question:"",answer:""},{question:"",answer:""},{question:"",answer:""},{question:"",answer:""},{question:"",answer:""},{question:"",answer:""},{question:"",answer:""},{question:"",answer:""},{question:"",answer:"&#60;script&#62;&#60;/script&#62"}],r=document.querySelector("#navigation-template").content,s=document.querySelector("ul"),i=document.querySelector("#question-template"),l=document.querySelector("ol"),a=document.querySelector(".fontSize"),c=document.getElementById("valueFontSize"),u=n=>n.querySelector(".question-item"),d=n=>n.querySelector(".button-answer"),p=n=>n.querySelector(".question"),f=n=>n.querySelector(".answer"),m=n=>n.querySelector("pre"),g=n=>n.querySelector("a");function b(n){n.target.previousElementSibling.classList.toggle("answer_open")}i.remove(),function(){for(let e=0;e<o.length;++e){const t=document.importNode(i,!0);function n(){p(t).style.fontSize=a.value+"px",f(t).style.fontSize=a.value+"px",d(t).style.fontSize=a.value+"px",p(t).style.lineHeight=1.2*a.value+"px",f(t).style.lineHeight=1.2*a.value+"px"}p(t).innerHTML=e+1+". "+o[e].question,f(t).innerHTML=o[e].answer,u(t).id="question-"+(e+1),d(t).id="button-"+(e+1),d(t).addEventListener("click",b),m(t).style.fontSize="14px",a.addEventListener("input",n),l.append(t)}}(),function(){for(let n=0;n<o.length;n+=5){const e=r.cloneNode(!0);g(e).href="#question-"+n,g(e).textContent=n,s.append(e)}}();const y=n=>{a.style.setProperty("--range",100/19*(n-5)+"%")};var w;w=a.value,c.innerHTML="Размер шрифта "+w,y(w),a.addEventListener("input",()=>{y(a.value),(n=>{c.innerHTML="Размер шрифта "+n})(a.value)}),document.getElementById("consoleClear").addEventListener("click",console.clear)}]);