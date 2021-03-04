import React from "react";
import LoginTextField from '../../../components/Shared/LoginTextField';
import loginTranslations from '../../../translations/login';
import Text from '../../../components/Shared/Text';
import LogInButton from './Buttons/LogInButton';
import SignUpButton from './Buttons/SignUpButton';
import { useNavigation } from "@react-navigation/native";
import LogInTextField from "../LogInInputField";

import {
    ManualLogInContainer,
    TitleWrapper,
    TextFieldsWrapper,
    TextFieldWrapper,
    ButtonsWrapper,
} from './styles';
import { Platform } from "react-native";


interface ManualLogInProps {
}

const ManualLogIn: React.FunctionComponent<ManualLogInProps> = () => {

    const navigation = useNavigation();

    const login = () => {
        navigation.navigate('App');
    };


    return (

        <ManualLogInContainer>
            <TextFieldsWrapper behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <LogInTextField
                    label={loginTranslations.emailField.label}
                    placeholder={loginTranslations.emailField.placeholder}
                    textContentType="emailAddress"
                />
                <LogInTextField
                    label={loginTranslations.passwordField.label}
                    placeholder={loginTranslations.passwordField.placeholder}
                    textContentType="password"
                    secondary
                />
            </TextFieldsWrapper>
            <ButtonsWrapper>
                <LogInButton onClick={login} text={loginTranslations.loginButton.label} />
                <SignUpButton onClick={() => navigation.navigate('Register')} text={loginTranslations.signUpSection.label} buttonText={loginTranslations.signUpSection.buttonLabel} />
            </ButtonsWrapper>
        </ManualLogInContainer>

    );
};

export default ManualLogIn;
