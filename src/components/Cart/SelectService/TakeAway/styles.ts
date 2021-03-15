import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: ${({ theme }) => theme.colors.border};
  border-width: 1px;
  border-radius: ${({ theme }) => theme.spacing.single};
  padding: ${({ theme }) => theme.spacing.single};
`;
