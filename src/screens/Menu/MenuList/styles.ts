import styled from 'styled-components/native';

export const MenuWrapper = styled.View`
  height: 100%;
  width: 100%;
`;

export const SafeAreaViewBottom = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.backgroundColor};
`;
