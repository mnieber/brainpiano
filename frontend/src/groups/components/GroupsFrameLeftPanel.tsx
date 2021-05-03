import React from 'react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';

import './GroupsFrameLeftPanel.scss';

type PropsT = React.PropsWithChildren<{}>;

export const GroupsFrameLeftPanel: React.FC<PropsT> = observer(() => {
  return (
    <div
      className={classnames('GroupsFrameLeftPanel')}
    >
    </div>
  );
});