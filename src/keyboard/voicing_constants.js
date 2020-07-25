import {
  root,
  fifth,
  flat3,
  flat5,
  flat6,
  flat7,
  flat9,
  fourth,
  ninth,
  seventh,
  sharp5,
  sixth,
  third,
  thirteenth
} from 'src/keyboard/note_constants';

export const voicings = {
  minor: {
    Min: [flat3, fifth],
    Min7: [flat3, fifth, flat7],
    Min6: [flat3, fifth, thirteenth],
    'Min6+9': [ninth, flat3, fifth, thirteenth],
    Min7b5: [flat3, flat5, flat7],
    'Min7b5+9': [ninth, flat3, flat5, flat7],
    MinMaj: [flat3, fifth, seventh],
    'Min7+9': [ninth, flat3, fifth, flat7],
    'MinMaj+9': [ninth, flat3, fifth, seventh]
  },
  major: {
    Maj: [third, fifth],
    Maj7: [third, fifth, seventh],
    'Maj7+9': [ninth, third, fifth, seventh]
  },
  dominant: {
    Dom7: [third, fifth, flat7],
    'Dom7+9': [ninth, third, fifth, flat7],
    'Dom7+b9': [flat9, third, fifth, flat7]
  },
  other: {
    Dim: [flat3, flat5, thirteenth],
    Aug: [root, third, sharp5],
    SoWhat: [root, fourth, flat7, flat3, fifth]
  },
  scales: {
    Chromatic: [
      root,
      flat9,
      ninth,
      flat3,
      third,
      fourth,
      flat5,
      fifth,
      flat6,
      sixth,
      flat7,
      seventh
    ]
  }
};
