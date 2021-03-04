import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

import {
  CardContainer,
  VenueImage,
  DrinkDesc,
  ImageContainer,
  ButtonContainer,
  LocationButton,
  Content,
  LocationButton2,
  Circle,
} from './styles';
import theme from '../../../theme';
import Title from '../../Shared/Text';

interface LocationCardProps {
  imageUrl: string;
  title: string;
  description: string;
  phoneNumber: string;
  onClick?: () => void;
}

const LocationCard: React.FunctionComponent<LocationCardProps> = ({ description, onClick, phoneNumber, title }) => {
  const navigation = useNavigation();

  const navigate = () => {
    navigation.navigate('BookTable', { title });
  };

  return (
    <CardContainer activeOpacity={0.9} onPress={onClick}>
      <ImageContainer>
        <VenueImage source={require('../../../img/jack.jpg')} />
      </ImageContainer>
      <Content>
        <Circle />
        <DrinkDesc>
          <Title fontSize={16} color="primary" bold>
            {title}
          </Title>
          <Title fontSize={12} color="primary">
            {description}
          </Title>
          <Title fontSize={12} color="tertiary">
            {phoneNumber}
          </Title>
        </DrinkDesc>
      </Content>
      <ButtonContainer>
        <LocationButton>
          <Icon color={theme.colors.textPrimary} name="share" size={28} />
        </LocationButton>
        <LocationButton2 onPress={navigate}>
          <Title fontSize={12} color="#F69019" bold>
            BOOK A TABLE
          </Title>
        </LocationButton2>
      </ButtonContainer>
    </CardContainer>
  );
};

export default LocationCard;
