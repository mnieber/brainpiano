import React from 'react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';
import { VoicingTitle } from 'src/voicings/components/VoicingTitle';
import { GroupPicker } from 'src/groups/components';
import { ClefListView } from 'src/keyboard/components';

import './QuizFrameTopPanel.scss';

type PropsT = React.PropsWithChildren<{}>;

export const QuizFrameTopPanel: React.FC<PropsT> = observer(() => {
  return (
    <div className={classnames('QuizFrameTopPanel mb-4')}>
      <VoicingTitle />
      <GroupPicker />
      <ClefListView />
    </div>
  );
});
