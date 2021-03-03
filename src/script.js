'use strict'
import './style.css';
import './forTests.js';
import { dataJS } from "./DATA/dataJS.js";
import { dataDOM } from "./DATA/dataDOM.js";
import { dataArrays } from "./DATA/dataArrays.js";

let data

const step = 5;
const minFontValue = 5;
const maxFontValue = 24;
const coefficient = 100 / (maxFontValue - minFontValue);

const navigationTemplate = document.querySelector('#navigation-template').content;
const navigationList = document.querySelector('ul');

const questionTemplate = document.querySelector('#question-template');
const questionList = document.querySelector('ol');
const fontSize = document.querySelector('.fontSize');

const valueFontSize = document.getElementById("valueFontSize");

const JS_Browser = document.getElementById("JS_browser");
const JS = document.getElementById("JS");
const arrays = document.getElementById("Arrays");
const title = document.querySelector(".title");

const getQuestionItem = (questionElement) => questionElement.querySelector('.question-item');
const getButtonForAnswer = (questionElement) => questionElement.querySelector('.button-answer');
const getQuestion = (questionElement) => questionElement.querySelector('.question');
const getAnswer = (questionElement) => questionElement.querySelector('.answer');
const getPre = (questionElement) => questionElement.querySelector('pre');

const getNavigationElement = (navigationElement) => navigationElement.querySelector('a');

if (document.location.hash === "") {
  data = dataJS;
  JS.classList.add("active");
  title.textContent = "JavaScript";
}

if (document.location.hash === "#DOM") {
  data = dataDOM;
  JS_Browser.classList.add("active");
  title.textContent = "Браузер";
}

if (document.location.hash === "#arrays") {
  data = dataArrays;
  arrays.classList.add("active");
  title.textContent = "Массивы";
}

JS.onclick = () => {
  window.location.hash = "#"
  location.reload();
}

JS_Browser.onclick = () => {
  window.location.hash = "#DOM"
  location.reload();
}

arrays.onclick = () => {
  window.location.hash = "arrays"
  location.reload();
}

function addQuestions() {
  for (let i = 0; i < data.length; ++i) {
    const questionElement = document.importNode(questionTemplate, true);

    getQuestion(questionElement).innerHTML = `${i + 1}. ` + data[i].question;
    getAnswer(questionElement).innerHTML = data[i].answer;

    getQuestionItem(questionElement).id = `question-${i + 1}`;
    getButtonForAnswer(questionElement).id = `button-${i + 1}`;
    getButtonForAnswer(questionElement).addEventListener('click', openAnswer);
    getPre(questionElement).style.fontSize = '14px';

    function editFontSize() {
      getQuestion(questionElement).style.fontSize = `${fontSize.value}px`;
      getAnswer(questionElement).style.fontSize = `${fontSize.value}px`;
      getButtonForAnswer(questionElement).style.fontSize = `${fontSize.value}px`;
      getQuestion(questionElement).style.lineHeight = `${fontSize.value * 1.2}px`;
      getAnswer(questionElement).style.lineHeight = `${fontSize.value * 1.2}px`;
    }

    fontSize.addEventListener('input', editFontSize);
    questionList.append(questionElement);
  }
}

questionTemplate.remove(); // удалить первый шаблонный элемент из списка

function openAnswer(evt) {
  evt.target.previousElementSibling.classList.toggle('answer_open');
}

function addNavigation() {
  for (let i = 0; i < data.length; i = i + step) {
    const navigationElement = navigationTemplate.cloneNode(true);
    getNavigationElement(navigationElement).href = `#question-${i}`;
    getNavigationElement(navigationElement).textContent = i;
    navigationList.append(navigationElement);
  }
}

addQuestions();
addNavigation();

// ниже стилизация инпута
const updateValue = (value) => valueFontSize.innerHTML = `Размер шрифта ${value}`;
const updateVar = (value) => {
  fontSize.style.setProperty("--range", (value - minFontValue) * coefficient + "%");
}

const init = (value) => {
  valueFontSize.innerHTML = `Размер шрифта ${value}`;
  updateVar(value);
}

init(fontSize.value);

fontSize.addEventListener("input", () => {
  updateVar(fontSize.value);
  updateValue(fontSize.value);
});
