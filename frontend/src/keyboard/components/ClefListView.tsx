import classnames from 'classnames';
import { observer } from 'mobx-react-lite';
import { always, map, pipe } from 'ramda';
import { withDefaultProps } from 'react-default-props-context';
import { stub } from 'skandha';
import { Selection } from 'skandha-facets';
import './ClefListView.scss';
import { ClefListViewItem } from '/src/keyboard/components';
import { ClefT } from '/src/keyboard/types';

type PropsT = {
  className?: any;
};

const DefaultProps = {
  clefs: stub as ClefT[],
  clefsSelection: stub as Selection,
};

export const ClefListView = observer(
  withDefaultProps((props: PropsT & typeof DefaultProps) => {
    const clefDivs = pipe(
      always(props.clefs),
      map((x) => (
        <ClefListViewItem
          key={x}
          clef={x}
          className={classnames({
            'ClefListViewItem--selected': props.clefsSelection.itemIds.includes(x),
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
  }, DefaultProps)
);
