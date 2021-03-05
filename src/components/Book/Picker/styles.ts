import styled from 'styled-components/native';




export const PickerContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  background-color: #EEEBE8;
  border-radius: ${({ theme }) => theme.spacing.double};
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
  padding: ${({ theme }) => theme.spacing.double};
`;
