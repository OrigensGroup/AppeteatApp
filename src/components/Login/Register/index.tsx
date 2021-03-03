import React from "react";
import LoginTextField from '../../../components/Shared/LoginTextField';
import loginTranslations from '../../../translations/login';
import Text from '../../../components/Shared/Text';
import LogInButton from '../ManualLogIn/Buttons/LogInButton';
import SignUpButton from '../ManualLogIn/Buttons/SignUpButton';
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
                <TextFieldWrapper>
                    <TitleWrapper>
                        <Text color='secondary' fontSize={14} bold>{loginTranslations.passwordField.secondaryLabel}</Text>
                    </TitleWrapper>
                    <LoginTextField
                        placeholder={loginTranslations.passwordField.placeholder}
                        textContentType="password"
                    />
                </TextFieldWrapper>
            </TextFieldsWrapper>
            <ButtonsWrapper>
                <LoginButtonContainer>
                    <LogInButton onClick={enter} text={loginTranslations.RegisterButton.label} />
                </LoginButtonContainer>
                <RegisterContainer>
                    <SignUpButton onClick={login} text={loginTranslations.SignInSection.label} buttonText={loginTranslations.SignInSection.buttonLabel} />
                </RegisterContainer>
            </ButtonsWrapper>
        </ManualLogInContainer>
    );
};

export default RegisterManual;
