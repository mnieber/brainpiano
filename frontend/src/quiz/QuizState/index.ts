import { action, makeObservable, observable } from 'mobx';
import {
  addCleanUpFunctionToCtr,
  cleanUpCtr,
} from 'react-default-props-context';
import { mapDataToProp } from 'skandha';

import { Selection } from 'skandha-facets/Selection';
import { registerCtr } from 'skandha-mobx';
import { PreselectionStore } from 'src/keyboard/PreselectionStore';
import { createQuery } from 'src/quiz/utils/createQuery';
import { getIds } from 'src/utils/ids';

import { GroupsStore } from 'src/groups/GroupsStore';
import { GroupT } from 'src/groups/types';
import { ClefT } from 'src/keyboard/types';
import { Inputs } from 'src/quiz/QuizState/facets/Inputs';
import { Outputs } from 'src/quiz/QuizState/facets/Outputs';
import { initGroups } from 'src/quiz/QuizState/initGroups';
import { QueryT } from 'src/quiz/types';
import { VoicingStore } from 'src/voicings/VoicingStore';

function mapDatasToProps(...mappings: any[]) {
  for (const mapping of mappings) {
    mapDataToProp(mapping[0][0], mapping[0][1], mapping[1]);
  }
}

type PropsT = {
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

  groups = {
    selection: new Selection(),
  };

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
      ]
    );
  }

  destroy() {
    cleanUpCtr(this);
  }

  constructor(props: PropsT) {
    this.props = props;

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

    makeObservable(this);
  }

  @action setClef(clef: ClefT) {
    this.data.inputs.clef = clef;
  }

  @action setGroups(groups: GroupT[]) {
    this.data.inputs.groups = groups;
    this.groups.selection.ids = getIds(groups);
  }

  @action pickRandomChord() {
    this.query =
      this.nextQuery ??
      createQuery(this.data.inputs.clef, this.groups.selection.items ?? []);

    this.nextQuery = createQuery(
      this.data.inputs.clef,
      this.groups.selection.items ?? []
    );

    if (this.query) {
      this.props.voicingStore.setVoicing(this.query.voicing);
      this.props.voicingStore.setInversion(this.query.inversion);
      this.props.voicingStore.setColouredNoteIdx(this.query.colouredNoteIdx);
    }
  }
}
