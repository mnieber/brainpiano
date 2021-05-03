import React from 'react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';

import './GroupsFrameTopPanel.scss';

type PropsT = React.PropsWithChildren<{}>;

export const GroupsFrameTopPanel: React.FC<PropsT> = observer(() => {
  return (
    <div
      className={classnames('GroupsFrameTopPanel')}
    >
    </div>
  );
});