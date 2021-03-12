import React from 'react';
import { Vibration } from 'react-native';
import InputSpinner from 'react-native-input-spinner';
import { useTheme } from 'styled-components';

import Text from '../../shared/Text';

import { TextContainer, Container } from './styles';

interface SpinnerProps {
  title?: string;
}

const Spinner: React.FunctionComponent<SpinnerProps> = ({ title }) => {
  const theme = useTheme();

  return (
    <Container>
      <TextContainer>
        <Text color="primary" fontSize={15}>
          {title}
        </Text>
      </TextContainer>
      <InputSpinner color={theme.colors.quantityUpdate} max={50} min={1} step={1} onDecrease={Vibration.vibrate}
        onIncrease={Vibration.vibrate} />
    </Container>
  );
};

export default Spinner;
