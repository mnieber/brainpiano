export type VoicingByIdT = { [id: string]: VoicingT };

export type NoteNameT = string;
export type VoicingT = NoteNameT[];

export type NoteT = number;
export type ChordT = NoteT[];

export type VoicingByNameT = { [name: string]: VoicingT };
