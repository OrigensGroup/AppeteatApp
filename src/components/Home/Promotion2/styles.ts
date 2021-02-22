import styled from 'styled-components/native';

export const PromotionContainer = styled.TouchableOpacity`
  width: 100%;
  height: ${({ theme }) => theme.spacing.multiple(22)};
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-width: 1px;
  border-color: #C2C2C2;
  border-radius: ${({ theme }) => theme.spacing.double};
`;
export const PromotionImage = styled.Image`
  height: 100%;
  width: ${({ theme }) => theme.spacing.multiple(14)};
  border-radius: ${({ theme }) => theme.spacing.multiple(3)};
`;
export const ImageContainer = styled.View`
  padding: ${({ theme }) => theme.spacing.oneAndHalf};
`;

export const PromotionDesc = styled.View`
  padding-top: ${({ theme }) => theme.spacing.oneAndHalf};
`;

export const PromotionButton = styled.View`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.oneAndHalf};
  right:  ${({ theme }) => theme.spacing.oneAndHalf};
`;
export const OrderButton = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.spacing.single};
  align-items: center;
  border-radius: ${({ theme }) => theme.spacing.multiple(3)};
  background-color: #F69019;
`;
export const TextTitle = styled.Text`
  font-size: 20px;
  color: black;
`;
