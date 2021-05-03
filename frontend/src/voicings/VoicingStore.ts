import { clamp, size } from 'lodash/fp';
import { action, computed, makeObservable, observable } from 'mobx';
import { voicingGroupById } from 'src/voicings/voicingValues';
import { invertChord } from 'src/voicings/utils/invertChord';
import { voicingToChord } from 'src/voicings/utils/voicingToChord';
import { VoicingT } from 'src/voicings/types';
import { getInversionRange } from 'src/voicings/utils/invertChord';
import { listToItemById } from 'src/utils/ids';

export class VoicingStore {
  clef: string = 'C';
  inversion: number = 0;
  voicing: VoicingT = listToItemById(voicingGroupById['scales'].voicings)[
    'Chromatic'
  ];

  constructor() {
    makeObservable(this, {
      clef: observable,
      inversion: observable,
      voicing: observable,
      chord: computed,
      nrOfVoices: computed,
      voicingTitle: computed,
      inversionRange: computed,
      setInversion: action,
      setVoicing: action,
    });
  }

  setInversion = (x: number) => {
    this.inversion = clamp(
      this.inversionRange[0],
      this.inversionRange[1]
    )(x) as any;
  };

  setVoicing = (voicing: VoicingT) => {
    this.voicing = voicing;
  };

  get inversionRange() {
    return getInversionRange(voicingToChord(this.voicing, this.clef, 1));
  }

  get nrOfVoices() {
    return size(this.voicing.chord);
  }

  get voicingTitle() {
    return `${this.clef} ${this.voicing.name}`;
  }

  get chord() {
    return this.clef
      ? invertChord(voicingToChord(this.voicing, this.clef, 1), this.inversion)
      : undefined;
  }
}
