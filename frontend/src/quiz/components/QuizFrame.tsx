import React from 'react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';

import { QuizFrameTopPanel } from 'src/quiz/components';

import './QuizFrame.scss';

type PropsT = React.PropsWithChildren<{}>;

export const QuizFrame: React.FC<PropsT> = observer((props: PropsT) => {
  return (
    <div
      className={classnames('QuizFrame flex flex-col')}
    >
      <QuizFrameTopPanel/>
      <div
        className={classnames('QuizFrame__MidSection flex flex-row')}
      >
        
        {props.children}
        
      </div>
      
    </div>
  );
});