import styled from 'styled-components/native';

interface ButtonContainerProps {
  secondary?: boolean;
}

export const TextFieldWrapper = styled.View<ButtonContainerProps>`
flex: 1;
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

export const ErrorContainer = styled.View`
margin-top: ${({ theme }) => theme.spacing.single};
`;