import styled from 'styled-components/native';

export const SafeAreaViewTop = styled.SafeAreaView`
flex: 0;
background-color: ${({ theme }) => theme.colors.textSecondary};
`;

export const SafeAreaViewBottom = styled.SafeAreaView`
flex: 1;
background-color: ${({ theme }) => theme.colors.loginBottom};
`;

export const Background = styled.View`
flex: 1;
background-color: ${({ theme }) => theme.colors.textSecondary};
`;

export const SafeView = styled.KeyboardAvoidingView`
flex: 1;
`;