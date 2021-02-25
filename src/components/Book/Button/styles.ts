import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.active};
  border-radius: ${({ theme }) => theme.spacing.double};
  padding: ${({ theme }) => theme.spacing.single};
`;
