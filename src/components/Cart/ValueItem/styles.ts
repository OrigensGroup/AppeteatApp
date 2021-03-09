import styled from 'styled-components/native';

export const ValueItemContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: ${({ theme }) => theme.spacing.single} 0;
`;

export const ValueItemInfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
