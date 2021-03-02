import styled from 'styled-components/native';

export const ManualLogInContainer = styled.View`
width: 100%;
flex: 1;
background-color: ${({ theme }) => theme.colors.loginBottom};
border-top-left-radius: ${({ theme }) => theme.spacing.multiple(3)};
border-top-right-radius: ${({ theme }) => theme.spacing.multiple(3)};
display: flex;
justify-content: space-between;
align-items: center;
`;

export const TextFieldsWrapper = styled.View`
width: 100%;
flex: 1;
margin-top: ${({ theme }) => theme.spacing.multiple(3)};
display: flex;
justify-content: space-around;
`;

export const TextFieldWrapper = styled.View`
  margin: 0 ${({ theme }) => theme.spacing.multiple(5)}; 
`;

export const TitleWrapper = styled.View`
margin-bottom: ${({ theme }) => theme.spacing.multiple(2)};
`;

//Buttons

export const ButtonsWrapper = styled.View`
width: 100%;
flex: 1;
display: flex;
justify-content: space-around;
margin-bottom: ${({ theme }) => theme.spacing.multiple(3)};
`;

export const LoginButtonContainer = styled.SafeAreaView`
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.multiple(3)};
`;

export const RegisterContainer = styled.View`
margin: 0 ${({ theme }) => theme.spacing.multiple(5)};
`;

