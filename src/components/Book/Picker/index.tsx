import React from 'react';
import Text from '../../Shared/Text';

import { PickerContainer, IconContainer, TextContainer, Container } from './styles';

interface PickerProps {
  title?: string;
  icon: React.ReactElement;
  textValue?: string;
  dayValue?: number;
  monthValue?: string;
  timeValue?: string;

  onPress?: () => void;
}

const Picker: React.FunctionComponent<PickerProps> = ({onPress, icon, textValue, dayValue, monthValue, timeValue, title }) => {
  return <Container ><TextContainer>
              <Text color="primary" fontSize={15}>
                {title}
              </Text>
            </TextContainer><PickerContainer onPress={onPress}>
              <IconContainer>
                {icon}
              </IconContainer>
              <Text color="primary" fontSize={15}>
                {textValue}{dayValue} {monthValue}{timeValue}
              </Text>
  </PickerContainer>
  </Container>
};

export default Picker;
