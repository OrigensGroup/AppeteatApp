import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
  width: ${({ theme }) => theme.spacing.multiple(35)};
  height: ${({ theme }) => theme.spacing.multiple(20)};
  display: flex;
  flex-direction: row;
  border-width: 1px;
  background-color: #fff;
  border-radius:${({ theme }) => theme.spacing.double};
  border-color: transparent;
  border-bottom-width: 0;
  margin: ${({ theme }) => theme.spacing.single} ${({ theme }) => theme.spacing.double} ${({ theme }) =>
  theme.spacing.half} 0};
  shadow-color: #000;
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  elevation: 6;
`;

export const DrinkImage = styled.Image`
  height: 100%;
  width: ${({ theme }) => theme.spacing.multiple(14)};
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
`;

export const DrinkDesc = styled.View`
  padding: ${({ theme }) => theme.spacing.double} 0 0 ${({ theme }) => theme.spacing.double};
`;

export const DrinkLike = styled.View`
  padding: ${({ theme }) => theme.spacing.double} 0 0 ${({ theme }) => theme.spacing.multiple(5)};
`;

export const TextTitle = styled.Text`
  font-size: 20px;
  color: black;
`;
