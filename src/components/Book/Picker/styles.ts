import styled from 'styled-components/native';




export const PickerContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  background-color: ${({theme}) => theme.colors.quantityUpdate};
  border-radius: ${({ theme }) => theme.spacing.single};
  padding: ${({ theme }) => theme.spacing.single};
`;
export const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
`;
export const TextContainer = styled.View`
  padding: ${({ theme }) => theme.spacing.single} 0;
`;
export const Container = styled.View`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.half} ${({ theme }) => theme.spacing.double};
`;
