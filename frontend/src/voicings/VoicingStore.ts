import { size } from 'lodash/fp';
import { action, computed, makeObservable, observable } from 'mobx';
import { clefOffsets } from 'src/keyboard/keyConstants';
import { voicings } from 'src/voicings/voicingValues';
import { invertChord } from 'src/voicings/utils/invertChord';
import { voicingToChord } from 'src/voicings/utils/voicingToChord';
import { mathMod } from 'src/utils/mathMod';
import { VoicingT } from 'src/voicings/types';

export class VoicingStore {
  clef?: string = undefined;
  inversion: number = 0;
  voicing: VoicingT = voicings['scales']['Chromatic'];

  constructor() {
    makeObservable(this, {
      clef: observable,
      inversion: observable,
      voicing: observable,
      octaveIndex: computed,
      octaveIndexDelta: computed,
      chord: computed,
      nrOfVoices: computed,
      voicingTitle: computed,
      setInversion: action,
      setVoicing: action,
    });
  }

  setInversion = (x: number) => {
    const maxInversion = this.nrOfVoices;
    const minInversion = -1 * this.nrOfVoices;
    this.inversion =
      x <= minInversion ? minInversion : x >= maxInversion ? maxInversion : x;
  };

  setVoicing = (voicing: VoicingT) => {
    this.voicing = voicing;
  };

  get octaveIndex() {
    if (this.clef && clefOffsets[this.clef] >= 8) return 0;
    return 1;
  }

  get octaveIndexDelta() {
    const result =
      this.inversion >= this.nrOfVoices ? 1 : this.inversion < 0 ? -1 : 0;
    return result;
  }

  get nrOfVoices() {
    return size(this.voicing.chord);
  }

  get voicingTitle() {
    return `${this.clef} ${this.voicing.name}`;
  }

  get chord() {
    return this.clef
      ? invertChord(
          voicingToChord(
            this.voicing,
            this.clef,
            this.octaveIndex + this.octaveIndexDelta
          ),
          mathMod(this.inversion, this.nrOfVoices)
        )
      : undefined;
  }
}
