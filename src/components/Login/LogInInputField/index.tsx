import React from "react";
import Text from "../../Shared/Text";
import LoginTextField from '../../Shared/LoginTextField';

import {
    TextFieldWrapper,
    TitleWrapper
} from './styles'

interface LogInInputFieldProps {
    secondary?: boolean;
    placeholder: string;
    textContentType: "emailAddress" | "password" | "none";
    label: string;
}

const LogInInputField: React.FunctionComponent<LogInInputFieldProps> = ({ secondary, placeholder, textContentType, label }) => {
    return (
        <TextFieldWrapper secondary={secondary}>
            <TitleWrapper>
                <Text color='secondary' fontSize={14} bold>{label}</Text>
            </TitleWrapper>
            <LoginTextField
                placeholder={placeholder}
                textContentType={textContentType}
            />
        </TextFieldWrapper>
    );
};

export default LogInInputField;
