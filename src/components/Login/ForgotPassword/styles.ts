import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

interface ButtonContainerProps {
  secondary?: boolean;
}

export const ManualLogInContainer = styled.View`
  width: 100%;
  border-top-left-radius: ${({ theme }) => theme.spacing.triple};
  border-top-right-radius: ${({ theme }) => theme.spacing.triple};
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  flex: 1;
  padding: 0 ${({ theme }) => theme.spacing.multiple(4)};
  margin-bottom: ${({ theme }) => theme.spacing.double};
`;

export const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
});

export const TextFieldsWrapper = styled.KeyboardAvoidingView`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.triple};
  display: flex;
`;

export const TextFieldWrapper = styled.View<ButtonContainerProps>`
  margin: 0 ${({ theme }) => theme.spacing.multiple(5)};
  margin-bottom: ${({ theme }) => theme.spacing.multiple(5)};
  ${({ secondary }) =>
    secondary &&
    `
    margin-bottom: 0; 
  `};
`;

export const TitleWrapper = styled.View`
  margin-bottom: ${({ theme }) => theme.spacing.triple};
`;

///////////////////// Buttons /////////////////////

export const ButtonsWrapper = styled.View`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: space-around;
  margin-bottom: ${({ theme }) => theme.spacing.triple};
`;

export const GoBack = styled.TouchableOpacity``;

export const Continue = styled.TouchableOpacity``;