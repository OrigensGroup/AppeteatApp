import styled from 'styled-components/native';


export const CardContainer = styled.TouchableOpacity`
  height: ${({ theme }) => theme.spacing.multiple(13)};
  border-width: 1px;
  background-color: ${({ theme }) => theme.colors.textSecondary};
  border-radius:${({ theme }) => theme.spacing.multiple(3)};
  border-color: #c2c2c2;
 
`;
export const CardWrap = styled.View`
  padding: ${({ theme }) => theme.spacing.single};
`;

export const IconWrap = styled.View`
  padding: 0 ${({ theme }) => theme.spacing.half};
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.single};
`;
export const TextWrap = styled.View`
  height:${({ theme }) => theme.spacing.double};
  margin-left:  ${({ theme }) => theme.spacing.single};
  align-items: center;
`;
export const Circle = styled.View`
  height: ${({ theme }) => theme.spacing.double};
  width: ${({ theme }) => theme.spacing.double};
  border-radius: 7.5px;
  background-color: ${({ theme }) => theme.colors.active};;
  margin:  ${({ theme }) => theme.spacing.single} 0 0 ${({ theme }) => theme.spacing.double};
`;
export const DrinkDesc = styled.View`
  padding:  ${({ theme }) => theme.spacing.half} ${({ theme }) => theme.spacing.double} 0 ${({ theme }) => theme.spacing.multiple(5)};
`;
export const BottomContainer = styled.View`
margin:${({ theme }) => theme.spacing.double} ${({ theme }) => theme.spacing.double} 0 ${({ theme }) => theme.spacing.multiple(5)};
display: flex;
flex-direction: row;
justify-content: space-between;
`;
export const BookingInfo = styled.View`
display: flex;
flex-direction: row;
`;