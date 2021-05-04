import { observer } from 'mobx-react-lite';
import 'src/keyboard/components/Keyboard.css';
import { voicingTitleFromQuery } from 'src/quiz/utils/voicingTitleFromQuery';
import { QueryT } from 'src/quiz/types';

import './VoicingTitle.scss';

type PropsT = {
  query?: QueryT;
  label?: string;
};

export const VoicingTitle = observer((props: PropsT) => {
  return (
    <div className="VoicingTitle">
      {(props.label ?? '') +
        (props.query ? voicingTitleFromQuery(props.query) : '')}
    </div>
  );
});
