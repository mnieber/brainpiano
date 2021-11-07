export const voicingGroups = [
  {
    name: 'minor',
    voicings: [
      {
        name: 'Min6,9',
        chord: ['ninth', 'flat3', 'fifth', 'thirteenth'],
        inversions: [true, true, true, true],
      },
      {
        name: 'Min7,9',
        chord: ['ninth', 'flat3', 'fifth', 'flat7'],
        inversions: [true, true, true, true],
      },
      {
        name: 'ø9',
        chord: ['ninth', 'flat3', 'flat5', 'flat7'],
        inversions: [true, true, true, true],
      },
      {
        name: 'MinMaj9',
        chord: ['ninth', 'flat3', 'fifth', 'seventh'],
        inversions: [true, true, true, true],
      },
      {
        name: 'Min6',
        chord: ['flat3', 'fifth', 'thirteenth'],
        inversions: [true, true, true],
      },
      {
        name: 'Min7',
        chord: ['flat3', 'fifth', 'flat7'],
        inversions: [true, true, true],
      },
      {
        name: 'ø',
        chord: ['flat3', 'flat5', 'flat7'],
        inversions: [true, true, true],
      },
      {
        name: 'Min',
        chord: ['flat3', 'fifth'],
        inversions: [true, true],
      },
      {
        name: 'MinMaj',
        chord: ['flat3', 'fifth', 'seventh'],
        inversions: [true, true, true],
      },
    ],
  },
  {
    name: 'fourths',
    voicings: [
      {
        name: 'SoWhat',
        chord: ['root', 'fourth', 'flat7', 'flat3', 'fifth'],
        inversions: [false, true, false, false, false, false],
      },
    ],
  },
  {
    name: 'major',
    voicings: [
      {
        name: 'Maj6,9',
        chord: ['ninth', 'third', 'sixth'],
        inversions: [true, true, true],
      },
      {
        name: 'Maj7,9',
        chord: ['ninth', 'third', 'fifth', 'seventh'],
        inversions: [true, true, true, true],
      },
      {
        name: 'Maj6',
        chord: ['third', 'sixth'],
        inversions: [true, true],
      },
      {
        name: 'Maj7',
        chord: ['third', 'fifth', 'seventh'],
        inversions: [true, true, true],
      },
      {
        name: 'Maj',
        chord: ['third', 'fifth'],
        inversions: [true, true],
      },
    ],
  },
  {
    name: 'dominant',
    voicings: [
      {
        name: '7,13',
        chord: ['third', 'thirteenth', 'flat7'],
        inversions: [true, true, true],
      },
      {
        name: '7,9',
        chord: ['ninth', 'third', 'fifth', 'flat7'],
        inversions: [true, true, true, true],
      },
      {
        name: '7,b13',
        chord: ['third', 'flat13', 'flat7'],
        inversions: [true, true, true],
      },
      {
        name: '7,9,b13',
        chord: ['ninth', 'third', 'flat13', 'flat7'],
        inversions: [true, true, true, true],
      },
      {
        name: '7,b5',
        chord: ['third', 'flat5', 'flat7'],
        inversions: [true, true, true],
      },
      {
        name: '7,b5,b13',
        chord: ['third', 'flat5', 'flat13', 'flat7'],
        inversions: [true, true, true, true],
      },
      {
        name: '7,b9',
        chord: ['flat9', 'third', 'fifth', 'flat7'],
        inversions: [true, true, true, true],
      },
      {
        name: '7,b9,13',
        chord: ['flat9', 'third', 'thirteenth', 'flat7'],
        inversions: [true, true, true, true],
      },
      {
        name: '7,b9,b13',
        chord: ['flat9', 'third', 'flat13', 'flat7'],
        inversions: [true, true, true, true],
      },
      {
        name: '7',
        chord: ['third', 'fifth', 'flat7'],
        inversions: [true, true, true],
      },
    ],
  },
  {
    name: 'magic-dom',
    voicings: [
      {
        name: 'magic dom root',
        chord: ['third', 'flat7', 'ninth', 'fifth', 'root'],
        inversions: [true, false, false, false, false],
      },
      {
        name: 'magic dom 2nd',
        chord: ['fifth', 'root', 'fourth', 'flat7', 'ninth'],
        inversions: [true, false, false, false, false],
      },
      {
        name: 'magic dom 3rd',
        chord: ['flat7', 'ninth', 'five', 'root', 'third'],
        inversions: [true, false, false, false, false],
      },
      {
        name: 'magic dom 5th',
        chord: ['flat7', 'third', 'thirteen', 'second', 'fifth'],
        inversions: [true, false, false, false, false],
      },
      {
        name: 'magic dom 6th',
        chord: ['root', 'fourth', 'flat7', 'third', 'thirteen'],
        inversions: [true, false, false, false, false],
      },
      {
        name: 'magic dom 7th',
        chord: ['ninth', 'five', 'root', 'fourth', 'flat7'],
        inversions: [true, false, false, false, false],
      },
    ],
  },
];
