import styled from 'styled-components/native';

export const InfoUpdatedCardContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.activeGreen};
  border-radius: ${({ theme }) => theme.spacing.single};
  width: 100%;
  padding: ${({ theme }) => theme.spacing.single};
`;
export const IconContainer = styled.View`
  padding: 0 ${({ theme }) => theme.spacing.single};
`;
