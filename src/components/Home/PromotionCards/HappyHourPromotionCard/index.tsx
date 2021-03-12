import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from 'styled-components';

import homeTranslations from '../../../../translations/home';

import Text from '../../../shared/Text';

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
  happyHour?: boolean;
  happyHourSize?: boolean;
  disabled?: boolean;
}

const HappyHourPromotionCard: React.FunctionComponent<HappyHourPromotionCardProps> = ({
  endDate,
  happyHour,
  happyHourSize,
  disabled,
}) => {
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

      getTimeRemaining();
    }, 1000);
  };

  useEffect(() => {
    startTimer();

    return () => {
      if (interval.current) clearInterval(interval.current);
    };
  });

  return (
    <HappyHourPromotionCardContainer happyHourSize={happyHourSize} onPress={navigate} disabled={disabled}>
      <LinearGradient
        colors={[theme.colors.active, theme.colors.secondaryActive]}
        end={{ x: 1, y: 1 }}
        start={{ x: 0, y: 0 }}
        style={styles.linearGradient}
      >
        {!happyHour && (
          <HappyHourTitleContainer>
            <Text align="center" color="fixedWhite" fontSize={24}>
              {homeTranslations.happyHourCard.title}
            </Text>
          </HappyHourTitleContainer>
        )}
        <HappyHourPromotionCardTimerContainer>
          <DigitCounter>
            <DigitBackground>
              <Text bold color="fixedBlack" fontSize={36}>
                {String(Math.floor((countdown / (1000 * 60 * 60)) % 24)).padStart(2, '0')}
              </Text>
            </DigitBackground>
            <DigitTitle>
              <Text color="fixedWhite" fontSize={16} light>
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
              <Text bold color="fixedBlack" fontSize={36}>
                {String(Math.floor((countdown / 1000 / 60) % 60)).padStart(2, '0')}
              </Text>
            </DigitBackground>
            <DigitTitle>
              <Text color="fixedWhite" fontSize={16} light>
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
