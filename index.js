'use strict'

import { data } from './data.js';

const questionTemplate = document.querySelector('#question-template').content;
const questionList = document.querySelector('ol');

const navigationTemplate = document.querySelector('#navigation-template').content;
const navigationList = document.querySelector('ul');

function addQuestions() {
  for (let i = 0; i < data.length; ++i) {
    const questionElement = questionTemplate.cloneNode(true);

    questionElement.querySelector('p').innerHTML = data[i].question;
    questionElement.querySelector('li').id = `question-${i + 1}`;
    questionElement.querySelector('button').id = `button-${i + 1}`;

    questionList.append(questionElement);
  }
}

addQuestions();

function addAnswers() {
  for (let i = 0; i < data.length; ++i) {
    const buttonForAnswer = document.getElementById(`button-${i + 1}`)
    buttonForAnswer.onclick = () => console.log(data[i].answer)
  }
}

addAnswers();

function addNavigation() {
  for (let i = 0; i < data.length; ++i) {
    const navigationElement = navigationTemplate.cloneNode(true);
    navigationElement.querySelector('a').href = `#question-${i + 1}`;
    navigationElement.querySelector('a').textContent = `${i + 1}` ;
    navigationList.append(navigationElement);
  }
}

addNavigation();

document.getElementById('consoleClear').onclick = console.clear;
