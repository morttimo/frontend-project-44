import _ from 'lodash';
import frame from '../index.js';

export default () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const solution = () => {
    const randomNum = _.random(1, 100);
    let trueAnswer = '';
    if (randomNum === 1) {
      trueAnswer = 'no';
    } else if (randomNum === 2) {
      trueAnswer = 'yes';
    }
    for (let i = 2; i < randomNum; i += 1) {
      if (randomNum % i === 0) {
        trueAnswer = 'no';
        break;
      } else {
        trueAnswer = 'yes';
      }
    }
    return [randomNum, trueAnswer];
  };
  frame(task, solution);
};
