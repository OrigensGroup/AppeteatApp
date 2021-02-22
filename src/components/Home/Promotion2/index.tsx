import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import CountDown from 'react-native-countdown-component';

import { PromotionContainer } from './styles';

interface Promotion2Props {
  onClick?: () => void;
}

const Promotion2: React.FunctionComponent<Promotion2Props> = ({ onClick }) => {
  return <PromotionContainer onPress={onClick} />;
};

export default Promotion2;
