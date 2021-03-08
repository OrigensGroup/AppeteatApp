import React, { useState } from "react";
import loginTranslations from '../../../translations/login';
import LogInButton from '../ManualLogIn/Buttons/LogInButton';
import SignUpButton from '../ManualLogIn/Buttons/SignUpButton';
import { useNavigation } from "@react-navigation/native";
import LogInInputField from '../LogInInputField'
import auth from '@react-native-firebase/auth';

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

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const [username, setUsername] = useState('')

    const navigation = useNavigation();

    const login = () => {
        navigation.navigate('Login');
    };

    const enter = () => {
        navigation.navigate('App');
    };

    const createUser = () => {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                return enter();
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    };

    return (
        <ManualLogInContainer>
            <TextFieldsWrapper>
                <LogInInputField
                    updateValue={setUsername}
                    label={loginTranslations.nameField.label}
                    placeholder={loginTranslations.nameField.placeholder}
                    textContentType="none"
                />
                <LogInInputField
                    updateValue={setEmail}
                    label={loginTranslations.emailField.label}
                    placeholder={loginTranslations.emailField.placeholder}
                    textContentType="emailAddress"
                />
                <PasswordsWrapper>
                    <LogInInputField
                        updateValue={setPassword}
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
                <LogInButton onClick={createUser} text={loginTranslations.RegisterButton.label} />
                <SignUpButton onClick={login} text={loginTranslations.SignInSection.label} buttonText={loginTranslations.SignInSection.buttonLabel} />
            </LogInSection>
        </ManualLogInContainer>
    );
};

export default RegisterManual;
