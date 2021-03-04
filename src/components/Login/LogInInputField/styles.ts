import styled from 'styled-components/native';

interface ButtonContainerProps {
  secondary?: boolean;
}

export const TextFieldWrapper = styled.View<ButtonContainerProps>`
  margin: 0 ${({ theme }) => theme.spacing.multiple(5)};
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