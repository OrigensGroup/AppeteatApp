import styled from 'styled-components/native';

export const TopContainer = styled.View`
  margin: 0 ${({ theme }) => theme.spacing.triple} ;
`;

export const TopBarWrapper = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin: ${({ theme }) => theme.spacing.triple} 0;
`;