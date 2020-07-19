import { length, mathMod } from 'rambda';
import { action, computed, decorate, observable } from 'mobx';

import { keySignatureOffsets } from 'src/keyboard/key_signature_constants';
import { voicings } from 'src/keyboard/voicing_constants';
import { invertVoicing } from 'src/utils/invertVoicing';
import { voicingToChord } from 'src/utils/voicingToChord';

export class ChordStore {
  keySignature = undefined;
  inversion = 0;
  voicing = voicings['minor']['Min7'];
  voicingName = 'Min7';

  setInversion = x => {
    const maxInversion = this.nrOfVoices;
    const minInversion = -1 * this.nrOfVoices;
    this.inversion =
      x <= minInversion ? minInversion : x >= maxInversion ? maxInversion : x;
  };

  setVoicing = (voicing, voicingName) => {
    this.voicing = voicing;
    this.voicingName = voicingName;
  };

  toggleNote = (noteDigit, isSharp, isFlat) => {};

  get octaveIndex() {
    if (keySignatureOffsets[this.keySignature] >= 8) return 0;
    return 1;
  }

  get octaveIndexDelta() {
    const result =
      this.inversion >= this.nrOfVoices ? 1 : this.inversion < 0 ? -1 : 0;
    return result;
  }

  get nrOfVoices() {
    return length(this.voicing);
  }

  get chordName() {
    return `${this.keySignature} ${this.voicingName}`;
  }

  get chord() {
    return voicingToChord(
      invertVoicing(this.voicing, mathMod(this.inversion, this.nrOfVoices)),
      this.keySignature,
      this.octaveIndex + this.octaveIndexDelta
    );
  }
}

decorate(ChordStore, {
  keySignature: observable,
  inversion: observable,
  voicing: observable,
  voicingName: observable,
  octaveIndex: computed,
  octaveIndexDelta: computed,
  chord: computed,
  nrOfVoices: computed,
  chordName: computed,
  setInversion: action,
  toggleNote: action
});
