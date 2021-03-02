import React from "react";
import LoginTextField from '../../../components/Shared/LoginTextField';
import loginTranslations from '../../../translations/login';
import Text from '../../../components/Shared/Text';
import LogInButton from './Buttons/LogInButton';
import SignUpButton from './Buttons/SignUpButton';
import { useNavigation } from "@react-navigation/native";

import {
    ManualLogInContainer,
    TitleWrapper,
    TextFieldsWrapper,
    TextFieldWrapper,
    ButtonsWrapper,
    LoginButtonContainer,
    RegisterContainer,
} from './styles';


interface ManualLogInProps {
}

const ManualLogIn: React.FunctionComponent<ManualLogInProps> = () => {

    const navigation = useNavigation();

    const login = () => {
        navigation.navigate('App');
    };


    return (
        <ManualLogInContainer>
            <TextFieldsWrapper>
                <TextFieldWrapper>
                    <TitleWrapper>
                        <Text color='secondary' fontSize={14} bold>{loginTranslations.emailField.label}</Text>
                    </TitleWrapper>
                    <LoginTextField
                        placeholder={loginTranslations.emailField.placeholder}
                        textContentType="emailAddress"
                    />
                </TextFieldWrapper>
                <TextFieldWrapper>
                    <TitleWrapper>
                        <Text color='secondary' fontSize={14} bold>{loginTranslations.passwordField.label}</Text>
                    </TitleWrapper>
                    <LoginTextField
                        placeholder={loginTranslations.passwordField.placeholder}
                        textContentType="password"
                    />
                </TextFieldWrapper>
            </TextFieldsWrapper>
            <ButtonsWrapper>
                <LoginButtonContainer>
                    <LogInButton onClick={login} text={loginTranslations.loginButton.label} />
                </LoginButtonContainer>
                <RegisterContainer>
                    <SignUpButton onClick={() => navigation.navigate('Register')} text={loginTranslations.signUpSection.label} buttonText={loginTranslations.signUpSection.buttonLabel} />
                </RegisterContainer>
            </ButtonsWrapper>
        </ManualLogInContainer>
    );
};

export default ManualLogIn;
