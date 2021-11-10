import classnames from 'classnames';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { QuizFrameTopPanel } from 'src/quiz/components';
import './QuizFrame.scss';

type PropsT = React.PropsWithChildren<{}>;

export const QuizFrame: React.FC<PropsT> = observer((props: PropsT) => {
  return (
    <div className={classnames('QuizFrame flex flex-col px-2')}>
      <QuizFrameTopPanel />
      <div
        className={classnames(
          'QuizFrame__MidSection flex flex-row justify-center'
        )}
      >
        {props.children}
      </div>
    </div>
  );
});
