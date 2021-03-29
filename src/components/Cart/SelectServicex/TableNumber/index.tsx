import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';

import cartTranslations from '../../../../translations/cart';
import Text from '../../../shared/Text';

import { TextFieldContainer, TextFieldInput } from './styles';

interface TableNumberProps {
  placeholder?: string;
  updateValue?: (value: string) => void;
}

const TableNumber: React.FunctionComponent<TableNumberProps> = ({ placeholder, updateValue }) => {
  const [text, setText] = useState<string>('');
  const theme = useTheme();

  const updateText = (text: string) => {
    const textToUpdate = text;
    setText(textToUpdate);
    if (updateValue) updateValue(textToUpdate);
  };

  return (
    <TextFieldContainer>
      <Text color="primary" fontSize={18}>
        {cartTranslations.tableNumber.label}
      </Text>
      <TextFieldInput
        autoCapitalize="none"
        onChangeText={updateText}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.background}
        value={text.trim()}
      />
    </TextFieldContainer>
  );
};

export default TableNumber;
