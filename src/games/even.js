import _ from 'lodash';
import frame from '../index.js';

export default () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  const solution = () => {
    const randomNum = _.random(1, 30);
    let trueAnswer = '';
    if (randomNum % 2 === 0) {
      trueAnswer = 'yes';
    } else {
      trueAnswer = 'no';
    }
    return [randomNum, trueAnswer];
  };
  frame(task, solution);
};
