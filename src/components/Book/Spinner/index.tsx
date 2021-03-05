import React from 'react';
import InputSpinner from 'react-native-input-spinner';
import theme from '../../../theme';
import Text from '../../Shared/Text';

import {TextContainer, Container } from './styles';

interface SpinnerProps {
  title?: string;
}

const Spinner: React.FunctionComponent<SpinnerProps> = ({ title}) => {
  return <Container ><TextContainer>
              <Text color="primary" fontSize={15}>
                {title}
              </Text>
            </TextContainer>
            <InputSpinner
            color='#EEEBE8'
            max={50}
            min={1}
            onChange={(num) => {
              console.log(num);
            }}
            step={1}
          />
  </Container>
};

export default Spinner;
