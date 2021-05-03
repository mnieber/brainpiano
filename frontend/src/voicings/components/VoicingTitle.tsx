import { observer } from 'mobx-react-lite';
import 'src/keyboard/components/Keyboard.css';
import { useStore } from 'src/app/components';

import './VoicingTitle.scss';

export const VoicingTitle = observer(() => {
  const { voicingStore } = useStore();

  return <p className="Test">{voicingStore.voicingTitle}!</p>;
});
