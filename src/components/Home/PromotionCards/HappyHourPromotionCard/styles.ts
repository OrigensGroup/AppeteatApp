import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

interface CardSize {
  happyHourSize?: boolean;
}

export const HappyHourPromotionCardContainer = styled.TouchableOpacity<CardSize>`
  width: 100%;
  height: ${({ theme }) => theme.spacing.multiple(25)};

  display: flex;
  flex-direction: row;

  background-color: ${({ theme }) => theme.colors.textSecondary};

  border-radius: ${({ theme }) => theme.spacing.multiple(3)};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  ${({ happyHourSize }) =>
    happyHourSize &&
    `
    height: 176px;
    ;
  `};
`;

export const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderRadius: 16,
  },
});

export const HappyHourPromotionCardTimerContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin: auto;
`;

export const HappyHourTitleContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.double};
`;

export const DigitCounter = styled.View`
  display: flex;
  align-items: center;
`;

export const DigitBackground = styled.View`
  width: ${({ theme }) => theme.spacing.multiple(12)};
  height: ${({ theme }) => theme.spacing.multiple(10)};
  background: #ffffff;
  border-radius: ${({ theme }) => theme.spacing.multiple(3)};

  display: flex;
  align-items: center;
  justify-content: center;

  border-color: ${({ theme }) => theme.colors.border};
  border-width: 1px;
`;

export const DigitTitle = styled.View`
  margin-top: ${({ theme }) => theme.spacing.half};
`;

export const TimerDots = styled.View``;

export const TimerDot = styled.View`
  width: ${({ theme }) => theme.spacing.oneAndHalf};
  height: ${({ theme }) => theme.spacing.oneAndHalf};
  background: ${({ theme }) => theme.colors.fixedWhite};
  border-radius: ${({ theme }) => theme.spacing.multiple(3)};

  margin: 0 ${({ theme }) => theme.spacing.oneAndHalf} ${({ theme }) => theme.spacing.multiple(3)};

  border-color: ${({ theme }) => theme.colors.border};
  border-width: 1px;
`;
