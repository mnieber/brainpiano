import { ClefT } from 'src/keyboard/types';
import { GroupT } from 'src/groups/types';
import { VoicingT } from 'src/voicings/types';

export type QueryT = {
  clef: ClefT;
  group: GroupT;
  voicing: VoicingT;
  inversion: number;
};
