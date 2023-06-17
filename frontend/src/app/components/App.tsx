import { observer } from 'mobx-react-lite';
import React from 'react';
import './App.scss';
import { UrlRouter } from '/src/app/components/UrlRouter';
import { useStore } from '/src/app/components/useStore';

export const App = observer(() => {
  const appStore = useStore();

  React.useEffect(() => {
    function handleResize() {
      appStore.setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
  });

  const isPortrait = appStore.scaleFactor < 0.4;
  const useLandscapeDiv = (
    <div className="App__useLandscape">
      <div className="text-2xl my-auto mx-4">
        Please rotate your device to landscape mode
      </div>
    </div>
  );
  return (
    <div className="App w-screen">
      {isPortrait ? useLandscapeDiv : <UrlRouter />}
    </div>
  );
});
