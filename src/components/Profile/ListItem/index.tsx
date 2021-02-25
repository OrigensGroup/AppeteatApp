import React from 'react';

import { useNavigation } from '@react-navigation/native';

import Title from '../../Shared/Text';

import { ProfileLinkContainer, IconContainer, IconTextWrap, ArrowContainer } from './styles';

interface ListItemProps {
  title: string;
  icon?: React.ReactElement;
  icon2: React.ReactElement;
  navigateTo: string;
}

const ListItem: React.FunctionComponent<ListItemProps> = ({ icon, icon2, navigateTo, title }) => {
  const navigation = useNavigation();

  const navigate = (goTo: string) => () => {
    navigation.navigate(goTo);
  };

  return (
    <ProfileLinkContainer onPress={navigate(navigateTo)}>
      <IconContainer>{icon}</IconContainer>
      <IconTextWrap>
        <Title color="#000" fontSize={15}>
          {title}
        </Title>
      </IconTextWrap>
      <ArrowContainer>{icon2}</ArrowContainer>
    </ProfileLinkContainer>
  );
};

export default ListItem;
