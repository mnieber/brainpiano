import { range, sumBy } from 'lodash/fp';
import { randomElement } from 'src/utils/random';
import { ClefT } from 'src/keyboard/types';
import { GroupT } from 'src/groups/types';
import { VoicingT } from 'src/voicings/types';
import { getInversionRange } from 'src/voicings/utils/invertChord';
import { QueryT } from 'src/quiz/types';
import { voicingToChord } from 'src/voicings/utils/voicingToChord';

const getRandomInversion = (voicing: VoicingT, clef: ClefT) => {
  const [minInversion, maxInversion] = getInversionRange(
    voicingToChord(voicing, clef, 1)
  );
  let inversion = randomElement(range(minInversion, maxInversion + 1));

  // Try to bring inversion closer to zero using steps of voicing.chord.length inversions
  // (which means its the same inversion, just at a different place on the keyboard)
  while (
    inversion + voicing.chord.length <= maxInversion &&
    Math.abs(inversion) > Math.abs(inversion + voicing.chord.length)
  ) {
    inversion += voicing.chord.length;
  }
  while (
    inversion - voicing.chord.length >= minInversion &&
    Math.abs(inversion) > Math.abs(inversion - voicing.chord.length)
  ) {
    inversion -= voicing.chord.length;
  }
  return inversion;
};

export const createQuery = (clefs: ClefT[], groups: GroupT[]): QueryT => {
  const clef = randomElement(clefs);
  const nrVoicings = sumBy((x: GroupT) => x.voicings.length)(groups);
  const voicingIdx = Math.floor(Math.random() * nrVoicings);

  let groupIdx = 0;
  let count = groups[0].voicings.length;
  while (voicingIdx >= count) {
    groupIdx += 1;
    count += groups[groupIdx].voicings.length;
  }

  const group = groups[groupIdx];
  const voicing = group.voicings[voicingIdx - (count - group.voicings.length)];
  const inversion = getRandomInversion(voicing, clef);

  return {
    clef,
    group,
    voicing,
    inversion,
  };
};
