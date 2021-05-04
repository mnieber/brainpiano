import { VoicingT } from 'src/voicings/types';

export type GroupT = {
  id: string;
  name: string;
  voicings: VoicingT[];
  inversions: boolean[];
};

export type GroupByIdT = { [id: string]: GroupT };
