import React, { useState } from 'react';
import InputSpinner from 'react-native-input-spinner';
import Modal from 'react-native-modal';


import DateTimePicker from '@react-native-community/datetimepicker';
import {
    ConfirmContainer,
    Container,
    DateContainer,
    DateWrap,
    IconContainer,
    ModalContainer,
    PopUpContainer,
    TextContainer,
    TimeContainer,
    UpdateWrapper,
    VenueContainer,
    VenueWrap,
} from './styles';
import Text from '../../../components/Shared/Text';
import Button from '../../../components/Book/Button';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components';

type Months = {
  [key: number]: string;
};
type Minutes = {
  [key: number]: string;
};

interface BookATableModalProps {
    venue?: any;
    isModalVisible: boolean;
    onClose: () => void;
}

const BookATableModal: React.FunctionComponent<BookATableModalProps> = ({ isModalVisible, venue, onClose }) => {

const theme = useTheme();

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
        <Modal
            animationInTiming={600}
            animationOutTiming={450}
            isVisible={isModalVisible}
            onBackdropPress={onClose}
            avoidKeyboard={true}
            style={{
                margin: 0,
            }}
        >
            <ModalContainer>
                <PopUpContainer>
                    <VenueWrap>
          <VenueContainer>
            <TextContainer>
              <Text color="primary" fontSize={15}>
                Venue
              </Text>
            </TextContainer>
            <Button>
              <IconContainer>
                <Icon color="#000000" name="location-outline" size={28} />
              </IconContainer>
              <Text color="primary" fontSize={15}>
                {venue.name}
              </Text>
            </Button>
          </VenueContainer>
        </VenueWrap>
        <DateWrap>
          <DateContainer>
            <TextContainer>
              <Text color="primary" fontSize={15}>
                Date
              </Text>
            </TextContainer>
            <Button onPress={showDatepicker}>
              <IconContainer>
                <Icon color="#000000" name="ios-time-outline" size={28} />
              </IconContainer>
              <Text color="primary" fontSize={15}>
                {date.getDate()} {months[date.getMonth()]}
              </Text>
            </Button>
          </DateContainer>
          <TimeContainer>
            <TextContainer>
              <Text color="primary" fontSize={15}>
                Time
              </Text>
            </TextContainer>
            <Button onPress={showTimepicker}>
              <IconContainer>
                <Icon color="#000000" name="ios-time-outline" size={28} />
              </IconContainer>
              <Text color="primary" fontSize={15}>
                {date.getHours() > 11
                  ? `${minutes[date.getHours()]}:${date.getMinutes()} PM`
                  : `${minutes[date.getHours()]}:${date.getMinutes()} AM`}
              </Text>
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
            <Text color="primary" fontSize={15}>
              No of member
            </Text>
          </TextContainer>
          <InputSpinner
            color={theme.colors.active}
            max={50}
            min={1}
            onChange={(num) => {
              console.log(num);
            }}
            step={1}
          />
        </Container>
        <ConfirmContainer>
          <UpdateWrapper onPress={onClose}>
                        <Text color="tertiary" fontSize={18} bold>
              Confirm Booking
            </Text>
        </UpdateWrapper>
        </ConfirmContainer>
                </PopUpContainer>
            </ModalContainer>
        </Modal>
    );
};

export default BookATableModal;
