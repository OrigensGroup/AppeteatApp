import styled from 'styled-components/native';

export const CardMainContainer = styled.View`
padding-left: ${({ theme }) => theme.spacing.multiple(3)};
padding-right: ${({ theme }) => theme.spacing.multiple(3)};
`

export const CardContainer = styled.TouchableOpacity`
  width: 100%;
  height: ${({ theme }) => theme.spacing.multiple(15)};
  display: flex;
  flex-direction: row;
  border-width: 1px;
  background-color: #fff;
  border-radius: ${({ theme }) => theme.spacing.multiple(3)};
  border-color: #C2C2C2;
  border-bottom-width: 1px;
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
  width: ${({ theme }) => theme.spacing.multiple(15)};
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const DrinkImage = styled.Image`
  height: ${({ theme }) => theme.spacing.multiple(13)};
  width: ${({ theme }) => theme.spacing.multiple(13)};
  border-bottom-left-radius: ${({ theme }) => theme.spacing.multiple(3)};
  border-bottom-right-radius: ${({ theme }) => theme.spacing.multiple(3)};
  border-top-left-radius: ${({ theme }) => theme.spacing.multiple(3)};
  border-top-right-radius: ${({ theme }) => theme.spacing.multiple(3)};
`;

export const DrinkDesc = styled.View`
  padding-top: ${({ theme }) => theme.spacing.double};
  padding-left: ${({ theme }) => theme.spacing.double};
`;

export const TextTitle = styled.Text`
  font-size: 20px;
  color: #000000;
`;

export const SubTitle = styled.Text`
  font-size: 14px;
  color: #AFAFAF;
  margin-bottom: ${({ theme }) => theme.spacing.multiple(2)};
`;

export const Price = styled.Text`
  font-size: 20px;
  color: #F69019;
`;

export const PriceWrapper = styled.View`
`

export const LikeButton = styled.TouchableOpacity`
  width: ${({ theme }) => theme.spacing.multiple(4)};
  height: ${({ theme }) => theme.spacing.multiple(4)};
  margin-top: ${({ theme }) => theme.spacing.multiple(9)};
  margin-right: ${({ theme }) => theme.spacing.multiple(2)};
  background-color: #ECEBEBE6;
  border-radius: ${({ theme }) => theme.spacing.multiple(4)};
  justify-content: center;
  align-items: center;
`;
