import React from 'react';
import { useTheme } from 'styled-components';
import { t } from '../../../../translations';

import IconButton from '../../../shared/IconButton';
import Text from '../../../shared/Text';

import { ValueItemContainer, ValueItemInfoContainer, TextWrapp } from './styles';

interface ValueItemProps {
  title: string;
  value?: number;
  icon: string;
  onItemClick?: () => void;
  color: 'primary' | 'secondary' | 'tertiary' | 'quartiary' | 'errorColor';
}

const ValueItem: React.FunctionComponent<ValueItemProps> = ({ color, icon, onItemClick, title, value }) => {
  const theme = useTheme();

  return (
    <ValueItemContainer onPress={onItemClick}>
      <IconButton color={theme.colors.textPrimary} iconName={icon} size={28} />
      <TextWrapp>
        <Text color={color} fontSize={12}>
          {title}
        </Text>
      </TextWrapp>
      <ValueItemInfoContainer>
        {typeof value !== 'undefined' && (
          <Text color={color} fontSize={14}>
            {t('currencyTranslations.currencyField')}
            {value}
          </Text>
        )}
      </ValueItemInfoContainer>
    </ValueItemContainer>
  );
};

export default ValueItem;
