import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import CountDown from 'react-native-countdown-component';

import { useTheme } from 'styled-components';

import { HappyHourPromotionCardContainer, HappyHourPromotionCardTimerContainer, styles } from './styles';
import Text from '../../../Shared/Text';

interface HappyHourPromotionCardProps {
  endDate: number;
  onClick?: () => void;
}

const HappyHourPromotionCard: React.FunctionComponent<HappyHourPromotionCardProps> = ({ endDate, onClick }) => {
  const theme = useTheme();

  const dateDifference = endDate - new Date().getTime();
  const secUntilDate = dateDifference / 1000;

  return (
    <HappyHourPromotionCardContainer onPress={onClick}>
      <LinearGradient colors={['#DEB98E', '#FFB803']} style={styles.linearGradient}>
        <Text fontSize={24} color="#ffffff" align="center">
          Happy Hour
        </Text>
        <HappyHourPromotionCardTimerContainer>
          <CountDown
            digitStyle={{ backgroundColor: theme.colors.textSecondary, width: 104, height: 72 }}
            digitTxtStyle={{ color: theme.colors.textPrimary, fontSize: 40 }}
            size={20}
            timeLabelStyle={{ color: theme.colors.textPrimary, fontSize: 15 }}
            timeToShow={['H', 'M']}
            until={secUntilDate}
          />
        </HappyHourPromotionCardTimerContainer>
      </LinearGradient>
    </HappyHourPromotionCardContainer>
  );
};

export default HappyHourPromotionCard;
