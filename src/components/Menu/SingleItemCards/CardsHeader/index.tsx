import React from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MenuItem } from '../../../../types/MenuItem';

import CloseButton from '../../MenuComponents/CloseButton';
import HeartButton from '../../MenuComponents/HeartButton';
import Text from '../../../Shared/Text';

import { TitleWrapper, CardsHeaderContainer } from './styles';

interface CardsHeaderProps {
  item: MenuItem;
}

const CardsHeader: React.FunctionComponent<CardsHeaderProps> = ({ item }) => {
  const navigation = useNavigation();

  const navigate = () => {
    navigation.goBack();
  };

  return (
    <CardsHeaderContainer>
      <CloseButton onClick={navigate} />
      <TitleWrapper>
        <Text color="primary" fontSize={20}>
          {item.title}
        </Text>
      </TitleWrapper>
      <HeartButton onClick={() => Alert.alert('You like this!')} />
    </CardsHeaderContainer>
  );
};

export default CardsHeader;
