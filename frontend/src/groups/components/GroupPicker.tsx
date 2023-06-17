import classnames from 'classnames';
import { action } from 'mobx';
import { observer } from 'mobx-react-lite';
import { withDefaultProps } from 'react-default-props-context';
import { Selection } from 'skandha-facets';

import { stub } from 'aspiration';
import { GroupT } from '/src/groups/types';
import { PickerValueT, ValuePicker } from '/src/utils/components/ValuePicker';

import './GroupPicker.scss';

type PropsT = {
  className?: any;
};

const DefaultProps = {
  groups: stub as GroupT[],
  groupsSelection: stub as Selection,
};

export const GroupPicker = observer(
  withDefaultProps((props: PropsT & typeof DefaultProps) => {
    const onChange = action((value: PickerValueT) => {
      const values: Array<any> = (value as any) ?? [];
      props.groupsSelection.ids = values.map((x) => x.value.id);
    });

    return (
      <div className={classnames('GroupPicker', props.className)}>
        <ValuePicker
          isMulti={true}
          isCreatable={false}
          pickableValues={props.groups}
          labelFromValue={(x: any) => x.name}
          pickableValue={props.groupsSelection.items}
          onChange={onChange}
        />
      </div>
    );
  }, DefaultProps)
);
