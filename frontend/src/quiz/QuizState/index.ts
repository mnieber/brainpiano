import { action, makeObservable, observable } from 'mobx';
import { cleanUpCtr } from 'react-default-props-context';

import { Selection } from 'skandha-facets/Selection';
import { registerCtr } from 'skandha-mobx';
import { PreselectionStore } from 'src/keyboard/PreselectionStore';
import { createQuery } from 'src/quiz/utils/createQuery';

import { GroupsStore } from 'src/groups/GroupsStore';
import { GroupT } from 'src/groups/types';
import { ClefT } from 'src/keyboard/types';
import { Inputs } from 'src/quiz/QuizState/facets/Inputs';
import { Outputs } from 'src/quiz/QuizState/facets/Outputs';
import { QueryT } from 'src/quiz/types';
import { VoicingStore } from 'src/voicings/VoicingStore';

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

  destroy() {
    cleanUpCtr(this);
  }

  constructor(props: PropsT) {
    this.props = props;

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
  }

  @action pickRandomChord() {
    this.query =
      this.nextQuery ??
      createQuery(this.data.inputs.clef, this.data.inputs.groups ?? []);

    this.nextQuery = createQuery(
      this.data.inputs.clef,
      this.data.inputs.groups ?? []
    );

    if (this.query) {
      this.props.voicingStore.setVoicing(this.query.voicing);
      this.props.voicingStore.setInversion(this.query.inversion);
      this.props.voicingStore.setColouredNoteIdx(this.query.colouredNoteIdx);
    }
  }
}
