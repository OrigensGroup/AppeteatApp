import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import CountDown from 'react-native-countdown-component';

import { useTheme } from 'styled-components';

import { PromotionContainer, PromotionTitle, styles, TimerWrap } from './styles';

interface PromotionProps {
  endDate: number;
  onClick?: () => void;
}

const Promotion: React.FunctionComponent<PromotionProps> = ({ endDate, onClick }) => {
  const theme = useTheme();

  const dateDifference = endDate - new Date().getTime();
  const secUntilDate = dateDifference / 1000;

  return (
    <PromotionContainer onPress={onClick}>
      <LinearGradient colors={['#DEB98E', '#FFB803']} style={styles.linearGradient}>
        <PromotionTitle>Happy Hour</PromotionTitle>
        {/* <PromotionDesc>Pay 1, Get 2</PromotionDesc> */}
        <TimerWrap>
          <CountDown
            digitStyle={{ backgroundColor: theme.colors.textSecondary, width: 104, height: 72 }}
            digitTxtStyle={{ color: theme.colors.textPrimary, fontSize: 40 }}
            size={20}
            timeLabelStyle={{ color: theme.colors.textPrimary, fontSize: 15 }}
            timeToShow={['H', 'M']}
            until={secUntilDate}
          />
        </TimerWrap>
      </LinearGradient>
    </PromotionContainer>
  );
};

export default Promotion;
