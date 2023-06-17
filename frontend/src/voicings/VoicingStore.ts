import { action, computed, makeObservable, observable } from 'mobx';
import { clamp, length } from 'ramda';
import { mathMod } from '/src/utils/mathMod';
import { parseVoicing } from '/src/voicings/parse';
import { VoicingT } from '/src/voicings/types';
import {
  getInversionRange,
  invertChord,
} from '/src/voicings/utils/invertChord';
import { voicingToChord } from '/src/voicings/utils/voicingToChord';

const cScale = parseVoicing({
  id: 'Chromatic',
  name: 'Chromatic',
  chord: [
    'root',
    'flat9',
    'ninth',
    'flat3',
    'third',
    'fourth',
    'flat5',
    'fifth',
    'flat6',
    'sixth',
    'flat7',
    'seventh',
  ],
});

export class VoicingStore {
  clef: string = 'C';
  inversion: number = 0;
  voicing: VoicingT = cScale;
  colouredNoteIdx: number = -1;

  constructor() {
    makeObservable(this, {
      clef: observable,
      inversion: observable,
      voicing: observable,
      chord: computed,
      nrOfVoices: computed,
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

  setColouredNoteIdx = (colouredNoteIdx: number) => {
    this.colouredNoteIdx = colouredNoteIdx;
  };

  get inversionRange() {
    return getInversionRange(voicingToChord(this.voicing, this.clef, 1));
  }

  get nrOfVoices() {
    return length(this.voicing.chord);
  }

  get chord() {
    return this.clef
      ? invertChord(voicingToChord(this.voicing, this.clef, 1), this.inversion)
      : undefined;
  }

  get colouredNote() {
    const idx = mathMod(this.colouredNoteIdx - this.inversion, this.nrOfVoices);
    return this.chord ? this.chord[idx] : undefined;
  }
}
