import { observer } from 'mobx-react-lite';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { useStore } from 'src/app/components';
import { clefLetters } from 'src/keyboard/keyConstants';

type PropsT = React.PropsWithChildren<{}>;

export const ClefSelector = observer((props: PropsT) => {
  const { preselectionStore } = useStore();

  return (
    <KeyboardEventHandler
      handleKeys={clefLetters}
      handleEventType="keydown"
      onKeyEvent={(key: string, e: any) => {
        preselectionStore.setClefLetter(key);
      }}
    >
      <KeyboardEventHandler
        handleKeys={clefLetters}
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
