import _ from 'lodash';
import frame from '../index.js';

export default () => {
  const task = 'What is the result of the expression?';
  const solution = () => {
    const randomNum1 = _.random(1, 30);
    const randomNum2 = _.random(1, 30);
    const randomSign = _.sample(['*', '+', '-']);
    const question = `${randomNum1} ${randomSign} ${randomNum2}`;
    let trueAnswer = 0;
    switch (randomSign) {
      case '*':
        trueAnswer = randomNum1 * randomNum2;
        break;
      case '+':
        trueAnswer = randomNum1 + randomNum2;
        break;
      case '-':
        trueAnswer = randomNum1 - randomNum2;
        break;
      default: break;
    }
    return [question, String(trueAnswer)];
  };
  frame(task, solution);
};
