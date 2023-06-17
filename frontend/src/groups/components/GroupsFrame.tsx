import classnames from 'classnames';
import { observer } from 'mobx-react-lite';
import React from 'react';
import './GroupsFrame.scss';
import {
  GroupsFrameLeftPanel,
  GroupsFrameTopPanel,
} from '/src/groups/components';

type PropsT = React.PropsWithChildren<{}>;

export const GroupsFrame: React.FC<PropsT> = observer((props: PropsT) => {
  return (
    <div className={classnames('GroupsFrame flex flex-col')}>
      <GroupsFrameTopPanel />
      <div className={classnames('GroupsFrame__MidSection flex flex-row')}>
        <GroupsFrameLeftPanel />
        {props.children}
      </div>
    </div>
  );
});
