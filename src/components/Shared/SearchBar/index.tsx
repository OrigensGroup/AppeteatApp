import React from 'react';
import { useTheme } from 'styled-components';
import IconButton from '../IconButton';
import SearchField from '../SearchField';

import {
  SearchBarWrapper,
  SearchBarTextWrapper,
  SearchButton,
  SearchButtonWrapper
} from './styles';

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
        <IconButton onClick={onClick} iconName='sliders' size={24} color={theme.colors.textPrimary} />
      </SearchButtonWrapper>
      <SearchBarTextWrapper>
        <SearchField placeholder={placeholder} textContentType={textContentType} />
      </SearchBarTextWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
