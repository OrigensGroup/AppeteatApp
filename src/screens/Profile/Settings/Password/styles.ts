import styled from 'styled-components/native';

export const PasswordContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  height: 100%;
  padding: ${({ theme }) => theme.spacing.single};
`;
