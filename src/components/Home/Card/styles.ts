import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
  width: ${({ theme }) => theme.spacing.multiple(30)};
  height: ${({ theme }) => theme.spacing.multiple(20)};
  display: flex;
  flex-direction: row;
  border-width: 1px;
  background-color: #fff;
  border-radius:${({ theme }) => theme.spacing.multiple(3)};
  border-color: transparent;
  border-bottom-width: 0;
  margin: ${({ theme }) => theme.spacing.single} ${({ theme }) => theme.spacing.double} ${({ theme }) =>
  theme.spacing.half} 0};
  shadow-color: #000;
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  elevation: 1;
`;

export const DrinkImage = styled.Image`
  height: 100%;
  width: ${({ theme }) => theme.spacing.multiple(14)};
  border-radius: ${({ theme }) => theme.spacing.multiple(3)};
`;
export const ImageContainer = styled.View`
  padding: ${({ theme }) => theme.spacing.single};
`;

export const DrinkDesc = styled.View`
  padding-top: ${({ theme }) => theme.spacing.single};
`;

export const DrinkLike = styled.View`
  display: flex;
  justify-content: flex-end;
  padding-bottom: ${({ theme }) => theme.spacing.single};
`;

export const TextTitle = styled.Text`
  font-size: 20px;
  color: black;
`;
