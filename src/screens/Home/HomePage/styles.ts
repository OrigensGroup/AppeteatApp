import styled from 'styled-components/native';

export const HomeContainer = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;
