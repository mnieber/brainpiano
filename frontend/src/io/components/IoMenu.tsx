import Dropdown, { MenuItem } from '@trendmicro/react-dropdown';
import { observer } from 'mobx-react-lite';
import { withDefaultProps } from 'react-default-props-context';
import { useStore } from 'src/app/components/useStore';
import { QuizState } from 'src/quiz/QuizState';
import { cache, parseVoicingGroups } from 'src/voicings/parse';

import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-dropdown/dist/react-dropdown.css';

import './IoMenu.scss';

const twitterUrl = `https://twitter.com/intent/tweet?url=https://mnieber.github.io/brainpiano&hashtags=BrainPiano`;

type PropsT = {};

type DefaultPropsT = {
  quizState: QuizState;
};

export const IoMenu = observer(
  withDefaultProps<PropsT, DefaultPropsT>((props: PropsT & DefaultPropsT) => {
    const appStore = useStore();

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
              appStore.groupsStore.setGroups(
                parseVoicingGroups(JSON.parse(clipText))
              );
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
  })
);
