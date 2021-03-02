import styled from 'styled-components/native';

export const TextFieldContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TextFieldInput = styled.TextInput`
  border-bottom-color: ${({ theme }) => theme.colors.textSecondary};
  color: ${({ theme }) => theme.colors.border};
  padding-bottom: ${({ theme }) => theme.spacing.single};
  border-bottom-width: 1px;
  flex: 1;
`;
