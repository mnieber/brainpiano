import { valueByNoteName } from 'src/voicings/noteConstants';
import { map } from 'lodash/fp';

const parseInversions = (inversions: string, l: number) => {
  const result = map((x) => x === '1', inversions);
  while (result.length < l) {
    result.push(true);
  }
  return result;
};

export const parseVoicing = (data: any) => {
  const voicing = {
    ...data,
    chord: map((x: string) => {
      const noteValue = (valueByNoteName as any)[x as any];
      if (noteValue === undefined) {
        console.log(`Error: unknown note ${x}`);
      }
      return noteValue;
    }, data['chord']),
    inversions: parseInversions(data['inversions'] ?? '', data['chord'].length),
  };

  for (let i = 1; i < voicing.chord.length; ++i) {
    while (voicing.chord[i] <= voicing.chord[i - 1]) {
      voicing.chord[i] += 12;
    }
  }

  return voicing;
};

const parseVoicingGroup = (data: any) => {
  return {
    ...data,
    voicings: map(parseVoicing, data['voicings']),
  };
};

export const cache = {
  data: null,
};

export const parseVoicingGroups = (data: any) => {
  cache.data = data;
  return map(parseVoicingGroup, data);
};
