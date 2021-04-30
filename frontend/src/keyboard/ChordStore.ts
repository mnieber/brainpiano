import {
  concat,
  filter,
  findIndex,
  includes,
  size,
  take,
  takeRight,
} from 'lodash/fp';
import { action, computed, makeObservable, observable } from 'mobx';
import {
  keyC,
  keySignatureOffsets,
} from 'src/keyboard/key_signature_constants';
import {
  eleventh,
  fifth,
  flat13,
  flat3,
  flat5,
  flat7,
  flat9,
  ninth,
  noteNameToIndex,
  seventh,
  sharp11,
  sharp5,
  third,
  thirteenth,
} from 'src/keyboard/note_constants';
import { voicings } from 'src/keyboard/voicing_constants';
import { invertVoicing } from 'src/utils/invertVoicing';
import { voicingToChord } from 'src/utils/voicingToChord';
import { mathMod } from 'src/utils/mathMod';
import { VoicingT, NoteNameT } from 'src/voicings/types';

export class ChordStore {
  keySignature?: string = undefined;
  inversion: number = 0;
  voicing: VoicingT = voicings['scales']['Chromatic'];
  voicingName: string = 'Chromatic Scale';

  constructor() {
    makeObservable(this, {
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
      setVoicing: action,
      toggleNote: action,
    });
  }

  setInversion = (x: number) => {
    const maxInversion = this.nrOfVoices;
    const minInversion = -1 * this.nrOfVoices;
    this.inversion =
      x <= minInversion ? minInversion : x >= maxInversion ? maxInversion : x;
  };

  setVoicing = (voicing: VoicingT, voicingName: string) => {
    this.voicing = voicing;
    this.voicingName = voicingName;
  };

  toggleNote = (noteDigit: string, isSharp: boolean, isFlat: boolean) => {
    let noteName = '';
    if (noteDigit === '2' && !isFlat) noteName = ninth;
    if (noteDigit === '2' && isFlat) noteName = flat9;
    if (noteDigit === '3' && isFlat) noteName = flat3;
    if (noteDigit === '3' && !isFlat) noteName = third;
    if (noteDigit === '4' && !isSharp) noteName = eleventh;
    if (noteDigit === '4' && isSharp) noteName = sharp11;
    if (noteDigit === '5' && !isSharp && !isFlat) noteName = fifth;
    if (noteDigit === '5' && isFlat) noteName = flat5;
    if (noteDigit === '5' && isSharp) noteName = sharp5;
    if (noteDigit === '6' && !isFlat) noteName = thirteenth;
    if (noteDigit === '6' && isFlat) noteName = flat13;
    if (noteDigit === '7' && isFlat) noteName = flat7;
    if (noteDigit === '7' && !isFlat) noteName = seventh;

    const noteValues = voicingToChord(this.voicing, keyC, 0);
    const noteValue = noteNameToIndex[noteName];

    let pos = findIndex((x: number) => x > noteValue, noteValues);
    if (pos === -1) {
      pos = size(this.voicing);
    }

    this.voicing = includes(noteName, this.voicing)
      ? filter((x: NoteNameT) => x !== noteName, this.voicing)
      : concat(
          take(pos, this.voicing),
          concat([noteName], takeRight(size(this.voicing) - pos, this.voicing))
        );
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
    return size(this.voicing);
  }

  get chordName() {
    return `${this.keySignature} ${this.voicingName}`;
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
