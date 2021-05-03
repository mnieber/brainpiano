import { ClefT } from 'src/keyboard/types';
import { GroupT } from 'src/groups/types';
import { input } from 'skandha';

export class Inputs {
  @input groups: Array<GroupT> = [];
  @input clefs: Array<ClefT> = [];
}
