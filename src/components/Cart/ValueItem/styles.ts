import styled from 'styled-components/native';

export const ValueItemContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.double} ${({ theme }) => theme.spacing.double};
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
`;

export const ValueItemInfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
