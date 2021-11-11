import { map } from 'ramda';
import { valueByNoteName } from 'src/voicings/noteConstants';

export const parseVoicing = (data: any) => {
  const voicing = {
    ...data,
    id: data.name,
    chord: map((x: string) => {
      const noteValue = (valueByNoteName as any)[x as any];
      if (noteValue === undefined) {
        console.log(`Error: unknown note ${x}`);
      }
      return noteValue;
    }, data['chord']),
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
    id: data.name,
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
