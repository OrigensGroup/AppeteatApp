import styled from 'styled-components/native';

export const SafeAreaViewTop = styled.SafeAreaView`
  flex: 0;
  background-color: ${({ theme }) => theme.colors.textSecondary};
`;

export const SafeAreaViewBottom = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.loginBottom};
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const LogInContainer = styled.ScrollView`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.textSecondary};
`;

export const EnclosingView = styled.View`
  flex: 1;
`;
