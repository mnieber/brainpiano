import { setCallbacks } from 'aspiration';
import {
  facet,
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
import { VoicingStore } from 'src/voicings/VoicingStore';
import { ClefStore } from 'src/keyboard/ClefStore';
import { Inputs } from 'src/quiz/QuizState/facets/Inputs';
import { Outputs } from 'src/quiz/QuizState/facets/Outputs';

type PropsT = {
  clefStore: ClefStore;
  groupsStore: GroupsStore;
  voicingStore: VoicingStore;
};

export class QuizState {
  props: PropsT;

  @facet inputs = new Inputs();
  @facet outputs = new Outputs();

  clefs = {
    selection: new Selection(),
    highlight: new Highlight(),
  };
  groups = {
    selection: new Selection(),
    highlight: new Highlight(),
  };

  _setClefsCallbacks(props: PropsT) {
    const ctr = this.clefs;
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

  _applyClefsPolicies(props: PropsT) {
    const Inputs_items = [Inputs, 'clefs', this] as CMT;
    const Outputs_display = [Outputs, 'clefsDisplay', this] as CMT;

    const policies = [
      mapDataToFacet(Outputs_display, getm(Inputs_items)),
      // selection
      Facets.selectionUsesSelectableIds(getm(Outputs_display)),
    ];

    installPolicies(policies, this.clefs);
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
    cleanUpCtr(this.clefs);
    cleanUpCtr(this.groups);
  }

  constructor(props: PropsT) {
    this.props = props;

    registerFacets(this, {});

    registerFacets(this.clefs, { name: 'Clefs' });
    this._setClefsCallbacks(props);
    this._applyClefsPolicies(props);
    makeCtrObservable(this.clefs);

    registerFacets(this.groups, { name: 'Groups' });
    this._setGroupsCallbacks(props);
    this._applyGroupsPolicies(props);
    makeCtrObservable(this.groups);
  }

  pickRandomChord() {
    this.props.clefStore.setRandomClef(this.clefs.selection.ids);
    this.props.voicingStore.setRandomVoicing(
      this.props.clefStore.clef,
      this.groups.selection.items ?? []
    );
  }
}
