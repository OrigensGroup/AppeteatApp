import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import CountDown from 'react-native-countdown-component';

import { PromotionContainer, PromotionTitle, styles, TimerWrap } from './styles';
import { useTheme } from 'styled-components';
import Title from '../../Shared/Text';
import { CurrentRenderContext } from '@react-navigation/native';

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
       <PromotionTitle><Title fontSize={22} color='#fff' bold>Happy Hour</Title></PromotionTitle>
        {/* <PromotionDesc>Pay 1, Get 2</PromotionDesc> */}
        <TimerWrap>
          <CountDown
        size={30}
        until={1000}
        digitStyle={{ backgroundColor: theme.colors.textSecondary, width: 102, height: 80, borderRadius: 24, borderWidth: 1, borderColor: '#c2c2c2' }}
        digitTxtStyle={{ color: theme.colors.textPrimary, fontSize: 40 }}
        timeLabelStyle={{ color: theme.colors.textSecondary, fontSize: 15}}
        separatorStyle={{color: '#fff', fontSize: 50}}
        timeToShow={['H', 'M']}
        timeLabels={{h: 'Hours', m: 'Minutes'}}
        showSeparator
      />
        </TimerWrap>
      </LinearGradient>
    </PromotionContainer>
  );
};

export default Promotion;
