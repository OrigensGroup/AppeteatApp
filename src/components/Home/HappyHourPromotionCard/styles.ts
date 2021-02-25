import styled from 'styled-components/native';

import { StyleSheet } from 'react-native';

export const HappyHourPromotionCardContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: ${({ theme }) => theme.spacing.multiple(20)};

  background-color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: ${({ theme }) => theme.spacing.double};
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

  margin-top: ${({ theme }) => theme.spacing.double};
`;
