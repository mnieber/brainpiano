import { computed } from 'mobx';
import { GroupT, GroupByIdT } from 'src/groups/types';
import { listToItemById } from 'src/utils/ids';
import { output } from 'skandha';

export class Outputs {
  @output groupsDisplay: Array<GroupT> = [];

  @computed get groupById(): GroupByIdT {
    return listToItemById(this.groupsDisplay);
  }
}
