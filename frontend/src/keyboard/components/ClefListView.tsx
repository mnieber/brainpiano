import classnames from 'classnames';
import { observer } from 'mobx-react-lite';
import { always, map, pipe } from 'ramda';
import { FC, useDefaultProps } from 'react-default-props-context';
import { Selection } from 'skandha-facets/Selection';
import { ClefListViewItem } from 'src/keyboard/components';
import { ClefT } from 'src/keyboard/types';
import './ClefListView.scss';

type PropsT = {
  className?: any;
};

type DefaultPropsT = {
  clefs: ClefT[];
  clefsSelection: Selection;
};

export const ClefListView: FC<PropsT, DefaultPropsT> = observer((p: PropsT) => {
  const props = useDefaultProps<PropsT, DefaultPropsT>(p);

  const clefDivs = pipe(
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
    <div
      className={classnames(
        'ClefListView flex flex-row w-full',
        props.className
      )}
    >
      {clefDivs.length && clefDivs}
      {!clefDivs.length && noItems}
    </div>
  );
});
