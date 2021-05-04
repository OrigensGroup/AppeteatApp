import styled from 'styled-components/native';

export const LogInContainer = styled.ScrollView`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

export const SafeAreaViewTop = styled.SafeAreaView`
  flex: 0;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  ${({ theme }) => theme.os === 'android' && `padding-top: ${theme.spacing.multiple(5)}`};
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const EnclosingView = styled.View`
  flex: 1;
  display: flex;
  justify-content: space-between;
  bottom: 0;
`;
