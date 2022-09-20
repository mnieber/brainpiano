import classnames from 'classnames';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { withDefaultProps } from 'react-default-props-context';
import { GroupPicker } from 'src/groups/components';
import { IoMenu } from 'src/io/components';
import { ClefListView } from 'src/keyboard/components';
import { QuizState } from 'src/quiz/QuizState';
import { VoicingTitle } from 'src/voicings/components/VoicingTitle';

import './QuizFrameTopPanel.scss';

type PropsT = React.PropsWithChildren<{}>;

type DefaultPropsT = {
  quizState: QuizState;
};

export const QuizFrameTopPanel = observer(
  withDefaultProps<PropsT, DefaultPropsT>((props: PropsT & DefaultPropsT) => {
    const HelpButton = (
      <button
        onClick={() =>
          window.open('https://github.com/mnieber/brainpiano#brainpiano')
        }
      >
        Help
      </button>
    );

    return (
      <div className={classnames('QuizFrameTopPanel mb-4')}>
        <div className="QuizFrameTopPanel__firstRow mb4 flex flex-row justify-between">
          <VoicingTitle query={props.quizState.query} />
          {HelpButton}
          <VoicingTitle
            label={
              props.quizState.nextQuery ? 'Next: ' : 'Welcome to BrainPiano!'
            }
            query={props.quizState.nextQuery}
          />
        </div>
        <GroupPicker className="flex-1" />
        <div className="flex flex-row justify-between mt-2">
          <ClefListView />
          <IoMenu />
        </div>
      </div>
    );
  })
);
