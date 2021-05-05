import { observer } from 'mobx-react-lite';
import { useDefaultProps, FC } from 'react-default-props-context';
import Dropdown, { MenuItem } from '@trendmicro/react-dropdown';
import { QuizState } from 'src/quiz/QuizState';
import { cache, parseVoicingGroups } from 'src/voicings/parse';

import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-dropdown/dist/react-dropdown.css';

import './IoMenu.scss';

const twitterUrl = `https://twitter.com/intent/tweet?url=www.brainpiano.ai&hashtags=BrainPiano`;

type PropsT = {};

type DefaultPropsT = {
  quizState: QuizState;
};

export const IoMenu: FC<PropsT, DefaultPropsT> = observer((p: PropsT) => {
  const props = useDefaultProps<PropsT, DefaultPropsT>(p);

  return (
    <Dropdown
      onSelect={(eventKey: any) => {
        if (eventKey === 1) {
          navigator.clipboard.writeText(JSON.stringify(cache.data, null, 2));
        }
        if (eventKey === 2) {
          window.open(twitterUrl);
        }
        if (eventKey === 3) {
          navigator.clipboard.readText().then((clipText) => {
            debugger;
            props.quizState.setGroups(parseVoicingGroups(JSON.parse(clipText)));
          });
        }
      }}
      autoOpen={true}
      pullRight={true}
    >
      <Dropdown.Toggle btnSize="lg" btnStyle="flat">
        IO
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <MenuItem eventKey={1}>Export</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={2}>Tweet</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3}>Import</MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  );
});
