import styled from 'styled-components/native';

export const PasswordContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  height: 100%;
`;
export const PasswordFieldContainer = styled.View`
  display: flex;
`;
export const PasswordField = styled.View`
  display: flex;
  flex-direction: row;
`;
