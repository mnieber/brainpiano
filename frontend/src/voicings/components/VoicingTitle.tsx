import { observer } from 'mobx-react-lite';
import { QueryT } from '/src/quiz/types';
import { voicingTitleFromQuery } from '/src/quiz/utils/voicingTitleFromQuery';

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
