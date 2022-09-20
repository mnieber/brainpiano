import { input } from 'skandha';
import { GroupT } from 'src/groups/types';

export class Inputs {
  @input groups: Array<GroupT> = [];
}
