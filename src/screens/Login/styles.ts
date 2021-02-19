import styled from 'styled-components/native';

export const LoginContainer = styled.SafeAreaView`
  display: flex;
  padding: ${({ theme }) => theme.spacing.multiple(5)};
`;

export const TextFieldWrapper = styled.View`
  margin: ${({ theme }) => theme.spacing.multiple(6)};
`;

export const LogInContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.multiple(5)};
`;

export const RegisterContainer = styled.View``;

export const RegisterText = styled.Text`
  font-size: 16px;
  margin-bottom: ${({ theme }) => theme.spacing.multiple(4)};
`;
