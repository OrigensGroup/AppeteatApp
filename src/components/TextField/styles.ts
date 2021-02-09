import styled from "styled-components/native";

type TextFieldProps = {
  label: string;
  placeholder?: string;
  textContentType?: "email" | "password" | "text";
  secureTextEntry?: boolean;
};

export const TextFieldContainer = styled.TextInput<TextFieldProps>`
  align-items: center;
  border-bottom-color: #0006;
  border-bottom-width: 2px;
`;
export const TextFieldLabel = styled.View``;
