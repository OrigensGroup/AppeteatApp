import styled from 'styled-components/native';



export const Wrapper = styled.View`
`;

export const ItemPic = styled.ImageBackground`
  width: 100%;
  height: ${({ theme }) => theme.spacing.multiple(40)};
  align-items: center;
`;

export const ButtonsWrapper = styled.View`
  margin-top: ${({ theme }) => theme.spacing.multiple(3)};
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
`;

export const DetailsContainer = styled.View`
height: 100%;
width: 100%;
background-color: #fff;
`;

export const ItemDetails = styled.View`
  margin: 0 auto;
  background-color: #fff;
  height: 100%;
  width: 90%;
`;

export const DetailsTopRow = styled.View`
margin-top: ${({ theme }) => theme.spacing.single};
margin-bottom: ${({ theme }) => theme.spacing.single};
flex-direction: row;
justify-content: space-between;
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
