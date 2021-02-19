import styled from "styled-components/native";


export const SingleCartItem = styled.View`
border-bottom-color: #AFAFAF; 
border-bottom-width:1px;
`;

export const CartItemLeftWrapper = styled.View`
flex-direction:row;
`;

export const ItemInfoWrapper = styled.View`
flex-direction:row;
justify-content:space-between;
padding-bottom: ${({ theme }) => theme.spacing.multiple(1)};
padding-top: ${({ theme }) => theme.spacing.multiple(1)};
 margin: 0 ${({ theme }) => theme.spacing.multiple(3)};
`

export const ItemName = styled.Text`
  font-size: 18px;
  color: black;
  font-weight: bold;
  margin-left: ${({ theme }) => theme.spacing.multiple(6)};
`;

export const Price = styled.Text`
  font-size: 18px;
  color: black;
  font-weight: bold;
`;


export const ItemsNumber = styled.Text`
  font-size: 18px;
  color: #FC7930;
  font-weight: bold;
`;