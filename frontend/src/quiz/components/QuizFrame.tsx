import classnames from 'classnames';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { QuizFrameTopPanel } from 'src/quiz/components';
import './QuizFrame.scss';

type PropsT = React.PropsWithChildren<{}>;

export const QuizFrame: React.FC<PropsT> = observer((props: PropsT) => {
  const onResize = () => {
    console.log(window.innerWidth);
  };

  React.useEffect(() => {
    function handleResize() {
      console.log('resized to: ', window.innerWidth, 'x', window.innerHeight);
    }

    window.addEventListener('resize', handleResize);
  });

  return (
    <div className={classnames('QuizFrame flex flex-col')}>
      <QuizFrameTopPanel />
      <div className={classnames('QuizFrame__MidSection flex flex-row')}>
        {props.children}
      </div>
    </div>
  );
});
