import styled from 'styled-components/native';

export const SocialLoginWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.spacing.multiple(6)};
  margin: ${({ theme }) => theme.spacing.multiple(4)} 0;
`;

export const SocialLoginButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.spacing.multiple(6)};
  width: ${({ theme }) => theme.spacing.multiple(6)};
`;
