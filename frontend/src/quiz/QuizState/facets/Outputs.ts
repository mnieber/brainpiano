import { computed } from 'mobx';
import { output } from 'skandha';
import { GroupByIdT, GroupT } from 'src/groups/types';
import { ClefT } from 'src/keyboard/types';
import { listToItemById } from 'src/utils/ids';

export class Outputs {
  static className = () => 'Outputs';

  @output clefsDisplay: Array<ClefT> = [];
  @output groupsDisplay: Array<GroupT> = [];

  @computed get groupById(): GroupByIdT {
    return listToItemById(this.groupsDisplay);
  }
}
