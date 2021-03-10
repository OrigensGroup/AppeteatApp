import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ProfileLinkContainer, IconContainer, TextContainer, ArrowContainer } from './styles';
import Text from '../../shared/Text';

interface ListItemProps {
  title: string;
  icon?: React.ReactElement;
  icon2: React.ReactElement;
  navigateTo?: string;
  onClick?: () => void;
}

const ListItem: React.FunctionComponent<ListItemProps> = ({ icon, icon2, navigateTo, title,onClick }) => {
  const navigation = useNavigation();

  const navigate = () => {
    onClick && onClick();
    navigateTo && navigation.navigate(navigateTo);
  };

  return (
    <ProfileLinkContainer onPress={navigate} >
      <IconContainer>{icon}</IconContainer>
      <TextContainer>
        <Text color="primary" fontSize={15}>
          {title}
        </Text>
      </TextContainer>
      <ArrowContainer>{icon2}</ArrowContainer>
    </ProfileLinkContainer>
  );
};

export default ListItem;
