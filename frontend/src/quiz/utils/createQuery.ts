import { map, range, sum } from 'ramda';
import { GroupT } from 'src/groups/types';
import { ClefT } from 'src/keyboard/types';
import { QueryT } from 'src/quiz/types';
import { mathMod } from 'src/utils/mathMod';
import { randomElement } from 'src/utils/random';
import { VoicingT } from 'src/voicings/types';
import { getInversionRange } from 'src/voicings/utils/invertChord';
import { voicingToChord } from 'src/voicings/utils/voicingToChord';

const getRandomInversion = (voicing: VoicingT, clef: ClefT) => {
  const L = voicing.chord.length;

  const [minInversion, maxInversion] = getInversionRange(
    voicingToChord(voicing, clef, 1)
  );
  const inversionRange = range(minInversion, maxInversion + 1).filter((x) => {
    return !voicing.inversions || voicing.inversions[mathMod(x, L)] !== false;
  });
  if (inversionRange.length === 0) {
    return 0;
  }
  let inversion = randomElement(inversionRange);

  // Try to bring inversion closer to zero using steps of voicing.chord.length inversions
  // (which means its the same inversion, just at a different place on the keyboard)
  while (
    inversion + L <= maxInversion &&
    Math.abs(inversion) > Math.abs(inversion + L)
  ) {
    inversion += L;
  }
  while (
    inversion - L >= minInversion &&
    Math.abs(inversion) > Math.abs(inversion - L)
  ) {
    inversion -= L;
  }
  return inversion;
};

export const createQuery = (clefs: ClefT[], groups: GroupT[]): QueryT => {
  const clef = randomElement(clefs);
  const nrVoicings = sum(map((x: GroupT) => x.voicings.length)(groups));
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
