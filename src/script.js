'use strict'

import './style.css';
import './forTests.js';
import { data } from './data.js';

const step = 5;

const navigationTemplate = document.querySelector('#navigation-template').content;
const navigationList = document.querySelector('ul');

const questionTemplate = document.querySelector('#question-template').content;
const questionList = document.querySelector('ol');
const fontSize = document.querySelector('.fontSize');

const getQuestionItem = (questionElement) => questionElement.querySelector('.question-item');
const getButtonForAnswer = (questionElement) => questionElement.querySelector('.button-answer');
const getQuestion = (questionElement) => questionElement.querySelector('.question');
const getAnswer = (questionElement) => questionElement.querySelector('.answer');
const getPre = (questionElement) => questionElement.querySelector('pre');

const getNavigationElement = (navigationElement) => navigationElement.querySelector('a');


function addQuestions() {
  for (let i = 0; i < data.length; ++i) {
    const questionElement = questionTemplate.cloneNode(true);

    getQuestion(questionElement).innerHTML = data[i].question;
    getAnswer(questionElement).innerHTML = data[i].answer;

    getQuestionItem(questionElement).id = `question-${i + 1}`;
    getButtonForAnswer(questionElement).id = `button-${i + 1}`;
    getButtonForAnswer(questionElement).addEventListener('click', openAnswer);

    getPre(questionElement).style.fontSize = '16px';

    function editFontSize() {      // вооот здесь проблема, не работает оно как я хочу
      // getPre(questionElement).style.fontSize = `${fontSize.value}px`
      console.log(`${fontSize.value}px`);
    }

    fontSize.addEventListener('input', editFontSize);

    questionList.append(questionElement);
  }
}

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

document.getElementById('consoleClear').addEventListener('click', console.clear);
