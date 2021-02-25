import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const PromotionContainer = styled.TouchableOpacity`
  width: 100%;
  height: ${({ theme }) => theme.spacing.multiple(20)};
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: ${({ theme }) => theme.spacing.double};
`;

export const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderRadius: 16,
  },
});

export const PromotionTitle = styled.Text`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  font-size: ${({ theme }) => theme.spacing.multiple(3)};
`;

export const PromotionDesc = styled.Text`
  color: ${({ theme }) => theme.colors.inactive};
  text-align: center;
  font-size: ${({ theme }) => theme.spacing.double};
`;

export const TimerWrap = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.double};
`;
