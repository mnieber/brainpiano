import { action, makeObservable, observable } from 'mobx';
import { cleanUpCtr } from 'react-default-props-context';

import { registerCtr } from 'skandha-mobx';
import { createQuery } from 'src/quiz/utils/createQuery';

import { GroupT } from 'src/groups/types';
import { ClefStore } from 'src/keyboard/ClefStore';
import { ClefT } from 'src/keyboard/types';
import { Inputs } from 'src/quiz/QuizState/facets/Inputs';
import { Outputs } from 'src/quiz/QuizState/facets/Outputs';
import { QueryT } from 'src/quiz/types';
import { VoicingStore } from 'src/voicings/VoicingStore';

type PropsT = {
  clefStore: ClefStore;
  voicingStore: VoicingStore;
};

export class QuizState {
  props: PropsT;
  @observable query?: QueryT;
  @observable nextQuery?: QueryT;

  data = {
    inputs: new Inputs(),
    outputs: new Outputs(),
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

  @action setClefs(clefs: ClefT[]) {
    this.data.inputs.clefs = clefs;
  }

  @action setGroups(groups: GroupT[]) {
    this.data.inputs.groups = groups;
  }

  @action pickRandomChord() {
    this.query =
      this.nextQuery ??
      createQuery(this.data.inputs.clefs, this.data.inputs.groups ?? []);

    this.nextQuery = createQuery(
      this.data.inputs.clefs,
      this.data.inputs.groups ?? []
    );

    if (this.query) {
      this.props.clefStore.setClef(this.query.clef);
      this.props.voicingStore.setVoicing(this.query.voicing);
      this.props.voicingStore.setInversion(this.query.inversion);
      this.props.voicingStore.setColouredNoteIdx(this.query.colouredNoteIdx);
    }
  }
}
