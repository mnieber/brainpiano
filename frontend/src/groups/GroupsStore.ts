import { action, makeObservable, observable } from 'mobx';
import * as R from 'ramda';
import { mapDataToProp } from 'skandha';
import { Selection } from 'skandha-facets/Selection';
import { makeFacetObservable } from 'skandha-mobx';
import { GroupByIdT, GroupT } from 'src/groups/types';
import { getIds, listToItemById } from 'src/utils/ids';

function mapDatasToProps(...mappings: any[]) {
  for (const mapping of mappings) {
    mapDataToProp(mapping[0][0], mapping[0][1], mapping[1]);
  }
}

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

    mapDatasToProps(
      [[this.selection, 'selectableIds'], () => R.values(this.groupById)],
      [[this.selection, 'items'], () => this.selection.ids.map(lookUpGroup)]
    );

    makeFacetObservable(this.selection);
    makeObservable(this);
  }
}
