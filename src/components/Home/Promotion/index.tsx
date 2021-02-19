import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import CountDown from 'react-native-countdown-component';

import { PromotionContainer, PromotionTitle, styles, TimerWrap } from './styles';

interface PromotionProps {
  endDate: number;
  onClick?: () => void;
}

const Promotion: React.FunctionComponent<PromotionProps> = ({ endDate, onClick }) => {
  const dateDifference = endDate - new Date().getTime();
  const secUntilDate = dateDifference / 1000;

  return (
    <PromotionContainer onPress={onClick}>
      <LinearGradient colors={['#DEB98E', '#FFB803']} style={styles.linearGradient}>
        <PromotionTitle>Happy Hour</PromotionTitle>
        {/* <PromotionDesc>Pay 1, Get 2</PromotionDesc> */}
        <TimerWrap>
          <CountDown
            digitStyle={{ backgroundColor: '#FFF', width: 104, height: 72 }}
            digitTxtStyle={{ color: '#000000', fontSize: 40 }}
            size={20}
            timeLabelStyle={{ color: '#000000', fontSize: 15 }}
            timeToShow={['H', 'M']}
            until={secUntilDate}
          />
        </TimerWrap>
      </LinearGradient>
    </PromotionContainer>
  );
};

export default Promotion;
