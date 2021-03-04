import styled from 'styled-components/native';

interface ButtonContainerProps {
  secondary?: boolean;
}

export const TextFieldWrapper = styled.View<ButtonContainerProps>`
flex: 1;
  margin-bottom: ${({ theme }) => theme.spacing.multiple(1)};
  margin-top: ${({ theme }) => theme.spacing.multiple(1)};
  ${({ secondary }) =>
    secondary &&
    `
    margin-bottom: 0; 
  `};
`;


export const TitleWrapper = styled.View`
margin-bottom: ${({ theme }) => theme.spacing.multiple(2)};
`;