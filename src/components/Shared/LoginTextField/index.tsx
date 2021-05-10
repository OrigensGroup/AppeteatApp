import React, { useState } from 'react';
import type { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

import Text from '../Text';

import { TextFieldContainer, TextFieldInput, ErrorContainer, Container } from './styles';

interface LoginTextFieldProps extends TextInputProps {
  updateValue?: (value: string) => void;
  error?: string;
}

const LoginTextField: React.FunctionComponent<LoginTextFieldProps> = ({ error, updateValue, ...rest }) => {
  const [text, setText] = useState<string>(rest.defaultValue ?? '');
  const theme = useTheme();

  const updateText = (text: string) => {
    const textToUpdate = rest.textContentType === 'password' ? text.replace(/\s/g, '').trim() : text;
    setText(textToUpdate);
    if (updateValue) updateValue(textToUpdate);
  };

  return (
    <Container>
      <TextFieldContainer>
        <TextFieldInput
          autoCapitalize="none"
          onChangeText={updateText}
          placeholderTextColor={theme.colors.border}
          secureTextEntry={rest.textContentType === 'password'}
          {...rest}
          value={text}
        />
      </TextFieldContainer>
      {error && (
        <ErrorContainer>
          <Text bold color="errorColor" fontSize={14}>
            * {error}
          </Text>
        </ErrorContainer>
      )}
    </Container>
  );
};

export default LoginTextField;
