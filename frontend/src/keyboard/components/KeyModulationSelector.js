import { observer } from 'mobx-react-lite';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { useStore } from 'src/app/components/StoreProvider';

export const KeyModulationSelector = observer(({ children }) => {
  const { preselectionStore } = useStore();

  return (
    <KeyboardEventHandler
      handleKeys={['up', 'down']}
      handleEventType="keydown"
      onKeyEvent={(key: string, e: any) => {
        preselectionStore.setIsSharpening(key === 'up');
        preselectionStore.setIsFlattening(key === 'down');
      }}
    >
      <KeyboardEventHandler
        handleKeys={['up', 'down']}
        handleEventType="keyup"
        onKeyEvent={(key: string, e: any) => {
          preselectionStore.reset();
        }}
      >
        {children}
      </KeyboardEventHandler>
    </KeyboardEventHandler>
  );
});
