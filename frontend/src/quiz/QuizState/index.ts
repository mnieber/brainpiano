import { action, makeObservable, observable } from 'mobx';
import {
  addCleanUpFunctionToCtr,
  cleanUpCtr,
} from 'react-default-props-context';
import { mapDataToProp } from 'skandha';

import { Highlight } from 'skandha-facets/Highlight';
import { Selection } from 'skandha-facets/Selection';
import { registerCtr } from 'skandha-mobx';
import { PreselectionStore } from 'src/keyboard/PreselectionStore';
import * as Policies from 'src/quiz/QuizState/policies';
import { createQuery } from 'src/quiz/utils/createQuery';
import { getIds } from 'src/utils/ids';

import { GroupsStore } from 'src/groups/GroupsStore';
import { GroupT } from 'src/groups/types';
import { ClefStore } from 'src/keyboard/ClefStore';
import { ClefT } from 'src/keyboard/types';
import { Inputs } from 'src/quiz/QuizState/facets/Inputs';
import { Outputs } from 'src/quiz/QuizState/facets/Outputs';
import { initClefs } from 'src/quiz/QuizState/initClefs';
import { initGroups } from 'src/quiz/QuizState/initGroups';
import { QueryT } from 'src/quiz/types';
import { VoicingStore } from 'src/voicings/VoicingStore';

function mapDatasToProps(...mappings: any[]) {
  for (const mapping of mappings) {
    mapDataToProp(mapping[0][0], mapping[0][1], mapping[1]);
  }
}

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

  data = {
    inputs: new Inputs(),
    outputs: new Outputs(),
  };

  clefs = {
    selection: new Selection(),
    highlight: new Highlight(),
  };

  groups = {
    selection: new Selection(),
    highlight: new Highlight(),
  };

  _mapDataClefs(props: PropsT) {
    mapDatasToProps(
      [this.data.outputs, 'clefsDisplay', () => this.data.inputs.clefs],
      [
        this.clefs.selection,
        'selectableIds',
        () => this.data.outputs.clefsDisplay,
      ]
    );
  }

  _mapDataGroups(props: PropsT) {
    const lookUpGroup = (id?: string) => {
      return id ? this.data.outputs.groupById[id] : undefined;
    };

    mapDatasToProps(
      [
        //
        [this.data.outputs, 'groupsDisplay'],
        () => this.data.inputs.groups,
      ],
      [
        [this.groups.selection, 'selectableIds'],
        () => getIds(this.data.outputs.groupsDisplay),
      ],
      [
        [this.groups.selection, 'items'],
        () => this.groups.selection.ids.map(lookUpGroup),
      ],
      [
        [this.groups.highlight, 'item'],
        () => lookUpGroup(this.groups.highlight.id),
      ]
    );
  }

  destroy() {
    cleanUpCtr(this);
  }

  constructor(props: PropsT) {
    this.props = props;

    registerCtr({
      ctr: this.clefs,
      options: { name: 'Clefs' },
      initCtr: () => {
        initClefs(this.clefs);
        this._mapDataClefs(props);
        addCleanUpFunctionToCtr(this, () => cleanUpCtr(this.clefs));
      },
    });

    registerCtr({
      ctr: this.groups,
      options: { name: 'Groups' },
      initCtr: () => {
        initGroups(this.groups);
        this._mapDataGroups(props);
        addCleanUpFunctionToCtr(this, () => cleanUpCtr(this.groups));
      },
    });

    registerCtr({
      ctr: this.data,
      options: { name: 'Data' },
    });

    const cuf = Policies.selectClefBasedOnPreselection()(this);
    addCleanUpFunctionToCtr(this.clefs, cuf);

    makeObservable(this);
  }

  @action setClefs(clefs: ClefT[]) {
    this.data.inputs.clefs = clefs;
    this.clefs.selection.ids = clefs;
  }

  @action setGroups(groups: GroupT[]) {
    this.data.inputs.groups = groups;
    this.groups.selection.ids = getIds(groups);
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
      this.props.voicingStore.setColouredNoteIdx(this.query.colouredNoteIdx);
    }
  }
}
