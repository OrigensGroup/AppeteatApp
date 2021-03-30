import React, { useState } from 'react';
import Modal from 'react-native-modal';

import DateTimePicker from '@react-native-community/datetimepicker';

import Icon from 'react-native-vector-icons/Ionicons';
import CalendarIcon from 'react-native-vector-icons/AntDesign';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components';

import { v4 } from 'uuid';

import Picker from '../Picker';
import Text from '../../shared/Text';
import Spinner from '../Spinner';
import bookTranslations from '../../../translations/book';
import ViewCta from '../../shared/ViewCta';

import { Booking } from '../../../types/Booking';
import useAuth from '../../../hooks/useAuth';
import { Venue } from '../../../types/Venue';

import useBookings from '../../../hooks/useBookings';
import useUserData from '../../../hooks/useUserData';

import {
  SpinnerContainer,
  PopUpContainer,
  TimePickers,
  TimePickersRow,
  ConfirmButton,
  PickerContainer,
} from './styles';

type Months = {
  [key: number]: string;
};
type Minutes = {
  [key: number]: string;
};

interface BookATableModalProps {
  venue: Venue;
  isModalVisible: boolean;
  onClose: () => void;
  booking: Booking | null;
}

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

const BookATableModal: React.FunctionComponent<BookATableModalProps> = ({ isModalVisible, onClose, venue }) => {
  const user = useAuth();
  const theme = useTheme();
  const [bookings, setBookings] = useBookings();
  const { addBooking } = useUserData();

  const [localQuantity, setLocalQuantity] = useState('1');
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState<'date' | 'time' | undefined>('date');
  const [show, setShow] = useState(false);

  const updateQuantity = (people: number) => {
    setLocalQuantity(String(people));
  };

  const onChange = (_: any, selectedDate: any) => {
    const currentDate = selectedDate;
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

  const onSubmit = () => {
    const d = new Date(date);

    const newBooking: Booking = {
      id: v4(),
      fullName: user?.displayName || 'user without name',
      date: `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`,
      time: `${d.getHours()}:${date.getMinutes()}`,
      people: localQuantity,
      venueId: venue.id,
      done: false,
      comment: '',
    };

    setBookings({
      ...bookings,
      list: [...bookings.list, newBooking],
    });

    addBooking(newBooking);
    onClose();
  };

  return (
    <Modal
      animationInTiming={600}
      animationOutTiming={450}
      avoidKeyboard
      isVisible={isModalVisible}
      onBackdropPress={onClose}
      style={{
        margin: 0,
      }}
    >
      <PopUpContainer>
        <Picker
          icon={<Icon color={theme.colors.fixedBlack} name="location-outline" size={28} />}
          textValue={venue.name}
          title="Venue"
        />
        <TimePickers>
          <TimePickersRow>
            <PickerContainer>
              <Picker
                icon={<CalendarIcon color={theme.colors.fixedBlack} name="calendar" size={28} />}
                onPress={showDatepicker}
                textValue={`${date.getDate()} ${months[date.getMonth()]}`}
                title="Date"
              />
            </PickerContainer>
            <PickerContainer>
              <Picker
                icon={<Icon color={theme.colors.fixedBlack} name="ios-time-outline" size={28} />}
                onPress={showTimepicker}
                textValue={
                  date.getHours() > 11
                    ? `${minutes[date.getHours()]}:${date.getMinutes()} PM`
                    : `${minutes[date.getHours()]}:${date.getMinutes()} AM`
                }
                title="Time"
              />
            </PickerContainer>
          </TimePickersRow>
          {show && (
            <DateTimePicker
              display="spinner"
              minimumDate={new Date()}
              mode={mode}
              onChange={onChange}
              style={{ flex: 1 }}
              testID="dateTimePicker"
              value={date}
            />
          )}
        </TimePickers>
        <SpinnerContainer>
          <Spinner initialValue={localQuantity} onChange={updateQuantity} title="No of member" />
        </SpinnerContainer>
        <ConfirmButton>
          <ViewCta onClick={onSubmit}>
            <Text bold color="fixedWhite" fontSize={18}>
              {bookTranslations.bookPage.confirmBookingButton}
            </Text>
          </ViewCta>
        </ConfirmButton>
      </PopUpContainer>
    </Modal>
  );
};

export default BookATableModal;
