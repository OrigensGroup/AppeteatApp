import React from 'react';

import Text from '../../shared/Text';

import { PickerContainer, IconContainer, TextContainer, Container, PickerTextContainer } from './styles';

interface PickerProps {
  title?: string;
  icon: React.ReactElement;
  textValue?: string;

  onPress?: () => void;
}

const Picker: React.FunctionComponent<PickerProps> = ({ icon, onPress, textValue, title }) => {
  return (
    <Container>
      <TextContainer>
        <Text color="primary" fontSize={15}>
          {title}
        </Text>
      </TextContainer>
      <PickerContainer onPress={onPress}>
        <IconContainer>{icon}</IconContainer>
        <PickerTextContainer>
          <Text color="primary" fontSize={15}>
            {textValue}
          </Text>
        </PickerTextContainer>
      </PickerContainer>
    </Container>
  );
};

export default Picker;
