import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

interface ButtonContainerProps {
  secondary?: boolean;
}

export const ManualLogInContainer = styled.View`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  flex: 1;
  padding: 0 ${({ theme }) => theme.spacing.multiple(4)};
`;


export const TextFieldsWrapper = styled.KeyboardAvoidingView`
  width: 100%;
  flex: 1;
  margin-top: ${({ theme }) => theme.spacing.triple};
  display: flex;
  justify-content: space-around;
`;

export const TextFieldWrapper = styled.View<ButtonContainerProps>`
  margin: 0 ${({ theme }) => theme.spacing.multiple(5)};
  margin-bottom: ${({ theme }) => theme.spacing.single};
  margin-top: ${({ theme }) => theme.spacing.single};
  ${({ secondary }) =>
    secondary &&
    `
    margin-bottom: 0; 
  `};
`;

export const TitleWrapper = styled.View`
  margin-bottom: ${({ theme }) => theme.spacing.double};
`;

export const PasswordsWrapper = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PasswordSeparator = styled.View`
  width: ${({ theme }) => theme.spacing.double};
`;

/// ////////////////// Buttons /////////////////////

export const LogInSection = styled.View`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: space-around;
  margin-top: ${({ theme }) => theme.spacing.triple};
  margin-bottom: ${({ theme }) => theme.spacing.double};
`;
