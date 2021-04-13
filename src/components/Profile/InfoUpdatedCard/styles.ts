import styled from 'styled-components/native';

interface InfoUpdatedCardProps {
  error?: boolean;
}

export const InfoUpdatedCardContainer = styled.TouchableOpacity<InfoUpdatedCardProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  ${({ error, theme }) =>
    error ? `background-color: ${theme.colors.actionRed}` : `background-color: ${theme.colors.activeGreen}`};
  border-radius: ${({ theme }) => theme.spacing.single};
  width: 100%;
  padding: ${({ theme }) => theme.spacing.single};
`;
export const IconContainer = styled.View`
  padding: 0 ${({ theme }) => theme.spacing.single};
`;
