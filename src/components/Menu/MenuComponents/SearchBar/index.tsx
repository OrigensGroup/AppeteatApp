import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import SearchField from '../SearchField';

import { SearchBarWrapper, SearchTextWrapper, SearchButton, SearchButtonWrapper } from './styles';

interface SearchBarProps {
  onClick: () => void;
  placeholder?: string;
  textContentType: 'name' | 'none';
}

const SearchBar: React.FunctionComponent<SearchBarProps> = ({ onClick, placeholder, textContentType }) => {
  return (
    <SearchBarWrapper>
      <SearchButtonWrapper>
        <SearchButton onPress={onClick}>
          <Icon color="#0008" name="search" size={28} />
        </SearchButton>
      </SearchButtonWrapper>
      <SearchTextWrapper>
        <SearchField placeholder={placeholder} textContentType={textContentType} />
      </SearchTextWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
