import { input } from 'skandha';
import { GroupT } from 'src/groups/types';
import { ClefT } from 'src/keyboard/types';

export class Inputs {
  static className = () => 'Inputs';

  @input groups: Array<GroupT> = [];
  @input clefs: Array<ClefT> = [];
}
