import AudioSynth from 'audiosynth';
import { clefOffsets } from 'src/keyboard/keyConstants';
import { ClefT } from 'src/keyboard/types';
import { ChordT } from 'src/voicings/types';

var AudioContext = window.AudioContext || (window as any).webkitAudioContext;

var context = new AudioContext();
var synth = new AudioSynth(context);

export const playChord = (chord: ChordT, clef: ClefT) => {
  chord.forEach((note, idx) =>
    window.setTimeout(() => {
      synth.playNote(note + 48, 0.5, 0.75, 0);
    }, 200 + idx * 150)
  );
  synth.playNote(clefOffsets[clef] + 36, 1.0, 1.0, 0);
};
