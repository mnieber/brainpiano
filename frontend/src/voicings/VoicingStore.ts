import { range, clamp, size } from 'lodash/fp';
import { action, computed, makeObservable, observable } from 'mobx';
import { voicingGroupById } from 'src/voicings/voicingValues';
import { invertChord } from 'src/voicings/utils/invertChord';
import { voicingToChord } from 'src/voicings/utils/voicingToChord';
import { noteNameByValue } from 'src/voicings/noteConstants';
import { VoicingT } from 'src/voicings/types';
import { getInversionRange } from 'src/voicings/utils/invertChord';
import { listToItemById } from 'src/utils/ids';
import { noteValueToIndex, clefOffsets } from 'src/keyboard/keyConstants';
import { randomElement } from 'src/utils/random';
import { ClefT } from 'src/keyboard/types';
import { GroupT } from 'src/groups/types';

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
    const startNoteValue = noteValueToIndex(
      this.chord[0] - clefOffsets[this.clef]
    );
    const startNoteName = (noteNameByValue as any)[startNoteValue];

    return `${this.clef} ${this.voicing.name} from ` + `${startNoteName}`;
  }

  get chord() {
    return this.clef
      ? invertChord(voicingToChord(this.voicing, this.clef, 1), this.inversion)
      : undefined;
  }

  setRandomVoicing(clef: ClefT, groups: GroupT[]) {
    const group = randomElement(groups);
    const voicing = randomElement(group.voicings);
    const [minInversion, maxInversion] = getInversionRange(
      voicingToChord(voicing, clef, 1)
    );
    const inversion = randomElement(
      range(
        Math.max(0, minInversion),
        Math.min(voicing.chord.length, maxInversion)
      )
    );
    this.setVoicing(voicing);
    this.setInversion(inversion);
  }
}
