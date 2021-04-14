import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.spacing.multiple(6)};
  width: ${({ theme }) => theme.spacing.multiple(6)};
  background-color: black;
  border-radius: ${({ theme }) => theme.spacing.single};
`;
