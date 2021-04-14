import styled from 'styled-components/native';

export const SafeAreaViewBottom = styled.SafeAreaView`
  flex: 0;
  background: ${({ theme }) => theme.colors.backgroundColor};
`;

export const MenuContainer = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.backgroundColor};
`;
