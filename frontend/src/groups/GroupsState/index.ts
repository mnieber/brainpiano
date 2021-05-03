import { setCallbacks } from 'aspiration';
import {
  getm,
  cleanUpCtr,
  mapDataToFacet,
  installPolicies,
  registerFacets,
  ClassMemberT as CMT,
} from 'skandha';
import { makeCtrObservable } from 'skandha-mobx';
import { getIds } from 'src/utils/ids';
import * as Facets from 'skandha-facets';
import * as FacetPolicies from 'skandha-facets/policies';
import {
  Selection,
  SelectionCbs,
  handleSelectItem,
} from 'skandha-facets/Selection';
import { Highlight, HighlightCbs } from 'skandha-facets/Highlight';

import { GroupsStore } from 'src/groups/GroupsStore';
import { Inputs } from 'src/groups/GroupsState/facets/Inputs';
import { Outputs } from 'src/groups/GroupsState/facets/Outputs';

type PropsT = {
  groupsStore: GroupsStore;
};

export class GroupsState {
  inputs = new Inputs();
  outputs = new Outputs();
  groups = {
    selection: new Selection(),
    highlight: new Highlight(),
  };

  _setGroupsCallbacks(props: PropsT) {
    const ctr = this.groups;
    setCallbacks(ctr.selection, {
      selectItem: {
        selectItem(this: SelectionCbs['selectItem']) {
          handleSelectItem(ctr.selection, this.selectionParams);
          FacetPolicies.highlightFollowsSelection(
            ctr.selection,
            this.selectionParams
          );
        },
      },
    } as SelectionCbs);
    setCallbacks(ctr.highlight, {} as HighlightCbs);
  }

  _applyGroupsPolicies(props: PropsT) {
    const Inputs_items = [Inputs, 'groups', this] as CMT;
    const Outputs_display = [Outputs, 'groupsDisplay', this] as CMT;
    const Outputs_itemById = [Outputs, 'groupById', this] as CMT;

    const policies = [
      mapDataToFacet(Outputs_display, getm(Inputs_items)),
      // selection
      Facets.selectionUsesSelectableIds(getm(Outputs_display), getIds),
      Facets.selectionUsesItemLookUpTable(getm(Outputs_itemById)),
      // highlight
      Facets.highlightUsesItemLookUpTable(getm(Outputs_itemById)),
    ];

    installPolicies(policies, this.groups);
  }

  destroy() {
    cleanUpCtr(this.groups);
  }

  constructor(props: PropsT) {
    registerFacets(this.groups, { name: 'Groups' });
    this._setGroupsCallbacks(props);
    this._applyGroupsPolicies(props);
    makeCtrObservable(this.groups);
  }
}
