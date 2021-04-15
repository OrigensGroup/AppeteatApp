import styled from 'styled-components/native';

export const HomeContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

export const ComponentContainer = styled.View`
  padding: 0 ${({ theme }) => theme.spacing.double} ${({ theme }) => theme.spacing.double}
    ${({ theme }) => theme.spacing.double};
`;

export const LogoContainer = styled.View`
  display: flex;
`;
