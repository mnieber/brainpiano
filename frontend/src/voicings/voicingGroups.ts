export const voicingGroups = [
  {
    id: 'minor',
    name: 'minor',
    voicings: [
      {
        id: 'Min6+9',
        name: 'Min6+9',
        chord: ['flat3', 'fifth', 'ninth', 'thirteenth'],
      },
      {
        id: 'Min7+9',
        name: 'Min7+9',
        chord: ['flat3', 'fifth', 'flat7', 'ninth'],
      },
      { id: 'ø+9', name: 'ø+9', chord: ['flat3', 'flat5', 'flat7', 'ninth'] },
      {
        id: 'MinMaj+9',
        name: 'MinMaj+9',
        chord: ['flat3', 'fifth', 'seventh', 'ninth'],
      },
      { id: 'Min6', name: 'Min6', chord: ['flat3', 'fifth', 'thirteenth'] },
      { id: 'Min7', name: 'Min7', chord: ['flat3', 'fifth', 'flat7'] },
      { id: 'ø', name: 'ø', chord: ['flat3', 'flat5', 'flat7'] },
      { id: 'Min', name: 'Min', chord: ['flat3', 'fifth'] },
      { id: 'MinMaj', name: 'MinMaj', chord: ['flat3', 'fifth', 'seventh'] },
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
      },
    ],
  },
  {
    id: 'major',
    name: 'major',
    voicings: [
      { id: 'Maj6+9', name: 'Maj6+9', chord: ['third', 'sixth', 'ninth'] },
      {
        id: 'Maj7+9',
        name: 'Maj7+9',
        chord: ['third', 'fifth', 'seventh', 'ninth'],
      },
      { id: 'Maj6', name: 'Maj6', chord: ['third', 'sixth'] },
      { id: 'Maj7', name: 'Maj7', chord: ['third', 'fifth', 'seventh'] },
      { id: 'Maj', name: 'Maj', chord: ['third', 'fifth'] },
    ],
  },
  {
    id: 'dominant',
    name: 'dominant',
    voicings: [
      { id: '7+13', name: '7+13', chord: ['third', 'flat7', 'thirteenth'] },
      { id: '7+9', name: '7+9', chord: ['third', 'fifth', 'flat7', 'ninth'] },
      { id: '7+b13', name: '7+b13', chord: ['third', 'flat7', 'flat13'] },
      {
        id: '7+9+b13',
        name: '7+9+b13',
        chord: ['third', 'flat7', 'ninth', 'flat13'],
      },
      { id: '7+b5', name: '7+b5', chord: ['third', 'flat5', 'flat7'] },
      {
        id: '7+b5+b13',
        name: '7+b5+b13',
        chord: ['third', 'flat5', 'flat7', 'flat13'],
      },
      { id: '7+b9', name: '7+b9', chord: ['third', 'fifth', 'flat7', 'flat9'] },
      {
        id: '7+b9+13',
        name: '7+b9+13',
        chord: ['third', 'thirteenth', 'flat7', 'flat9'],
      },
      {
        id: '7+b9+b13',
        name: '7+b9+b13',
        chord: ['third', 'flat13', 'flat7', 'flat9'],
      },
      { id: '7', name: '7', chord: ['third', 'fifth', 'flat7'] },
    ],
  },
];
