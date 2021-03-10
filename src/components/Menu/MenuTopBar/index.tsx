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
      <IconButton color={theme.colors.textPrimary} iconName="ios-close" onClick={navigateBack} size={28} />
      <TitleWrapper>
        <Text bold color="primary" fontSize={20}>
          {menuTranslations.menu.title}
        </Text>
      </TitleWrapper>
      <IconButton color={theme.colors.textPrimary} iconName="filter" onClick={onClick} size={24} />
    </TopContainer>
  );
};

export default MenuTopBar;
