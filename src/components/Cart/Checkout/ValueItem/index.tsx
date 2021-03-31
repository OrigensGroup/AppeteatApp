import React from 'react';
import { useTheme } from 'styled-components';

import currencyTranslations from '../../../../translations/currency';
import IconButton from '../../../shared/IconButton';
import Text from '../../../shared/Text';

import { ValueItemContainer, ValueItemInfoContainer, TextWrapp } from './styles';

interface ValueItemProps {
  title: string;
  value?: number;
  icon: string;
  onItemClick?: () => void;
  color: 'primary' | 'secondary' | 'tertiary' | 'quartiary';
}

const ValueItem: React.FunctionComponent<ValueItemProps> = ({ color, icon, onItemClick, title, value }) => {
  const theme = useTheme();

  return (
    <ValueItemContainer onPress={onItemClick}>
      <IconButton color={theme.colors.textPrimary} iconName={icon} size={28} />
      <TextWrapp>
        <Text color={color} fontSize={14}>
          {title}
        </Text>
      </TextWrapp>
      <ValueItemInfoContainer>
        {typeof value !== 'undefined' && (
          <Text color={color} fontSize={14}>
            {currencyTranslations.currencyField.placeholder}
            {value}
          </Text>
        )}
      </ValueItemInfoContainer>
    </ValueItemContainer>
  );
};

export default ValueItem;
