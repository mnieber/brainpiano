import { size } from 'lodash/fp';

export const randomElement = (items: Array<any>) =>
  items[Math.floor(Math.random() * size(items))];
