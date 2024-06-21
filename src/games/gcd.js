import _ from 'lodash';
import frame from '../index.js';

export default () => {
  const task = 'Find the greatest common divisor of given numbers.';
  const solution = () => {
    const randomNum1 = _.random(1, 100);
    const randomNum2 = _.random(1, 100);
    const question = `${randomNum1} ${randomNum2}`;
    const arrNum1 = [];
    for (let i = 1; i <= randomNum1; i += 1) {
      if (randomNum1 % i === 0) {
        arrNum1.push(i);
      }
    }
    const arrNum2 = [];
    for (let i = 1; i <= randomNum2; i += 1) {
      if (randomNum2 % i === 0) {
        arrNum2.push(i);
      }
    }
    let trueAnswer = _.intersection(arrNum1, arrNum2);
    trueAnswer = Math.max(...trueAnswer);
    return [question, String(trueAnswer)];
  };
  frame(task, solution);
};
