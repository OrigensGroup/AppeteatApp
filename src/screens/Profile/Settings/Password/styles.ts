import styled from 'styled-components/native';

export const PasswordContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.textSecondary};
  height: 100%;
`;

export const PasswordWrap = styled.View`
  margin: ${({ theme }) => theme.spacing.single};
`;
