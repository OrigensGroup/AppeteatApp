import React from 'react';
import { useTheme } from 'styled-components';

import IconButton from '../IconButton';
import SearchField from '../SearchField';

import { SearchBarWrapper, SearchBarTextWrapper, SearchButtonWrapper } from './styles';

interface SearchBarProps {
  onClick: () => void;
  placeholder?: string;
  textContentType: 'name' | 'none';
}

const SearchBar: React.FunctionComponent<SearchBarProps> = ({ onClick, placeholder, textContentType }) => {
  const theme = useTheme();

  return (
    <SearchBarWrapper>
      <SearchButtonWrapper>
        <IconButton color={theme.colors.textPrimary} iconName="sliders" onClick={onClick} size={24} />
      </SearchButtonWrapper>
      <SearchBarTextWrapper>
        <SearchField placeholder={placeholder} textContentType={textContentType} />
      </SearchBarTextWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
