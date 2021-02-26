import React from 'react';
import Title from '../../../../../Shared/Text';

import { ModalItemContainer, ModalItemTextWrapper } from './styles';

interface FilterModalItemProps {
  item: any;
  onClick: () => void;
}

const FilterModalItem: React.FunctionComponent<FilterModalItemProps> = ({ item, onClick }) => {
  return (
    <ModalItemContainer>
      <ModalItemTextWrapper>
        <Title color="primary" fontSize={18} bold>
          {item.title}
        </Title>
      </ModalItemTextWrapper>
    </ModalItemContainer>
  );
};

export default FilterModalItem;
