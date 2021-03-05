import React from "react";
import loginTranslations from '../../../translations/login';
import LogInButton from '../ManualLogIn/Buttons/LogInButton';
import SignUpButton from '../ManualLogIn/Buttons/SignUpButton';
import { useNavigation } from "@react-navigation/native";
import LogInInputField from '../LogInInputField'

import {
    ManualLogInContainer,
    TextFieldsWrapper,
    LogInSection,
    PasswordsWrapper,
    PasswordSeparator
} from './styles';

interface RegisterManualProps {
}

const RegisterManual: React.FunctionComponent<RegisterManualProps> = () => {

    const navigation = useNavigation();

    const login = () => {
        navigation.navigate('Login');
    };

    const enter = () => {
        navigation.navigate('App');
    };

    return (
        <ManualLogInContainer>
            <TextFieldsWrapper>
                <LogInInputField
                    label={loginTranslations.nameField.label}
                    placeholder={loginTranslations.nameField.placeholder}
                    textContentType="none"
                />
                <LogInInputField
                    label={loginTranslations.emailField.label}
                    placeholder={loginTranslations.emailField.placeholder}
                    textContentType="emailAddress"
                />
                <PasswordsWrapper>
                    <LogInInputField
                        label={loginTranslations.passwordField.label}
                        placeholder={loginTranslations.passwordField.placeholder}
                        textContentType="password"
                    />
                    <PasswordSeparator />
                    <LogInInputField
                        label={loginTranslations.passwordField.secondaryLabel}
                        placeholder={loginTranslations.passwordField.placeholder}
                        textContentType="password"
                    />
                </PasswordsWrapper>
            </TextFieldsWrapper>
            <LogInSection>
                <LogInButton onClick={enter} text={loginTranslations.RegisterButton.label} />
                <SignUpButton onClick={login} text={loginTranslations.SignInSection.label} buttonText={loginTranslations.SignInSection.buttonLabel} />
            </LogInSection>
        </ManualLogInContainer>
    );
};

export default RegisterManual;
