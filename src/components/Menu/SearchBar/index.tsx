import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchField from '../SearchField';
import loginTranslations from "../../../translations/menu";

import { SearchBarContainer, SearchTextWrapper, SearchButton } from "./styles";

interface SearchBarProps {
  onClick: () => void;
  placeholder?: string;
  textContentType: 'name' | 'none';
}

const SearchBar: React.FunctionComponent<SearchBarProps> = ({ placeholder, textContentType, onClick }) => {
  return (
    <SearchBarContainer>
      <SearchTextWrapper>
        <SearchField
        placeholder={placeholder}
        textContentType = {textContentType}
        />
      </SearchTextWrapper>
      <SearchButton onPress={onClick}>
        <Icon name="search" size={28} color="#0008" />
      </SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
