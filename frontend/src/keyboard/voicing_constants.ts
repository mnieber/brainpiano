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
  thirteenth,
  flat13,
} from 'src/voicings/noteConstants';
import { VoicingByNameT } from 'src/voicings/types';
import { listToItemById } from 'src/utils/ids';

export const voicings: { [key: string]: VoicingByNameT } = {
  minor: listToItemById(
    [
      { name: 'Min6+9', chord: [ninth, flat3, fifth, thirteenth] },
      { name: 'Min7+9', chord: [ninth, flat3, fifth, flat7] },
      { name: 'Min7b5+9', chord: [ninth, flat3, flat5, flat7] },
      { name: 'MinMaj+9', chord: [ninth, flat3, fifth, seventh] },
      { name: 'Min6', chord: [flat3, fifth, thirteenth] },
      { name: 'Min7', chord: [flat3, fifth, flat7] },
      { name: 'Min7b5', chord: [flat3, flat5, flat7] },
      { name: 'Min', chord: [flat3, fifth] },
      { name: 'MinMaj', chord: [flat3, fifth, seventh] },
    ],
    'name'
  ),
  major: listToItemById(
    [
      { name: 'Maj6+9', chord: [ninth, third, sixth] },
      { name: 'Maj7+9', chord: [ninth, third, fifth, seventh] },
      { name: 'Maj6', chord: [third, sixth] },
      { name: 'Maj7', chord: [third, fifth, seventh] },
      { name: 'Maj', chord: [third, fifth] },
    ],
    'name'
  ),
  dominant: listToItemById(
    [
      { name: '7+13', chord: [third, thirteenth, flat7] },
      { name: '7+9', chord: [ninth, third, fifth, flat7] },
      { name: '7+b13', chord: [third, flat13, flat7] },
      { name: '7+9+b13', chord: [ninth, third, flat13, flat7] },
      { name: '7+b5', chord: [third, flat5, flat7] },
      { name: '7+b5+b13', chord: [third, flat5, flat13, flat7] },
      { name: '7+b9', chord: [flat9, third, fifth, flat7] },
      { name: '7+b9+13', chord: [flat9, third, thirteenth, flat7] },
      { name: '7+b9+b13', chord: [flat9, third, flat13, flat7] },
      { name: '7', chord: [third, fifth, flat7] },
    ],
    'name'
  ),
  skip: listToItemById(
    [
      { name: 'SoWhat', chord: [root, fourth, flat7, flat3, fifth] },
      { name: 'Aug', chord: [root, third, sharp5] },
      { name: 'Dim', chord: [flat3, flat5, thirteenth] },
    ],
    'name'
  ),
  scales: listToItemById(
    [
      {
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
    'name'
  ),
  cluster56b79: listToItemById(
    [{ name: '5_6_b7_9', chord: [fifth, thirteenth, flat7, ninth] }],
    'name'
  ),
};
