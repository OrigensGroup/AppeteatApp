import styled from 'styled-components/native';

export const CardMainContainer = styled.View`
padding-left: ${({ theme }) => theme.spacing.multiple(3)};
padding-right: ${({ theme }) => theme.spacing.multiple(3)};
`

export const CardContainer = styled.TouchableOpacity`
  width: 100%;
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
  elevation: 5;
  margin-bottom: ${({ theme }) => theme.spacing.multiple(2)};
  justify-content: space-between;
`;
export const CardWrapper = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  margin-right: ${({ theme }) => theme.spacing.multiple(3)};
  justify-content: space-between;
`;

export const LeftWrapper = styled.View`
  height: 100%;
  flex-direction: row;
`;

export const RightWrapper = styled.View`
  height: 100%;
  flex-direction: row;
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
  border-bottom-left-radius: ${({ theme }) => theme.spacing.double};
  border-bottom-right-radius: ${({ theme }) => theme.spacing.double};
  border-top-left-radius: ${({ theme }) => theme.spacing.double};
  border-top-right-radius: ${({ theme }) => theme.spacing.double};
`;

export const DrinkDesc = styled.View`
  padding-top: ${({ theme }) => theme.spacing.double};
  padding-left: ${({ theme }) => theme.spacing.double};
`;


export const TextTitle = styled.Text`
  font-size: 20px;
  color: black;
`;

export const AddToBasket = styled.TouchableOpacity`
  width:${({ theme }) => theme.spacing.multiple(7)};
  height:${({ theme }) => theme.spacing.multiple(3)};
  margin-top:${({ theme }) => theme.spacing.multiple(9)};
  margin-right:${({ theme }) => theme.spacing.multiple(2)};
  background-color: #FC7930;
  border-radius: ${({ theme }) => theme.spacing.double};
  justify-content: center;
  align-items: center;
`;

export const Price = styled.Text`
  font-size: 12px;
  color: white;
`;
