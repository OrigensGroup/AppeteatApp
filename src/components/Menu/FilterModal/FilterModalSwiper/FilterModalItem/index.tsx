import React from 'react';
import Text from '../../../../shared/Text';

import { ModalItemContainer, ModalItemTextWrapper } from './styles';

interface FilterModalItemProps {
  item: any;
  onClick: () => void;
}

const FilterModalItem: React.FunctionComponent<FilterModalItemProps> = ({ item, onClick }) => {
  return (
    <ModalItemContainer>
      <ModalItemTextWrapper>
        <Text color="primary" fontSize={18}>
          {item.title}
        </Text>
      </ModalItemTextWrapper>
    </ModalItemContainer>
  );
};

export default FilterModalItem;
