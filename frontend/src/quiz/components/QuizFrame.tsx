import classnames from 'classnames';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from 'src/app/components';
import { QuizFrameTopPanel } from 'src/quiz/components';
import './QuizFrame.scss';

type PropsT = React.PropsWithChildren<{}>;

export const QuizFrame: React.FC<PropsT> = observer((props: PropsT) => {
  const appStore = useStore();

  React.useEffect(() => {
    function handleResize() {
      appStore.setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
  });

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
