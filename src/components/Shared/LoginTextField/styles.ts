import styled from 'styled-components/native';

export const TextFieldContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TextFieldInput = styled.TextInput`
  border-bottom-color: ${({ theme }) => theme.colors.fixedWhite};
  color: ${({ theme }) => theme.colors.fixedWhite};
  border-bottom-width: 1px;
  flex: 1;
  padding: 0;
  padding-bottom: ${({ theme }) => theme.spacing.half};
`;
