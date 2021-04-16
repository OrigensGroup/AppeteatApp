import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';

import IconButton from '../IconButton';

import { SearchBarWrapper, SearchButtonWrapper, SearchFieldInput } from './styles';

interface SearchBarProps {
  value: string;
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
  value,
}) => {
  const theme = useTheme();
  const [text, setText] = useState<string>('');

  useEffect(() => {
    setText(value);
  }, [value]);

  const updateText = (newText: string) => {
    onUpdateText(newText);
    setText(newText);
  };

  return (
    <SearchBarWrapper>
      <SearchFieldInput
        defaultValue={text}
        onChangeText={updateText}
        placeholder={placeholder}
        textContentType={textContentType}
        value={text}
      />
      <SearchButtonWrapper>
        <IconButton color={theme.colors.textPrimary} iconName="search" onClick={onClick} size={24} />
      </SearchButtonWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
