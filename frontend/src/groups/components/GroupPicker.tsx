import classnames from 'classnames';
import { observer } from 'mobx-react-lite';
import { useDefaultProps, FC } from 'react-default-props-context';
import { Selection } from 'skandha-facets/Selection';
import { Highlight } from 'skandha-facets/Highlight';

import { PickerValueT, ValuePicker } from 'src/utils/components/ValuePicker';
import { GroupT } from 'src/groups/types';

type PropsT = {
};

type DefaultPropsT = {
  groups: GroupT[]
  groupsSelection: Selection
  groupsHighlight: Highlight
};

export const GroupPicker: FC<PropsT, DefaultPropsT> = observer((p: PropsT) => {
  const props = useDefaultProps<PropsT, DefaultPropsT>(p);

  const onChange = (value: PickerValueT) => {
    if (value.__isNew__) {
      // TODO: add group
    } else if (value.value) {
      props.groupsSelection.selectItem({
        itemId: value.value.id,
      });
    }
  };

  return (
    <div className={classnames('GroupPicker mt-2')}>
      <ValuePicker
        isMulti={false}
        isCreatable={true}
        pickableValues={props.groups}
        labelFromValue={(x: any) => x.name}
        pickableValue={props.groupsHighlight.item}
        onChange={onChange}
      />
    </div>
  );
});