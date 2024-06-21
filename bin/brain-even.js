#!/usr/bin/env node
import _ from 'lodash';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
for (let i = 1; i <= 3; i++) {
  const randomNum = _.random(1, 30);
  console.log(`Question: ${randomNum}`);
  const answer = readlineSync.question('Your answer: ');
  if (randomNum % 2 === 0) {
    if (answer === 'yes') {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
      break;
    }
  } else if (randomNum % 2 !== 0) {
    if (answer === 'no') {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}
