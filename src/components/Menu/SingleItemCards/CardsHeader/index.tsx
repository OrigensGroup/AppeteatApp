import React from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useTheme } from 'styled-components';

import { MenuItem } from '../../../../types/MenuItem';

import IconButton from '../../../shared/IconButton';
import Text from '../../../shared/Text';

import { TitleWrapper, CardsHeaderContainer } from './styles';

interface CardsHeaderProps {
  item: MenuItem;
}

const CardsHeader: React.FunctionComponent<CardsHeaderProps> = ({ item }) => {
  const theme = useTheme();
  const navigation = useNavigation();

  const navigate = () => {
    navigation.goBack();
  };

  return (
    <CardsHeaderContainer>
      <IconButton color={theme.colors.textPrimary} iconName="ios-close" onClick={navigate} size={24} />
      <TitleWrapper>
        <Text bold color="primary" fontSize={20}>
          {item.title}
        </Text>
      </TitleWrapper>
      <IconButton
        color={theme.colors.textPrimary}
        iconName="md-heart-outline"
        onClick={() => Alert.alert('You like this!')}
        size={24}
      />
    </CardsHeaderContainer>
  );
};

export default CardsHeader;
