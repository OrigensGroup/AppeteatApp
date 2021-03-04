import styled from 'styled-components/native';

interface ButtonContainerProps {
  secondary?: boolean;
}

export const ManualLogInContainer = styled.View`
width: 100%;
background-color: ${({ theme }) => theme.colors.loginBottom};
border-top-left-radius: ${({ theme }) => theme.spacing.multiple(3)};
border-top-right-radius: ${({ theme }) => theme.spacing.multiple(3)};
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
margin-top: ${({ theme }) => theme.spacing.multiple(3)};
display: flex;
justify-content: space-around;
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
margin-bottom: ${({ theme }) => theme.spacing.multiple(3)};
`;



///////////////////// Buttons /////////////////////

export const ButtonsWrapper = styled.View`
width: 100%;
flex: 1;
display: flex;
justify-content: space-around;
margin-bottom: ${({ theme }) => theme.spacing.multiple(3)};
`;

