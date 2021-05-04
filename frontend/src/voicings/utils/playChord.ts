import { ChordT } from 'src/voicings/types';
import { ClefT } from 'src/keyboard/types';
import AudioSynth from 'audiosynth';
import { forEach } from 'lodash/fp';
import { clefOffsets } from 'src/keyboard/keyConstants';

var AudioContext = window.AudioContext || (window as any).webkitAudioContext;

var context = new AudioContext();
var synth = new AudioSynth(context);

export const playChord = (chord: ChordT, clef: ClefT) => {
  forEach((note) => synth.playNote(note + 48, 1.0, 1.0, 0), chord);
  synth.playNote(clefOffsets[clef] + 36, 1.0, 1.0, 0);
};
