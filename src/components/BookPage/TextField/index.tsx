import React from "react";
import loginTranslations from "../../../translations/menu";
import SearchField from "../../Menu/SearchField/";

import { SearchFieldContainer } from "./styles";

interface SearchField2Props {
  description: string;
  onClick: () => void;
}

const SearchField2: React.FunctionComponent<SearchField2Props> = ({
  description,
  onClick,
}) => {
  return (
    <SearchFieldContainer>
      <SearchField
        placeholder={loginTranslations.searchField.placeholder}
        textContentType="name"
      />
    </SearchFieldContainer>
  );
};

export default SearchField2;
