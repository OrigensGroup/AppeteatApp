import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from 'styled-components';
import homeTranslations from '../../../../translations/home';

import Text from '../../../Shared/Text';

import {
  HappyHourPromotionCardContainer,
  HappyHourPromotionCardTimerContainer,
  styles,
  HappyHourTitleContainer,
  DigitCounter,
  DigitBackground,
  DigitTitle,
  TimerDots,
  TimerDot,
} from './styles';

interface HappyHourPromotionCardProps {
  endDate: string;
}

const HappyHourPromotionCard: React.FunctionComponent<HappyHourPromotionCardProps> = ({ endDate }) => {
  const theme = useTheme();
  const navigation = useNavigation();
  const interval = useRef<NodeJS.Timeout>();
  const [countdown, setCountdown] = useState(() => {
    const end = Date.parse(endDate);
    const now = Date.parse(new Date().toString());

    if (end < now) {
      return 0;
    }
    return end - now;
  });

  const navigate = () => {
    navigation.navigate('HappyHourMenu');
  };

  const getTimeRemaining = () => {
    const end = Date.parse(endDate);
    const now = Date.parse(new Date().toString());

    const newCountdownValue = end < now ? 0 : end - now;
    const seconds = Math.floor((newCountdownValue / 1000) % 60);
    const minutes = Math.floor((newCountdownValue / 1000 / 60) % 60);
    const hours = Math.floor((newCountdownValue / (1000 * 60 * 60)) % 24);
    const days = Math.floor(newCountdownValue / (1000 * 60 * 60 * 24));

    setCountdown(newCountdownValue);

    return {
      newCountdownValue,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = () => {
    interval.current = setInterval(() => {
      if (countdown <= 0) {
        if (interval.current) clearInterval(interval.current);
      }

      const t = getTimeRemaining();
    }, 1000);
  };

  useEffect(() => {
    startTimer();

    return () => {
      if (interval.current) clearInterval(interval.current);
    };
  }, []);

  return (
    <HappyHourPromotionCardContainer onPress={navigate}>
      <LinearGradient
        colors={[theme.colors.active, theme.colors.secondaryActive]}
        style={styles.linearGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <HappyHourTitleContainer>
          <Text fontSize={24} color="secondary" align="center">
            {homeTranslations.happyHourCard.title}
          </Text>
        </HappyHourTitleContainer>
        <HappyHourPromotionCardTimerContainer>
          <DigitCounter>
            <DigitBackground>
              <Text color="primary" bold fontSize={36}>
                {String(Math.floor((countdown / (1000 * 60 * 60)) % 24)).padStart(2, '0')}
              </Text>
            </DigitBackground>
            <DigitTitle>
              <Text color="secondary" light fontSize={16}>
                {homeTranslations.happyHourCard.hourDigit}
              </Text>
            </DigitTitle>
          </DigitCounter>
          <TimerDots>
            <TimerDot />
            <TimerDot />
          </TimerDots>
          <DigitCounter>
            <DigitBackground>
              <Text color="primary" bold fontSize={36}>
                {String(Math.floor((countdown / 1000 / 60) % 60)).padStart(2, '0')}
              </Text>
            </DigitBackground>
            <DigitTitle>
              <Text color="secondary" light fontSize={16}>
                {homeTranslations.happyHourCard.minutesDigit}
              </Text>
            </DigitTitle>
          </DigitCounter>
        </HappyHourPromotionCardTimerContainer>
      </LinearGradient>
    </HappyHourPromotionCardContainer>
  );
};

export default HappyHourPromotionCard;
