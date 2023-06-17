import { observer } from 'mobx-react-lite';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { useStore } from '/src/app/components';

type PropsT = React.PropsWithChildren<{}>;

export const ClefModulationSelector = observer((props: PropsT) => {
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
        {props.children}
      </KeyboardEventHandler>
    </KeyboardEventHandler>
  );
});
