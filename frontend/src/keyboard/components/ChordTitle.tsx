import { observer } from 'mobx-react-lite';
import 'src/keyboard/components/Keyboard.css';
import { useStore } from 'src/app/components/StoreProvider';

import './ChordTitle.scss';

export const ChordTitle = observer(() => {
  const { chordStore } = useStore();

  return <p className="Test">{chordStore.chordName}!</p>;
});
