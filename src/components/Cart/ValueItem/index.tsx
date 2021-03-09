import React, { ReactElement } from 'react';

import currencyTranslations from '../../../translations/currency';
import Text from '../../shared/Text';

import { ValueItemContainer, ValueItemInfoContainer } from './styles';

interface ValueItemProps {
  title: string;
  value?: number;
  icon?: ReactElement;
  onItemClick?: () => void;
  color: 'primary' | 'secondary' | 'tertiary' | 'quartiary';
}

const ValueItem: React.FunctionComponent<ValueItemProps> = ({ color, icon, onItemClick, title, value }) => {
  return (
    <ValueItemContainer onPress={onItemClick}>
      <Text color={color} fontSize={16}>
        {title}
      </Text>
      <ValueItemInfoContainer>
        {icon && icon}
        {typeof value !== 'undefined' && (
          <Text color={color} fontSize={16}>
            {currencyTranslations.currencyField.placeholder}
            {value}
          </Text>
        )}
      </ValueItemInfoContainer>
    </ValueItemContainer>
  );
};

export default ValueItem;
