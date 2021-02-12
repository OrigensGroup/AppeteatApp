import React from "react";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import SearchField from "../SearchField";
import loginTranslations from "../../../translations/menu";

import { SearchBarContainer, SearchTextWrapper, SearchButton } from "./styles";

interface CardProps {
  description: string;
  onClick?: () => void;
}

const SearchBar: React.FunctionComponent<CardProps> = ({
  description,
  onClick,
}) => {
  return (
    <SearchBarContainer>
      <SearchTextWrapper>
        <SearchField
          placeholder={loginTranslations.searchField.placeholder}
          textContentType="name"
        />
      </SearchTextWrapper>
      <SearchButton onPress={onClick}>
        <Icon name="search" size={28} color="#0008" />
      </SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
