import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import IconButton from '../IconButton';

import Text from '../Text';

import { TopContainer, TitleWrapper, EmptyDiv } from './styles';

interface TopBarProps {
  onClick?: () => void;
  title: string;
  hideFilter?: boolean;
  hideTitle?: boolean;
  back: 'HomePage' | 'MenuList' | 'back';
}

const TopBar: React.FunctionComponent<TopBarProps> = ({ back, hideFilter, hideTitle, onClick, title }) => {
  const theme = useTheme();
  const navigation = useNavigation();

  const navigateBack = () => {
    if (back === 'back') {
      navigation.navigate('App', { screen: 'Account', params: { screen: 'Orders' } });

      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'MenuList',
          },
        ],
      });
    } else {
      if (back === 'HomePage') {
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'MenuList',
            },
          ],
        });
      }

      navigation.navigate(back);
    }
  };

  return (
    <TopContainer>
      <IconButton color={theme.colors.textPrimary} iconName="chevron-back-sharp" onClick={navigateBack} size={32} />
      {!hideTitle && (
        <TitleWrapper>
          <Text bold color="primary" fontSize={20}>
            {title}
          </Text>
        </TitleWrapper>
      )}
      {!hideFilter ? (
        <IconButton color={theme.colors.textPrimary} iconName="search" onClick={onClick} size={24} />
      ) : (
        <EmptyDiv />
      )}
    </TopContainer>
  );
};

export default TopBar;
