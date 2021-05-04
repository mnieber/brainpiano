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
  sixth,
  third,
  thirteenth,
  flat13,
} from 'src/voicings/noteConstants';
import { GroupByIdT } from 'src/groups/types';

export const voicingGroupById: GroupByIdT = {
  minor: {
    id: 'minor',
    name: 'minor',
    voicings: [
      {
        id: 'Min6+9',
        name: 'Min6+9',
        chord: [ninth, flat3, fifth, thirteenth],
      },
      { id: 'Min7+9', name: 'Min7+9', chord: [ninth, flat3, fifth, flat7] },
      { id: 'ø+9', name: 'ø+9', chord: [ninth, flat3, flat5, flat7] },
      {
        id: 'MinMaj+9',
        name: 'MinMaj+9',
        chord: [ninth, flat3, fifth, seventh],
      },
      { id: 'Min6', name: 'Min6', chord: [flat3, fifth, thirteenth] },
      { id: 'Min7', name: 'Min7', chord: [flat3, fifth, flat7] },
      { id: 'ø', name: 'ø', chord: [flat3, flat5, flat7] },
      { id: 'Min', name: 'Min', chord: [flat3, fifth] },
      { id: 'MinMaj', name: 'MinMaj', chord: [flat3, fifth, seventh] },
    ],
  },
  fourths: {
    id: 'fourths',
    name: 'fourths',
    voicings: [
      {
        id: 'SoWhat',
        name: 'SoWhat',
        chord: [root, fourth, flat7, 12 + flat3, 12 + fifth],
      },
    ],
  },
  major: {
    id: 'major',
    name: 'major',
    voicings: [
      { id: 'Maj6+9', name: 'Maj6+9', chord: [ninth, third, sixth] },
      { id: 'Maj7+9', name: 'Maj7+9', chord: [ninth, third, fifth, seventh] },
      { id: 'Maj6', name: 'Maj6', chord: [third, sixth] },
      { id: 'Maj7', name: 'Maj7', chord: [third, fifth, seventh] },
      { id: 'Maj', name: 'Maj', chord: [third, fifth] },
    ],
  },
  dominant: {
    id: 'dominant',
    name: 'dominant',
    voicings: [
      { id: '7+13', name: '7+13', chord: [third, thirteenth, flat7] },
      { id: '7+9', name: '7+9', chord: [ninth, third, fifth, flat7] },
      { id: '7+b13', name: '7+b13', chord: [third, flat13, flat7] },
      { id: '7+9+b13', name: '7+9+b13', chord: [ninth, third, flat13, flat7] },
      { id: '7+b5', name: '7+b5', chord: [third, flat5, flat7] },
      {
        id: '7+b5+b13',
        name: '7+b5+b13',
        chord: [third, flat5, flat13, flat7],
      },
      { id: '7+b9', name: '7+b9', chord: [flat9, third, fifth, flat7] },
      {
        id: '7+b9+13',
        name: '7+b9+13',
        chord: [flat9, third, thirteenth, flat7],
      },
      {
        id: '7+b9+b13',
        name: '7+b9+b13',
        chord: [flat9, third, flat13, flat7],
      },
      { id: '7', name: '7', chord: [third, fifth, flat7] },
    ],
  },
  scales: {
    id: 'scales',
    name: 'scales',
    voicings: [
      {
        id: 'Chromatic',
        name: 'Chromatic',
        chord: [
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
          seventh,
        ],
      },
    ],
  },
  cluster56b79: {
    id: 'cluster56b79',
    name: 'cluster56b79',
    voicings: [
      {
        id: '5/6/b7/9',
        name: '5/6/b7/9',
        chord: [fifth, thirteenth, flat7, 12 + ninth],
      },
    ],
  },
};
