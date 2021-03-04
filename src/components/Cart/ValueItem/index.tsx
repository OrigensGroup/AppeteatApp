import React, { ReactElement } from 'react';
import Text from '../../Shared/Text';
import { ValueItemContainer, ValueItemInfoContainer } from './styles';

interface ValueItemProps {
  title: string;
  value?: number;
  icon?: ReactElement;
  onItemClick?: () => void;
  color: 'primary' | 'secondary' | 'tertiary' | 'quartiary';
}

const ValueItem: React.FunctionComponent<ValueItemProps> = ({ color, title, value, icon, onItemClick }) => {
  return (
    <ValueItemContainer onPress={onItemClick}>
      <Text color={color} fontSize={16}>
        {title}
      </Text>
      <ValueItemInfoContainer>
        {icon && icon}
        {typeof value !== 'undefined' && (
          <Text color={color} fontSize={16}>
            £ {value}
          </Text>
        )}
      </ValueItemInfoContainer>
    </ValueItemContainer>
  );
};

export default ValueItem;
