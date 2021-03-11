import styled from 'styled-components/native';

export const LogInContainer = styled.ScrollView`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

export const SafeAreaViewTop = styled.SafeAreaView`
  flex: 0;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  bottom: 0;
`;

export const EnclosingView = styled.View`
  height: 100%;
  display: flex;
  justify-content: space-between;
  bottom: 0;
`;
