import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Text from '../../shared/Text';

import { ProfileLinkContainer, IconContainer, TextContainer, ArrowContainer } from './styles';

interface ListItemProps {
  title: string;
  icon?: React.ReactElement;
  icon2: React.ReactElement;
  navigateTo?: string;
  onClick?: () => void;
}

const ListItem: React.FunctionComponent<ListItemProps> = ({ icon, icon2, navigateTo, onClick, title }) => {
  const navigation = useNavigation();

  const navigate = () => {
    onClick && onClick();
    navigateTo && navigation.navigate(navigateTo);
  };

  return (
    <ProfileLinkContainer onPress={navigate}>
      <IconContainer>{icon}</IconContainer>
      <TextContainer>
        <Text color="primary" fontSize={14}>
          {title}
        </Text>
      </TextContainer>
      <ArrowContainer>{icon2}</ArrowContainer>
    </ProfileLinkContainer>
  );
};

export default ListItem;
