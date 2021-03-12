import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: ${({ theme }) => theme.spacing.multiple(30)};
  height: ${({ theme }) => theme.spacing.multiple(15)};
  display: flex;
  flex-direction: row;
  border-width: 1px;
  background-color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: ${({ theme }) => theme.spacing.double};
  border-color: ${({ theme }) => theme.colors.border};
  margin: ${({ theme }) => theme.spacing.single} 0 0 ${({ theme }) => theme.spacing.double};
`;

export const CardContainer = styled.View``;

export const DrinkImage = styled.Image`
  height: 100%;
  width: ${({ theme }) => theme.spacing.multiple(14)};
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
`;

export const DrinkDesc = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.single} 0 0 ${({ theme }) => theme.spacing.double};
`;

export const DescriptionWrapper = styled.View`
  padding-top: ${({ theme }) => theme.spacing.single};
`;
