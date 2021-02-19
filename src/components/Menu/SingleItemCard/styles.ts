import styled from 'styled-components/native';

export const Wrapper = styled.View`
background-color: #fff;
height: 100%;
width: 100%;
`;


export const PicWrapper = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 ${({ theme }) => theme.spacing.multiple(3)};
  margin-bottom: ${({ theme }) => theme.spacing.double};
`;

export const ItemPic = styled.Image`
  height: ${({ theme }) => theme.spacing.multiple(40)};
  width: 100%;
  border-bottom-left-radius: ${({ theme }) => theme.spacing.double};
  border-bottom-right-radius: ${({ theme }) => theme.spacing.double};
  border-top-left-radius: ${({ theme }) => theme.spacing.double};
  border-top-right-radius: ${({ theme }) => theme.spacing.double};
`;

export const ButtonsWrapper = styled.View`
  margin-top: ${({ theme }) => theme.spacing.multiple(2)};
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.multiple(3)};
  margin-bottom: ${({ theme }) => theme.spacing.multiple(3)};
`;

export const DetailsContainer = styled.View`
width: 100%;
background-color: #fff;
`;

export const ItemDetails = styled.View`
  padding: 0 ${({ theme }) => theme.spacing.multiple(3)};
  background-color: #fff;
  width: 100%;
`;

export const DetailsTopRow = styled.View`
margin-top: ${({ theme }) => theme.spacing.single};
margin-bottom: ${({ theme }) => theme.spacing.single};
flex-direction: row;
justify-content: space-between;
`;

export const TitleWrapper = styled.View`
  justify-content: center;
  align-items: center;
  border-bottom-color: #FC7930;
  border-bottom-width: 3px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: black;
  font-weight: bold;
`;

export const Price = styled.Text`
  font-size: 20px;
  color: black;
  font-weight: bold;
`;

export const ItemDescription = styled.Text`
  font-size: 14px;
  color: black;
  margin-bottom: ${({ theme }) => theme.spacing.single};
`;


export const AllertWrapper = styled.TouchableOpacity`
`;

export const AllergiesAllert = styled.Text`
  font-size: 14px;
  color: orange;
`;


export const IngredientsWrapper = styled.View`
margin-top: ${({ theme }) => theme.spacing.multiple(5)};
`

export const IngredientsTopRow = styled.View`
flex-direction: row;
justify-content: space-between;
`
export const CustomiseItem = styled.TouchableOpacity`
`

export const OrangeBoldText = styled.Text`
  font-size: 14px;
  color: orange;
  font-weight: bold;
`;

export const BoldText = styled.Text`
  font-size: 14px;
  color: black;
  font-weight: bold;
`;


export const Text = styled.Text`
  font-size: 14px;
  color: black;
`;

export const BasketButtonWrapper = styled.View`
width: 100%;
height: 100%;
position: absolute;
justify-content: flex-end;
padding-bottom: ${({ theme }) => theme.spacing.multiple(1)};
padding-left: ${({ theme }) => theme.spacing.multiple(3)};
padding-right: ${({ theme }) => theme.spacing.multiple(3)};
`;




