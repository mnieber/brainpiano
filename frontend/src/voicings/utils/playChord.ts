import { ChordT } from 'src/voicings/types';
import AudioSynth from 'audiosynth';
import { forEach } from 'lodash/fp';

var AudioContext = window.AudioContext || (window as any).webkitAudioContext;

var context = new AudioContext();
var synth = new AudioSynth(context);

export const playChord = (chord: ChordT) => {
  forEach((note) => synth.playNote(note + 48, 1.0, 1.0, 0), chord);
};
