import styled from 'styled-components/native';

export const TextFieldContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TextFieldInput = styled.TextInput`
 border-bottom-color: ${({ theme }) => theme.colors.border};
  border-color: transparent;
  border-width: 1px;
  flex: 1;
`;
