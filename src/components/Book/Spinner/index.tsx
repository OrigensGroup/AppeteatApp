import React from 'react';
import InputSpinner from 'react-native-input-spinner';
import { useTheme } from 'styled-components';

import Text from '../../shared/Text';

import { TextContainer, Container } from './styles';

interface SpinnerProps {
  initialValue: string;
  title?: string;
  onChange: (amount: number) => void;
}

const Spinner: React.FunctionComponent<SpinnerProps> = ({ initialValue, onChange, title }) => {
  const theme = useTheme();

  return (
    <Container>
      <TextContainer>
        <Text color="primary" fontSize={15}>
          {title}
        </Text>
      </TextContainer>
      <InputSpinner
        color={theme.colors.quantityUpdate}
        max={50}
        min={1}
        onChange={onChange}
        step={1}
        textColor={theme.colors.textPrimary}
        value={initialValue}
      />
    </Container>
  );
};

export default Spinner;
