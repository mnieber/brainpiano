export const voicingGroups = [
  {
    id: 'minor',
    name: 'minor',
    voicings: [
      {
        id: 'Min6+9',
        name: 'Min6+9',
        chord: ['ninth', 'flat3', 'fifth', 'thirteenth'],
        inversions: [true, true, true, true],
      },
      {
        id: 'Min7+9',
        name: 'Min7+9',
        chord: ['ninth', 'flat3', 'fifth', 'flat7'],
        inversions: [true, true, true, true],
      },
      {
        id: 'ø+9',
        name: 'ø+9',
        chord: ['ninth', 'flat3', 'flat5', 'flat7'],
        inversions: [true, true, true, true],
      },
      {
        id: 'MinMaj+9',
        name: 'MinMaj+9',
        chord: ['ninth', 'flat3', 'fifth', 'seventh'],
        inversions: [true, true, true, true],
      },
      {
        id: 'Min6',
        name: 'Min6',
        chord: ['flat3', 'fifth', 'thirteenth'],
        inversions: [true, true, true],
      },
      {
        id: 'Min7',
        name: 'Min7',
        chord: ['flat3', 'fifth', 'flat7'],
        inversions: [true, true, true],
      },
      {
        id: 'ø',
        name: 'ø',
        chord: ['flat3', 'flat5', 'flat7'],
        inversions: [true, true, true],
      },
      {
        id: 'Min',
        name: 'Min',
        chord: ['flat3', 'fifth'],
        inversions: [true, true],
      },
      {
        id: 'MinMaj',
        name: 'MinMaj',
        chord: ['flat3', 'fifth', 'seventh'],
        inversions: [true, true, true],
      },
    ],
  },
  {
    id: 'fourths',
    name: 'fourths',
    voicings: [
      {
        id: 'SoWhat',
        name: 'SoWhat',
        chord: ['root', 'fourth', 'flat7', 'flat3', 'fifth'],
        inversions: [false, true, false, false, false, false],
      },
    ],
  },
  {
    id: 'major',
    name: 'major',
    voicings: [
      {
        id: 'Maj6+9',
        name: 'Maj6+9',
        chord: ['ninth', 'third', 'sixth'],
        inversions: [true, true, true],
      },
      {
        id: 'Maj7+9',
        name: 'Maj7+9',
        chord: ['ninth', 'third', 'fifth', 'seventh'],
        inversions: [true, true, true, true],
      },
      {
        id: 'Maj6',
        name: 'Maj6',
        chord: ['third', 'sixth'],
        inversions: [true, true],
      },
      {
        id: 'Maj7',
        name: 'Maj7',
        chord: ['third', 'fifth', 'seventh'],
        inversions: [true, true, true],
      },
      {
        id: 'Maj',
        name: 'Maj',
        chord: ['third', 'fifth'],
        inversions: [true, true],
      },
    ],
  },
  {
    id: 'dominant',
    name: 'dominant',
    voicings: [
      {
        id: '7+13',
        name: '7+13',
        chord: ['third', 'thirteenth', 'flat7'],
        inversions: [true, true, true],
      },
      {
        id: '7+9',
        name: '7+9',
        chord: ['ninth', 'third', 'fifth', 'flat7'],
        inversions: [true, true, true, true],
      },
      {
        id: '7+b13',
        name: '7+b13',
        chord: ['third', 'flat13', 'flat7'],
        inversions: [true, true, true],
      },
      {
        id: '7+9+b13',
        name: '7+9+b13',
        chord: ['ninth', 'third', 'flat13', 'flat7'],
        inversions: [true, true, true, true],
      },
      {
        id: '7+b5',
        name: '7+b5',
        chord: ['third', 'flat5', 'flat7'],
        inversions: [true, true, true],
      },
      {
        id: '7+b5+b13',
        name: '7+b5+b13',
        chord: ['third', 'flat5', 'flat13', 'flat7'],
        inversions: [true, true, true, true],
      },
      {
        id: '7+b9',
        name: '7+b9',
        chord: ['flat9', 'third', 'fifth', 'flat7'],
        inversions: [true, true, true, true],
      },
      {
        id: '7+b9+13',
        name: '7+b9+13',
        chord: ['flat9', 'third', 'thirteenth', 'flat7'],
        inversions: [true, true, true, true],
      },
      {
        id: '7+b9+b13',
        name: '7+b9+b13',
        chord: ['flat9', 'third', 'flat13', 'flat7'],
        inversions: [true, true, true, true],
      },
      {
        id: '7',
        name: '7',
        chord: ['third', 'fifth', 'flat7'],
        inversions: [true, true, true],
      },
    ],
  },
];
