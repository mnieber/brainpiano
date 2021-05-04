import { range } from 'lodash/fp';
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
  return randomElement(
    range(
      Math.max(0, minInversion),
      Math.min(voicing.chord.length, maxInversion)
    )
  );
};

export const createQuery = (clefs: ClefT[], groups: GroupT[]): QueryT => {
  const clef = randomElement(clefs);
  const group = randomElement(groups);
  const voicing = randomElement(group.voicings);
  const inversion = getRandomInversion(voicing, clef);

  return {
    clef,
    group,
    voicing,
    inversion,
  };
};
