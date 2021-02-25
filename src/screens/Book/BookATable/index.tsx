import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import DateTimePicker from '@react-native-community/datetimepicker';
import InputSpinner from 'react-native-input-spinner';

import { Platform } from 'react-native';

import Button from '../../../components/Book/Button';
import Title from '../../../components/Shared/Text';
import IconField from '../../../components/Book/IconField';

import {
  BookTableContainer,
  ImageContainer,
  FieldsContainer,
  VenueImage,
  Container,
  IconContainer,
  TextContainer,
  DateContainer,
  TimeContainer,
  VenueContainer,
  ConfirmContainer,
  DateWrap,
  VenueWrap,
} from './styles';

type Months = {
  [key: number]: string;
};
type Minutes = {
  [key: number]: string;
};

interface BookTableProps {}

const BookTable: React.FunctionComponent<BookTableProps> = () => {
  const route = useRoute();
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState<'date' | 'time' | undefined>('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode: 'date' | 'time' | undefined) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const months: Months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  };

  const minutes: Minutes = {
    0: '12',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: '10',
    11: '11',
    12: '12',
    13: '1',
    14: '2',
    15: '3',
    16: '4',
    17: '5',
    18: '6',
    19: '7',
    20: '8',
    21: '9',
    22: '10',
    23: '11',
    24: '12',
  };

  return (
    <BookTableContainer>
      {/* <Text>{JSON.stringify(route.params)}</Text> */}
      <ImageContainer>
        <VenueImage source={require('../../../img/venue.jpg')} />
      </ImageContainer>
      <FieldsContainer>
        <VenueWrap>
          <VenueContainer>
            <TextContainer>
              <Title color="#000" fontSize={15}>
                Venue
              </Title>
            </TextContainer>
            <Button>
              <IconContainer>
                <Icon color="#000000" name="location-outline" size={28} />
              </IconContainer>
              <Title color="#000000" fontSize={15}>
                {route.params.title}
              </Title>
            </Button>
          </VenueContainer>
        </VenueWrap>
        <DateWrap>
          <DateContainer>
            <TextContainer>
              <Title color="#000" fontSize={15}>
                Date
              </Title>
            </TextContainer>
            <Button onPress={showDatepicker}>
              <IconContainer>
                <Icon color="#000000" name="ios-time-outline" size={28} />
              </IconContainer>
              <Title color="#000000" fontSize={15}>
                {date.getDate()} {months[date.getMonth()]}
              </Title>
            </Button>
          </DateContainer>
          <TimeContainer>
            <TextContainer>
              <Title color="#000" fontSize={15}>
                Time
              </Title>
            </TextContainer>
            <Button onPress={showTimepicker}>
              <IconContainer>
                <Icon color="#000000" name="ios-time-outline" size={28} />
              </IconContainer>
              <Title color="#000000" fontSize={15}>
                {date.getHours() > 11
                  ? `${minutes[date.getHours()]}:${date.getMinutes()} PM`
                  : `${minutes[date.getHours()]}:${date.getMinutes()} AM`}
              </Title>
            </Button>
          </TimeContainer>
          {show && (
            <DateTimePicker
              display="default"
              is24Hour
              minimumDate={new Date()}
              mode={mode}
              onChange={onChange}
              testID="dateTimePicker"
              value={date}
            />
          )}
        </DateWrap>
        <Container>
          <TextContainer>
            <Title color="black" fontSize={15}>
              No of member
            </Title>
          </TextContainer>
          <InputSpinner
            color="#ffab004f"
            max={50}
            min={1}
            onChange={(num) => {
              console.log(num);
            }}
            step={1}
          />
        </Container>
        <ConfirmContainer>
          <IconField>
            <Title color="#000000" fontSize={18} fontWeight="bold">
              Confirm
            </Title>
          </IconField>
        </ConfirmContainer>
      </FieldsContainer>
    </BookTableContainer>
  );
};

export default BookTable;
