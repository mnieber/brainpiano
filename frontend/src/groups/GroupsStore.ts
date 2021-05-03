import { GroupByIdT } from 'src/groups/types';
import { observable, makeObservable } from 'mobx';

export class GroupsStore {
  @observable groupById: GroupByIdT = {};

  constructor() {
    makeObservable(this);
  }

  loadGroups() {}
}
