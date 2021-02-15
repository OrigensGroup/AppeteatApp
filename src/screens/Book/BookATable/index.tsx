import { useRoute } from "@react-navigation/native";
import React from "react";
import Icon from "react-native-vector-icons/EvilIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import IconField from "../../../components/BookPage/IconField";
import Title from "../../../components/Shared/Text";

import InputSpinner from "react-native-input-spinner";
import {
  BookTableContainer,
  ImageContainer,
  FieldsContainer,
  VenueImage,
  Container,
  IconContainer,
  TextContainer,
  DateSelected,
  ConfirmContainer,
} from "./styles";
import DateButton from "../../../components/BookPage/DateButton";

interface BookTableProps {}

const BookTable: React.FunctionComponent<BookTableProps> = () => {
  const route = useRoute();

  return (
    <BookTableContainer>
      {/* <Text>{JSON.stringify(route.params)}</Text> */}
      <ImageContainer>
        <VenueImage source={require("../../../img/venue.jpg")}></VenueImage>
      </ImageContainer>
      <FieldsContainer>
        <Container>
          <IconField backgroundColor={"#fff"}>
            <Icon name="location" size={28} color="#000000" />
            <TextContainer>
              <Title color="#000" fontSize={15}>
                {JSON.stringify(route.params.title)}
              </Title>
            </TextContainer>
          </IconField>
        </Container>
        <Container>
          <DateButton>
            <IconContainer>
              <AntDesign name="calendar" size={28} color="#000000" />
            </IconContainer>
            <TextContainer>
              <Title color="#000000" fontSize={18}>
                Select Date and Time
              </Title>
              <DateSelected>
                <Title color="#000000" fontSize={15}>
                  01/01/1999, 11:00 PM
                </Title>
              </DateSelected>
            </TextContainer>
          </DateButton>
        </Container>
        <Container>
          <TextContainer>
            <Title fontSize={15} color={"black"}>
              No of member
            </Title>
          </TextContainer>
          <InputSpinner
            max={50}
            min={1}
            step={1}
            color={"rgba(255, 184, 3, 0.222)"}
            onChange={(num) => {
              console.log(num);
            }}
          />
        </Container>
        <ConfirmContainer>
          <IconField
            backgroundColor={"rgba(255, 183, 0, 0.849)"}
            justifyContent={"center"}
          >
            <Title fontSize={18} color={"#000000"} fontWeight={"bold"}>
              Confirm
            </Title>
          </IconField>
        </ConfirmContainer>
      </FieldsContainer>
    </BookTableContainer>
  );
};

export default BookTable;
