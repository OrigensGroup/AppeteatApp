import styled from 'styled-components/native';

interface ButtonContainerProps {
  tertiary?: boolean;
}

export const TextFieldContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TextFieldInput = styled.TextInput<ButtonContainerProps>`
  border-bottom-color: ${({ theme }) => theme.colors.textSecondary};
  color: ${({ theme }) => theme.colors.border};
  border-bottom-width: 1px;
  flex: 1;
  padding: 0;
  padding-bottom: ${({ theme }) => theme.spacing.multiple(0.5)};
  ${({ tertiary }) =>
    tertiary &&
    `
    width: 50px; 
  `};
`;
