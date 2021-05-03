import { computed } from 'mobx';
import { GroupT, GroupByIdT } from 'src/groups/types';
import { listToItemById } from 'src/utils/ids';
import { output } from 'skandha';
import { ClefT } from 'src/keyboard/types';

export class Outputs {
  @output clefsDisplay: Array<ClefT> = [];
  @output groupsDisplay: Array<GroupT> = [];

  @computed get groupById(): GroupByIdT {
    return listToItemById(this.groupsDisplay);
  }
}
