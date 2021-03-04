import styled from 'styled-components/native';

export const SafeAreaViewTop = styled.SafeAreaView`
flex: 0;
background-color: ${({ theme }) => theme.colors.textSecondary};
`;

export const SafeAreaViewBottom = styled.SafeAreaView`
flex: 1;
background-color: ${({ theme }) => theme.colors.textSecondary};
margin: 0;
`;

export const MenuWrapper = styled.View`
  background-color: #fff;
  flex: 1;
`;

export const TopBarWrapper = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin: ${({ theme }) => theme.spacing.multiple(2)} 0;
`;
