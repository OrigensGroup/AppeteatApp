import React, { useState } from 'react';
import { useTheme } from 'styled-components';

import IconButton from '../IconButton';

import { SearchBarWrapper, SearchButtonWrapper, SearchFieldInput } from './styles';

interface SearchBarProps {
  onUpdateText: (t: string) => void;
  onClick?: () => void;
  placeholder?: string;
  textContentType: 'name' | 'none';
}

const SearchBar: React.FunctionComponent<SearchBarProps> = ({
  onClick,
  onUpdateText,
  placeholder,
  textContentType,
}) => {
  const theme = useTheme();
  const [text, setText] = useState<string>('');

  const updateText = (newText: string) => {
    onUpdateText(newText);
    setText(newText);
  };

  return (
    <SearchBarWrapper>
      <SearchFieldInput
        autoFocus
        defaultValue={text}
        onChangeText={updateText}
        placeholder={placeholder}
        textContentType={textContentType}
      />
      <SearchButtonWrapper>
        <IconButton color={theme.colors.textPrimary} iconName="search" onClick={onClick} size={24} />
      </SearchButtonWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
