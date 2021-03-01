import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

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
  return (
    <SearchBarWrapper>
      <SearchButtonWrapper>
        <SearchButton onPress={onClick}>
          <Icon color="#0008" name="search" size={28} />
        </SearchButton>
      </SearchButtonWrapper>
      <SearchBarTextWrapper>
        <SearchField placeholder={placeholder} textContentType={textContentType} />
      </SearchBarTextWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
