import React from 'react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';

import { GroupsFrameTopPanel } from 'src/groups/components';
import { GroupsFrameLeftPanel } from 'src/groups/components';

import './GroupsFrame.scss';

type PropsT = React.PropsWithChildren<{}>;

export const GroupsFrame: React.FC<PropsT> = observer((props: PropsT) => {
  return (
    <div
      className={classnames('GroupsFrame flex flex-col')}
    >
      <GroupsFrameTopPanel/>
      <div
        className={classnames('GroupsFrame__MidSection flex flex-row')}
      >
        <GroupsFrameLeftPanel/>
        {props.children}
        
      </div>
      
    </div>
  );
});