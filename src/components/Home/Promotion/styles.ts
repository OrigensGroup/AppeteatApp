import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const PromotionContainer = styled.TouchableOpacity`
  width: 100%;
  height: ${({ theme }) => theme.spacing.multiple(22)};
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: ${({ theme }) => theme.spacing.double};
  border-width: 1px;
  border-color: #c2c2c2;
`;

export const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderRadius: 15,
  },
});

export const PromotionTitle = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
