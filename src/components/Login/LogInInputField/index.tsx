import React from "react";
import Text from "../../Shared/Text";
import LoginTextField from '../../Shared/LoginTextField';

import {
    TextFieldWrapper,
    TitleWrapper
} from './styles'

interface LogInInputFieldProps {
    secondary?: boolean;
    placeholder: any;
    textContentType: any;
    label: any;
    tertiary?: boolean;
}

const LogInInputField: React.FunctionComponent<LogInInputFieldProps> = ({ secondary, placeholder, textContentType, label, tertiary }) => {
    return (
        <TextFieldWrapper secondary={secondary}>
            <TitleWrapper>
                <Text color='secondary' fontSize={14} bold>{label}</Text>
            </TitleWrapper>
            <LoginTextField
                placeholder={placeholder}
                textContentType={textContentType}
                tertiary={tertiary}
            />
        </TextFieldWrapper>
    );
};

export default LogInInputField;
