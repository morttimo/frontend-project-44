import _ from 'lodash';
import frame from '../index.js';

export default () => {
  const task = 'What number is missing in the progression?';
  const length = _.random(5, 10);
  const solution = () => {
    const start = _.random(1, 15);
    const step = _.random(1, 6);
    const point = _.random(0, length - 1);
    const list = [start];
    for (let i = 0; i < length - 1; i += 1) {
      list.push(list[i] + step);
    }
    const trueAnswer = list[point];
    list[point] = '..';
    const question = list.join(' ');
    return [question, String(trueAnswer)];
  };
  frame(task, solution);
};
