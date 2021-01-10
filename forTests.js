'use strict'

const button = document.querySelector("button");

console.log(button.getAttribute('name'));
button.setAttribute('name', 'qwe');
console.log(button.hasAttribute('name'));
button.removeAttribute('name');
console.log(button.hasAttribute('name'));
button.setAttribute('name', 'qwe');

console.log(button.getAttribute('name'));
