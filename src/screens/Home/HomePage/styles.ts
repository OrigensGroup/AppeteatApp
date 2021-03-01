import styled from 'styled-components/native';

export const HomepageContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.textSecondary};
  height: 100%;
`;

export const HomeContainer = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.textSecondary};
`;
