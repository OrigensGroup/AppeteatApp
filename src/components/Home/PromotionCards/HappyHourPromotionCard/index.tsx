import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from 'styled-components';

import homeTranslations from '../../../../translations/home';
import { Promotion } from '../../../../types/Promotion';

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
  item: Promotion;
  happyHour?: boolean;
  happyHourSize?: boolean;
  disabled?: boolean;
}

const HappyHourPromotionCard: React.FunctionComponent<HappyHourPromotionCardProps> = ({
  disabled,
  happyHour,
  happyHourSize,
  item,
}) => {
  const theme = useTheme();
  const navigation = useNavigation();
  const interval = useRef<NodeJS.Timeout>();

  const calculateCountdown = useCallback(() => {
    const end = Date.parse(item.endDate || new Date().toString());
    const start = Date.parse(item.startDate || new Date().toString());

    if (end < start) {
      return 0;
    }

    return end - start;
  }, [item.endDate, item.startDate]);

  const [countdown, setCountdown] = useState(() => calculateCountdown());

  const navigate = () => {
    navigation.navigate('HappyHourMenu', { item });
  };

  const startTimer = useCallback(() => {
    interval.current = setInterval(() => {
      if (countdown <= 0) {
        if (interval.current) clearInterval(interval.current);
      }

      const end = Date.parse(item.endDate || new Date().toString());
      const now = Date.parse(new Date().toString());

      const newCountdownValue = end < now ? 0 : end - now;

      setCountdown(newCountdownValue);
    }, 1000);
  }, [item.endDate, countdown]);

  useEffect(() => {
    startTimer();

    return () => {
      if (interval.current) clearInterval(interval.current);
    };
  }, [startTimer]);

  useEffect(() => {
    calculateCountdown();
  }, [item.endDate, calculateCountdown]);

  return (
    <HappyHourPromotionCardContainer disabled={disabled} happyHourSize={happyHourSize} onPress={navigate}>
      <LinearGradient
        colors={[theme.colors.active, theme.colors.secondaryActive]}
        end={{ x: 1, y: 1 }}
        start={{ x: 0, y: 0 }}
        style={styles.linearGradient}
      >
        {!happyHour && (
          <HappyHourTitleContainer>
            <Text align="center" color="fixedWhite" fontSize={24}>
              {item.title}
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
