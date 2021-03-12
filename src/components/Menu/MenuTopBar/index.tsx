import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import IconButton from '../../shared/IconButton';

import Text from '../../shared/Text';

import { TopContainer, TitleWrapper, EmptyDiv } from './styles';

interface MenuTopBarProps {
  onClick?: () => void;
  title: string;
  hideFilter?: boolean;
  hideTitle?: boolean;
}

const MenuTopBar: React.FunctionComponent<MenuTopBarProps> = ({ hideFilter, hideTitle, onClick, title }) => {
  const theme = useTheme();
  const navigation = useNavigation();

  const navigateBack = () => {
    navigation.navigate('HomePage');
  };

  return (
    <TopContainer>
      <IconButton color={theme.colors.textPrimary} iconName="ios-close" onClick={navigateBack} size={28} />
      {!hideTitle && (
        <TitleWrapper>
          <Text bold color="primary" fontSize={20}>
            {title}
          </Text>
        </TitleWrapper>
      )}
      {!hideFilter ? (
        <IconButton color={theme.colors.textPrimary} iconName="filter" onClick={onClick} size={24} />
      ) : (
        <EmptyDiv />
      )}
    </TopContainer>
  );
};

export default MenuTopBar;
