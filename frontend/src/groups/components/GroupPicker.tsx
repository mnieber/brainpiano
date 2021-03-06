import classnames from 'classnames';
import { action } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useDefaultProps, FC } from 'react-default-props-context';
import { Selection } from 'skandha-facets/Selection';

import { PickerValueT, ValuePicker } from 'src/utils/components/ValuePicker';
import { GroupT } from 'src/groups/types';

import './GroupPicker.scss';

type PropsT = {
  className?: any;
};

type DefaultPropsT = {
  groups: GroupT[];
  groupsSelection: Selection;
};

export const GroupPicker: FC<PropsT, DefaultPropsT> = observer((p: PropsT) => {
  const props = useDefaultProps<PropsT, DefaultPropsT>(p);

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
});
