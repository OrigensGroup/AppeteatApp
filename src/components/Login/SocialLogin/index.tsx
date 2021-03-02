import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

import {
    SocialLoginWrapper,
    SocialLoginButton
} from './styles'

interface SocialLoginProps {
}

const SocialLogin: React.FunctionComponent<SocialLoginProps> = () => {
    return (
        <SocialLoginWrapper>
            <SocialLoginButton>
                <AntDesign name="apple1" size={40} color="#181822" />
            </SocialLoginButton>
            <SocialLoginButton>
                <AntDesign name="google" size={40} color="#181822" />
            </SocialLoginButton>
            <SocialLoginButton>
                <AntDesign name="facebook-square" size={40} color="#181822" />
            </SocialLoginButton>
        </SocialLoginWrapper>
    );
};

export default SocialLogin;

