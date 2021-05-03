import classnames from 'classnames';
import { always, flow, map } from 'lodash/fp';
import { observer } from 'mobx-react-lite';
import { useDefaultProps, FC } from 'react-default-props-context';
import { ClefListViewItem } from 'src/keyboard/components';
import { ClefT } from 'src/keyboard/types';
import { Selection } from 'skandha-facets/Selection';

import './ClefListView.scss';

type PropsT = {};

type DefaultPropsT = {
  clefs: ClefT[];
  clefsSelection: Selection;
};

export const ClefListView: FC<PropsT, DefaultPropsT> = observer((p: PropsT) => {
  const props = useDefaultProps<PropsT, DefaultPropsT>(p);

  const clefDivs = flow(
    always(props.clefs),
    map((x) => (
      <ClefListViewItem
        key={x}
        clef={x}
        className={classnames({
          'ClefListViewItem--selected': props.clefsSelection.ids.includes(x),
        })}
        onMouseDown={(e: any) => {
          props.clefsSelection.selectItem({
            itemId: x,
            isShift: false,
            isCtrl: true,
          });
        }}
      />
    ))
  )();

  const noItems = <h2>There are no clefs</h2>;

  return (
    <div className="ClefListView flex flex-row w-full">
      {clefDivs.length && clefDivs}
      {!clefDivs.length && noItems}
    </div>
  );
});
