import React from 'react';
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';
import { ClefT } from 'src/keyboard/types';

import './ClefListViewItem.scss';

export type PropsT = {
  clef: ClefT;
  onMouseDown: (event: any) => void;
  className?: any;
};

export const ClefListViewItem: React.FC<PropsT> = observer((props: PropsT) => {
  return (
    <div
      className={classnames('ClefListViewItem flex-1', props.className)}
      onMouseDown={props.onMouseDown}
    >
      {props.clef}
    </div>
  );
});
