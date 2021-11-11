import { length } from 'ramda';

export const randomElement = (items: Array<any>) =>
  items[Math.floor(Math.random() * length(items))];
