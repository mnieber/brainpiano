import { action, observable, makeObservable } from 'mobx';
import { forEach } from 'lodash/fp';

import { VoicingT, VoicingByIdT } from 'src/voicings/types';

export class VoicingsStore {
  @observable voicingById: VoicingByIdT = {};

  constructor() {
    makeObservable(this);
  }

  @action loadVoicings = () => {};

  @action addVoicings = (voicings: VoicingT[]) => {
    forEach((voicing: VoicingT) => {
      this.voicingById[voicing.id] = voicing;
    }, voicings);
  };
}
