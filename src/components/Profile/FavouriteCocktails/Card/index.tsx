import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { MenuItem } from '../../../../types/MenuItem';
import Text from '../../../shared/Text';

import { CardContainer, DrinkImage, DrinkDesc, Container, DescriptionWrapper, ImageContainer } from './styles';

interface CardProps {
  item: MenuItem;
}

const Card: React.FunctionComponent<CardProps> = ({ item }) => {
  const navigation = useNavigation();

  const onCardClick = () => {
    navigation.navigate('Menu', { screen: 'SingleItem', params: { item }, initial: false });
  };

  return (
    <CardContainer>
      <Container onPress={onCardClick}>
        <ImageContainer>
          <DrinkImage source={{ uri: item.image }} />
        </ImageContainer>
        <DrinkDesc>
          <Text color="primary" fontSize={14}>
            {item.title}
          </Text>
          <DescriptionWrapper>
            <Text color="subtitles" fontSize={12}>
              {item.description}
            </Text>
          </DescriptionWrapper>
        </DrinkDesc>
      </Container>
    </CardContainer>
  );
};

export default Card;
