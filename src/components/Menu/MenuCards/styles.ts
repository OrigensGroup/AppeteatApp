import styled from 'styled-components/native';

export const CardContainer = styled.View`
  width: ${({ theme }) => theme.spacing.multiple(42)};
  height: ${({ theme }) => theme.spacing.multiple(14)};
  display: flex;
  flex-direction: row;
  border-width: 1px;
  background-color: #fff;
  border-radius:${({ theme }) => theme.spacing.double};
  border-color: transparent;
  border-bottom-width: 0;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  elevation: 6;
  margin-bottom: ${({ theme }) => theme.spacing.multiple(2)};
`;

export const ImageWrapper = styled.View`
  width: ${({ theme }) => theme.spacing.multiple(13)};
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const DrinkImage = styled.Image`
  height: ${({ theme }) => theme.spacing.multiple(11)};
  width: ${({ theme }) => theme.spacing.multiple(11)};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const DrinkDesc = styled.View`
  padding: ${({ theme }) => theme.spacing.double} 0 0
    ${({ theme }) => theme.spacing.double};
`;

export const DrinkLike = styled.View`
  padding: ${({ theme }) => theme.spacing.double} 0 0
    ${({ theme }) => theme.spacing.multiple(10)};
`;

export const TextTitle = styled.Text`
  font-size: 20px;
  color: black;
`;

export const ButtonWrapper = styled.View`
  height: 100%;
  margin-left:${({ theme }) => theme.spacing.multiple(1)};
  width: ${({ theme }) => theme.spacing.multiple(15)};
  justify-content: center;
  align-items: flex-end;
`;

export const AddToBasket = styled.TouchableOpacity`
  width:${({ theme }) => theme.spacing.multiple(7)};
  height:${({ theme }) => theme.spacing.multiple(3)};
  margin-top:${({ theme }) => theme.spacing.multiple(8)};
  background-color: #FC7930;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

export const Price = styled.Text`
  font-size: 12px;
  color: white;
`;
