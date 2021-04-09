import { observer } from 'mobx-react-lite';
import 'src/keyboard/components/Keyboard.css';
import { useStore } from 'src/app/components/StoreProvider';

export const ChordTitle = observer(() => {
  const { chordStore } = useStore();

  return <p>{chordStore.chordName}</p>;
});
