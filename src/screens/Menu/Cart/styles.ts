import styled from "styled-components/native";

export const CartContainer = styled.View`
  background-color: #fff;
  height: 100%;
  width: 100%;
`;

export const TopCartWrapper = styled.View`
  background-color: #fff;
`;

export const BottomTotContainer = styled.View`
border-top-color: #000000; 
border-top-width:2px;
`;

export const TopBarWrapper = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin: 0 ${({ theme }) => theme.spacing.multiple(3)};
`;

export const LogoContainer = styled.View`
  height: ${({ theme }) => theme.spacing.multiple(12)};

`;
export const LogoImage = styled.Image`
  margin-top: ${({ theme }) => theme.spacing.single};
  margin-top: ${({ theme }) => theme.spacing.multiple(2)};
  width: ${({ theme }) => theme.spacing.multiple(12)};
  height: ${({ theme }) => theme.spacing.multiple(6)};
  resize-mode: contain;
`;


export const ListWrapper = styled.View`
margin-bottom: ${({ theme }) => theme.spacing.multiple(2)};
`;

export const TitleWrapper = styled.View`
padding-bottom: ${({ theme }) => theme.spacing.multiple(3)};
border-bottom-color: #AFAFAF; 
border-bottom-width:1px;
`;

export const TitleInfoWrapper = styled.View`
margin: 0 ${({ theme }) => theme.spacing.multiple(3)};
`;


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



export const SubTotal = styled.View`
flex-direction:row;
justify-content:space-between;
`;

export const ServiceFee = styled.View`
flex-direction:row;
justify-content:space-between;
align-items: center;
`;

export const InfoIconWrapper = styled.TouchableOpacity`
height: ${({ theme }) => theme.spacing.multiple(3)};
width: ${({ theme }) => theme.spacing.multiple(3)};
align-items: center;
justify-content: center;
margin-right: ${({ theme }) => theme.spacing.multiple(2)}; 
`;

export const ServiceFeeRightWrapper = styled.View`
flex-direction: row;
align-items: center;
`;


export const SubTotWrapper = styled.View`
margin-left: ${({ theme }) => theme.spacing.multiple(3)};
margin-right: ${({ theme }) => theme.spacing.multiple(3)};
margin-bottom: ${({ theme }) => theme.spacing.multiple(6)};
`;

export const AllertWrapper = styled.View`
margin: 0 ${({ theme }) => theme.spacing.multiple(3)};
`;


export const ItemsNumber = styled.Text`
  font-size: 18px;
  color: #FC7930;
  font-weight: bold;
`;

export const Price = styled.Text`
  font-size: 18px;
  color: black;
  font-weight: bold;
`;

export const Allert = styled.Text`
  font-size: 16px;
  color: #FC7930;
`;

export const SecondaryInfo = styled.Text`
  font-size: 16px;
  color: #AFAFAF;
`;

export const TipCounter = styled.Text`
  font-size: 18px;
  color: #AFAFAF;
`;

export const PrimaryInfo = styled.Text`
  font-size: 18px;
  color: black;
  font-weight: bold;
`;

export const ItemName = styled.Text`
  font-size: 18px;
  color: black;
  font-weight: bold;
  margin-left: ${({ theme }) => theme.spacing.multiple(6)};
`;

export const ButtonA1 = styled.TouchableOpacity`
margin-bottom: ${({ theme }) => theme.spacing.multiple(1)};
`

export const ButtonA2 = styled.TouchableOpacity`
`

export const BottomCartWrapper = styled.View`
    height: 100%;
    justify-content: flex-end;
  position:absolute;

`;

export const SparatorLineDiv = styled.View`
  border-top-color: #000000; 
  border-top-width: 1.3px;
`;

export const BottomCartOverlay = styled.View`
    justify-content: flex-end;
    background-color: #ffffff
  margin: 0 ${({ theme }) => theme.spacing.multiple(3)};
`;

export const BasketButtonWrapper = styled.View`
width: 100%;
justify-content: flex-end;
padding-bottom: ${({ theme }) => theme.spacing.multiple(1)};
`;

export const AddTipWrapper = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: ${({ theme }) => theme.spacing.multiple(2)} 0;
`;

export const OrderTotalWrapper = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
padding-bottom: ${({ theme }) => theme.spacing.multiple(2)};
`;

export const PlusIconButton = styled.TouchableOpacity`
height: ${({ theme }) => theme.spacing.multiple(3.5)};
width: ${({ theme }) => theme.spacing.multiple(3.5)};
align-items: center;
justify-content: center;
margin-right: ${({ theme }) => theme.spacing.multiple(1)};
`;

export const MinusIconButton = styled.TouchableOpacity`
height: ${({ theme }) => theme.spacing.multiple(4)};
width: ${({ theme }) => theme.spacing.multiple(4)};
align-items: center;
justify-content: center;
`;

export const TipCounterWrapper = styled.View`
flex-direction: row;
align-items: center;
justify-content: center;
`;

