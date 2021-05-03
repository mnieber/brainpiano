import classnames from 'classnames';
import { observer } from 'mobx-react-lite';
import { useDefaultProps, FC } from 'react-default-props-context';
import { Selection } from 'skandha-facets/Selection';

import { PickerValueT, ValuePicker } from 'src/utils/components/ValuePicker';
import { GroupT } from 'src/groups/types';

type PropsT = {};

type DefaultPropsT = {
  groups: GroupT[];
  groupsSelection: Selection;
};

export const GroupPicker: FC<PropsT, DefaultPropsT> = observer((p: PropsT) => {
  const props = useDefaultProps<PropsT, DefaultPropsT>(p);

  const onChange = (value: PickerValueT) => {
    const values: Array<any> = (value as any) ?? [];
    props.groupsSelection.ids = values.map((x) => x.value.id);
  };

  return (
    <div className={classnames('GroupPicker mt-2')}>
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
