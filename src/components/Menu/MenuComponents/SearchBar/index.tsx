import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchField from '../SearchField';


import { 
  SearchBarWrapper,
  SearchTextWrapper,
  SearchButton,
} from "./styles";

interface SearchBarProps {
  onClick: () => void;
  placeholder?: string;
  textContentType: 'name' | 'none';
}

const SearchBar: React.FunctionComponent<SearchBarProps> = ({ placeholder, textContentType, onClick }) => {
  return (
      <SearchBarWrapper>
        <SearchTextWrapper>
          <SearchField
          placeholder={placeholder}
          textContentType = {textContentType}
          />
        </SearchTextWrapper>
        <SearchButton onPress={onClick}>
          <Icon name="search" size={28} color="#0008" />
        </SearchButton>
      </SearchBarWrapper>
  );
};

export default SearchBar;
