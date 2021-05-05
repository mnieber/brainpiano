export type NoteT = number;
export type ChordT = NoteT[];

export type VoicingByIdT = { [id: string]: VoicingT };

export type NoteNameT = string;
export type VoicingT = {
  id: string;
  name: string;
  chord: ChordT;
  inversions: boolean[];
};

export type VoicingByNameT = { [name: string]: VoicingT };
