import { action, makeObservable, observable } from 'mobx';
import * as R from 'ramda';
import { mapDataToProps } from 'skandha';
import { Selection } from 'skandha-facets';
import { makeFacetObservable } from 'skandha-mobx';
import { GroupByIdT, GroupT } from '/src/groups/types';
import { getIds, listToItemById } from '/src/utils/ids';

export class GroupsStore {
  @observable groupById: GroupByIdT = {};
  @observable selection: Selection = new Selection();

  @action setGroups(groups: GroupT[]) {
    this.groupById = listToItemById(groups);
    this.selection.ids = getIds(groups);
  }

  constructor() {
    const lookUpGroup = (id?: string) => {
      return id ? this.groupById[id] : undefined;
    };

    const ctr = {
      selection: this.selection,
    };

    mapDataToProps(ctr, {
      selection: {
        selectableIds: () => R.keys(this.groupById) as string[],
        items: () => this.selection.ids.map(lookUpGroup),
      },
    });

    makeFacetObservable(this.selection);
    makeObservable(this);
  }
}
