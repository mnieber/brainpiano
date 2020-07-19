export const voicings = {
  minor: {
    Min: [flat3, fifth],
    Min7: [flat3, fifth, flat7],
    MinMaj: [flat3, fifth, seventh],
    'Min7+9': [ninth, flat3, fifth, flat7],
    'MinMaj+9': [ninth, flat3, fifth, seventh]
  },
  major: {
    Maj: [third, fifth],
    Maj7: [third, fifth, seventh]
  },
  dominant: {
    Dom7: [third, fifth, flat7],
    'Dom7+9': [ninth, third, fifth, flat7],
    'Dom7+b9': [flat9, third, fifth, flat7]
  },
  other: {
    Dim: [flat3, flat5],
    Aug: [third, sharp5]
  }
};

export const scales = {
  Chromatic: [
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
};
