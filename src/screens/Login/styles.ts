import styled from 'styled-components/native';

export const LoginContainer = styled.SafeAreaView`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.textSecondary};
`;

export const TextFieldWrapper = styled.View`
  margin: ${({ theme }) => theme.spacing.multiple(4)};
`;
export const LogoImage = styled.Image`
  width: 100%
  height: ${({ theme }) => theme.spacing.multiple(25)};
  resize-mode: contain;
`;
export const LogoContainer = styled.View`
  width: 100%
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LogInContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.multiple(5)};
`;
export const UpperContent = styled.View`
background-color: #fff;
height: 40%;
`;

export const BottomContent = styled.View`
background-color: #212130;
flex:1;
border-top-left-radius: ${({ theme }) => theme.spacing.multiple(3)};
border-top-right-radius: ${({ theme }) => theme.spacing.multiple(3)};
margin: ${({ theme }) => theme.spacing.multiple(3)} ${({ theme }) => theme.spacing.multiple(3)} 0 ${({ theme }) => theme.spacing.multiple(3)};
`;

export const RegisterContainer = styled.View`
margin: 0 ${({ theme }) => theme.spacing.multiple(4)};
`;

export const RegisterText = styled.Text`
  font-size: ${({ theme }) => theme.spacing.double};
  color: #c2c2c2;
`;
export const IconWrap = styled.View`
padding-right: ${({ theme }) => theme.spacing.half};
`;
export const SocialLogin = styled.View`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-top: ${({ theme }) => theme.spacing.multiple(3)};
`;