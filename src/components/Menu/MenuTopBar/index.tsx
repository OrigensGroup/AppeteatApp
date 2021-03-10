import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import IconButton from '../../shared/IconButton';
import menuTranslations from '../../../translations/menu';

import Text from '../../shared/Text';

import { TopContainer, TitleWrapper } from './styles';

interface MenuTopBarProps {
  onClick: () => void;
}

const MenuTopBar: React.FunctionComponent<MenuTopBarProps> = ({ onClick }) => {
  const theme = useTheme();
  const navigation = useNavigation();

  const navigateBack = () => {
    navigation.navigate('HomePage');
  };

  return (
    <TopContainer>
      <IconButton onClick={navigateBack} iconName="ios-close" size={28} color={theme.colors.textPrimary} />
      <TitleWrapper>
        <Text color="primary" fontSize={20} bold>
          {menuTranslations.menu.title}
        </Text>
      </TitleWrapper>
      <IconButton onClick={onClick} iconName="filter" size={24} color={theme.colors.textPrimary} />
    </TopContainer>
  );
};

export default MenuTopBar;
