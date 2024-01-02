import { action, makeObservable, observable } from 'mobx';
import { cleanUpCtr } from 'skandha';

import { createQuery } from '/src/quiz/utils/createQuery';

import { GroupT } from '/src/groups/types';
import { ClefStore } from '/src/keyboard/ClefStore';
import { ClefT } from '/src/keyboard/types';
import { QueryT } from '/src/quiz/types';
import { VoicingStore } from '/src/voicings/VoicingStore';

type PropsT = {
  clefStore: ClefStore;
  voicingStore: VoicingStore;
};

export class QuizState {
  props: PropsT;
  @observable query?: QueryT;
  @observable nextQuery?: QueryT;
  @observable groups: Array<GroupT> = [];
  @observable clefs: ClefT[] = [];

  destroy() {
    cleanUpCtr(this);
  }

  constructor(props: PropsT) {
    this.props = props;
    makeObservable(this);
  }

  @action setClefs(clefs: ClefT[]) {
    this.clefs = clefs;
  }

  @action setGroups(groups: GroupT[]) {
    this.groups = groups;
  }

  @action pickRandomChord() {
    this.query = this.nextQuery ?? createQuery(this.clefs, this.groups ?? []);

    this.nextQuery = createQuery(this.clefs, this.groups ?? []);

    if (this.query) {
      this.props.clefStore.setClef(this.query.clef);
      this.props.voicingStore.setVoicing(this.query.voicing);
      this.props.voicingStore.setInversion(this.query.inversion);
      this.props.voicingStore.setColouredNoteIdx(this.query.colouredNoteIdx);
    }
  }
}
