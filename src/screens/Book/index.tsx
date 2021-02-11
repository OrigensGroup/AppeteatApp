import React from "react";
import DropDown from "../../components/BookPage/DropDown";
import SearchField2 from "../../components/BookPage/TextField";

import { BookContainer } from "./styles";

interface BookProps {}

const Book: React.FunctionComponent<BookProps> = () => {
  return (
    <BookContainer>
      <SearchField2 description="Cerca venue"></SearchField2>
      <DropDown description="Cerca venue"></DropDown>
    </BookContainer>
  );
};

export default Book;
