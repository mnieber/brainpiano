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
} from 'src/keyboard/note_constants';
import { VoicingByNameT } from 'src/voicings/types';
import { listToItemById } from 'src/utils/ids';

export const voicings: { [key: string]: VoicingByNameT } = {
  minor: listToItemById(
    [
      { name: 'Min6+9', noteNames: [ninth, flat3, fifth, thirteenth] },
      { name: 'Min7+9', noteNames: [ninth, flat3, fifth, flat7] },
      { name: 'Min7b5+9', noteNames: [ninth, flat3, flat5, flat7] },
      { name: 'MinMaj+9', noteNames: [ninth, flat3, fifth, seventh] },
      { name: 'Min6', noteNames: [flat3, fifth, thirteenth] },
      { name: 'Min7', noteNames: [flat3, fifth, flat7] },
      { name: 'Min7b5', noteNames: [flat3, flat5, flat7] },
      { name: 'Min', noteNames: [flat3, fifth] },
      { name: 'MinMaj', noteNames: [flat3, fifth, seventh] },
    ],
    'name'
  ),
  major: listToItemById(
    [
      { name: 'Maj6+9', nameNames: [ninth, third, sixth] },
      { name: 'Maj7+9', nameNames: [ninth, third, fifth, seventh] },
      { name: 'Maj6', nameNames: [third, sixth] },
      { name: 'Maj7', nameNames: [third, fifth, seventh] },
      { name: 'Maj', nameNames: [third, fifth] },
    ],
    'name'
  ),
  dominant: listToItemById(
    [
      { name: '7+13', noteNames: [third, thirteenth, flat7] },
      { name: '7+9', noteNames: [ninth, third, fifth, flat7] },
      { name: '7+b13', noteNames: [third, flat13, flat7] },
      { name: '7+9+b13', noteNames: [ninth, third, flat13, flat7] },
      { name: '7+b5', noteNames: [third, flat5, flat7] },
      { name: '7+b5+b13', noteNames: [third, flat5, flat13, flat7] },
      { name: '7+b9', noteNames: [flat9, third, fifth, flat7] },
      { name: '7+b9+13', noteNames: [flat9, third, thirteenth, flat7] },
      { name: '7+b9+b13', noteNames: [flat9, third, flat13, flat7] },
      { name: '7', noteNames: [third, fifth, flat7] },
    ],
    'name'
  ),
  skip: listToItemById(
    [
      { name: 'SoWhat', noteNames: [root, fourth, flat7, flat3, fifth] },
      { name: 'Aug', noteNames: [root, third, sharp5] },
      { name: 'Dim', noteNames: [flat3, flat5, thirteenth] },
    ],
    'name'
  ),
  scales: listToItemById(
    [
      {
        name: 'Chromatic',
        noteNames: [
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
    [{ name: '5_6_b7_9', noteNames: [fifth, thirteenth, flat7, ninth] }],
    'name'
  ),
};
