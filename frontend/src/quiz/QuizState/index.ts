import { setCallbacks } from 'aspiration';
import { action, observable, makeObservable } from 'mobx';
import {
  addCleanUpFunctionToCtr,
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
import * as Policies from 'src/quiz/QuizState/policies';
import * as FacetPolicies from 'skandha-facets/policies';
import {
  Selection,
  SelectionCbs,
  handleSelectItem,
} from 'skandha-facets/Selection';
import { Highlight, HighlightCbs } from 'skandha-facets/Highlight';
import { createQuery } from 'src/quiz/utils/createQuery';
import { PreselectionStore } from 'src/keyboard/PreselectionStore';

import { QueryT } from 'src/quiz/types';
import { GroupsStore } from 'src/groups/GroupsStore';
import { VoicingStore } from 'src/voicings/VoicingStore';
import { ClefStore } from 'src/keyboard/ClefStore';
import { Inputs } from 'src/quiz/QuizState/facets/Inputs';
import { Outputs } from 'src/quiz/QuizState/facets/Outputs';

type PropsT = {
  clefStore: ClefStore;
  groupsStore: GroupsStore;
  voicingStore: VoicingStore;
  preselectionStore: PreselectionStore;
};

export class QuizState {
  props: PropsT;
  @observable query?: QueryT;
  @observable nextQuery?: QueryT;

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
    makeObservable(this);

    registerFacets(this.clefs, { name: 'Clefs' });
    this._setClefsCallbacks(props);
    this._applyClefsPolicies(props);
    makeCtrObservable(this.clefs);

    registerFacets(this.groups, { name: 'Groups' });
    this._setGroupsCallbacks(props);
    this._applyGroupsPolicies(props);
    makeCtrObservable(this.groups);

    const cuf = Policies.selectClefBasedOnPreselection()(this);
    addCleanUpFunctionToCtr(this.clefs, cuf);
  }

  @action pickRandomChord() {
    this.query =
      this.nextQuery ??
      createQuery(this.clefs.selection.ids, this.groups.selection.items ?? []);

    this.nextQuery = createQuery(
      this.clefs.selection.ids,
      this.groups.selection.items ?? []
    );

    if (this.query) {
      this.props.clefStore.setClef(this.query.clef);
      this.props.voicingStore.setVoicing(this.query.voicing);
      this.props.voicingStore.setInversion(this.query.inversion);
    }
  }
}
