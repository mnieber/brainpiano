import { observer } from 'mobx-react-lite';
import { useDefaultProps, FC } from 'react-default-props-context';
import Dropdown, { MenuItem } from '@trendmicro/react-dropdown';

import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-dropdown/dist/react-dropdown.css';

import './IoMenu.scss';

type PropsT = {};

type DefaultPropsT = {};

export const IoMenu: FC<PropsT, DefaultPropsT> = observer((p: PropsT) => {
  const props = useDefaultProps<PropsT, DefaultPropsT>(p);

  return (
    <Dropdown
      onSelect={(eventKey: any) => {
        console.log('Event key', eventKey);
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
        <MenuItem eventKey={3}>Tweet</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={2}>Import</MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  );
});
