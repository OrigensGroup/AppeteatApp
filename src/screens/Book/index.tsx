import React, { useState } from "react";
import DropDown from "../../components/BookPage/DropDown";
import SearchField2 from "../../components/BookPage/TextField";
import DateTimePicker from "@react-native-community/datetimepicker";

import {
  BookContainer,
  Container,
  Title,
  BookPageContainer,
  PickerButton,
} from "./styles";
import { Button, Platform } from "react-native";

interface BookProps {}

const Book: React.FunctionComponent<BookProps> = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <BookPageContainer>
      <BookContainer>
        <SearchField2 description="Cerca venue"></SearchField2>
        <Container>
          <Title>Venue</Title>
          <DropDown description="Cerca venue"></DropDown>
        </Container>
        <Container>
          <Container>
            <PickerButton onPress={showDatepicker} />
          </Container>
          <Container>
            <PickerButton onPress={showTimepicker} />
          </Container>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </Container>
      </BookContainer>
    </BookPageContainer>
  );
};

export default Book;
