import styled from 'styled-components/native';


export const ModalContainer = styled.View`
  height: 100%;
  align-items: center;
  justify-content: flex-end;
`;

export const PopUpContainer = styled.View`
  background-color: #ffffff;
  height: 70%;
  width: 100%;
  border-top-left-radius: ${({ theme }) => theme.spacing.multiple(3)};
  border-top-right-radius: ${({ theme }) => theme.spacing.multiple(3)};
`;
export const SpinnerContainer = styled.View`
width: 50%;
padding: ${({ theme }) => theme.spacing.double};
`;
export const DateContainer = styled.View`
  display: flex;
  flex-direction: row;
`;
export const PickerContainer = styled.View`
 flex:1;
`;
export const ConfirmButton = styled.TouchableOpacity`
  flex:1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.single};
`;


