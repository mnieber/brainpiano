import { output } from 'skandha';
import { ClefT } from 'src/keyboard/types';

export class Outputs {
  static className = () => 'Outputs';

  @output clefsDisplay: Array<ClefT> = [];
}
