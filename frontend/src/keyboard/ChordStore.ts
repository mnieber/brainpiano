import { size } from 'lodash/fp';
import { action, computed, makeObservable, observable } from 'mobx';
import { keySignatureOffsets } from 'src/keyboard/key_signature_constants';
import { voicings } from 'src/keyboard/voicing_constants';
import { invertVoicing } from 'src/utils/invertVoicing';
import { voicingToChord } from 'src/utils/voicingToChord';
import { mathMod } from 'src/utils/mathMod';
import { VoicingT } from 'src/voicings/types';

export class ChordStore {
  keySignature?: string = undefined;
  inversion: number = 0;
  voicing: VoicingT = voicings['scales']['Chromatic'];

  constructor() {
    makeObservable(this, {
      keySignature: observable,
      inversion: observable,
      voicing: observable,
      octaveIndex: computed,
      octaveIndexDelta: computed,
      chord: computed,
      nrOfVoices: computed,
      chordName: computed,
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
    if (this.keySignature && keySignatureOffsets[this.keySignature] >= 8)
      return 0;
    return 1;
  }

  get octaveIndexDelta() {
    const result =
      this.inversion >= this.nrOfVoices ? 1 : this.inversion < 0 ? -1 : 0;
    return result;
  }

  get nrOfVoices() {
    return size(this.voicing.noteNames);
  }

  get chordName() {
    return `${this.keySignature} ${this.voicing.name}`;
  }

  get chord() {
    return this.keySignature
      ? voicingToChord(
          invertVoicing(this.voicing, mathMod(this.inversion, this.nrOfVoices)),
          this.keySignature,
          this.octaveIndex + this.octaveIndexDelta
        )
      : undefined;
  }
}
