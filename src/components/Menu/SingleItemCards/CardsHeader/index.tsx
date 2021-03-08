import React from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MenuItem } from '../../../../types/MenuItem';

import IconButton from '../../../Shared/IconButton';
import Text from '../../../Shared/Text';

import { TitleWrapper, CardsHeaderContainer } from './styles';
import { useTheme } from 'styled-components';

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
      <IconButton size={24} iconName="ios-close" color={theme.colors.textPrimary} onClick={navigate} />
      <TitleWrapper>
        <Text color="primary" fontSize={20} bold>
          {item.title}
        </Text>
      </TitleWrapper>
      <IconButton
        size={24}
        iconName="md-heart-outline"
        color={theme.colors.textPrimary}
        onClick={() => Alert.alert('You like this!')}
      />
    </CardsHeaderContainer>
  );
};

export default CardsHeader;
