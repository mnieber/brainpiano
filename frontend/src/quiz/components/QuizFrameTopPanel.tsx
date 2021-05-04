import React from 'react';
import { useDefaultProps, FC } from 'react-default-props-context';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';
import { VoicingTitle } from 'src/voicings/components/VoicingTitle';
import { GroupPicker } from 'src/groups/components';
import { ClefListView } from 'src/keyboard/components';
import { QuizState } from 'src/quiz/QuizState';

import './QuizFrameTopPanel.scss';

type PropsT = React.PropsWithChildren<{}>;

type DefaultPropsT = {
  quizState: QuizState;
};

export const QuizFrameTopPanel: FC<PropsT, DefaultPropsT> = observer(
  (p: PropsT) => {
    const props = useDefaultProps<PropsT, DefaultPropsT>(p);

    return (
      <div className={classnames('QuizFrameTopPanel mb-4')}>
        <div className="QuizFrameTopPanel__firstRow mb4 flex flex-row justify-between">
          <VoicingTitle query={props.quizState.query} />
          <VoicingTitle query={props.quizState.nextQuery} />
        </div>
        <GroupPicker />
        <ClefListView />
      </div>
    );
  }
);
