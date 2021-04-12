import React, { useState } from 'react';
import Modal from 'react-native-modal';

import DateTimePicker, { Event } from '@react-native-community/datetimepicker';

import Icon from 'react-native-vector-icons/Ionicons';
import CalendarIcon from 'react-native-vector-icons/AntDesign';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components';

import { v4 } from 'uuid';

import useBookings from '../../../hooks/useBookings';
import useUserData from '../../../hooks/useUserData';

import Picker from '../Picker';
import Spinner from '../Spinner';

import Text from '../../shared/Text';
import ViewCta from '../../shared/ViewCta';

import { Booking } from '../../../types/Booking';
import { Venue } from '../../../types/Venue';

import bookTranslations, { minutes, months } from '../../../translations/book';

import {
  SpinnerContainer,
  PopUpContainer,
  TimePickers,
  TimePickersRow,
  ConfirmButton,
  PickerContainer,
} from './styles';

interface BookATableModalProps {
  venue: Venue | undefined;
  isModalVisible: boolean;
  onClose: () => void;
}

const BookATableModal: React.FunctionComponent<BookATableModalProps> = ({ isModalVisible, onClose, venue }) => {
  const { user } = useUserData();
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

  const onChange = (_: Event, selectedDate: Date | undefined) => {
    setShow(Platform.OS === 'ios');
    selectedDate && setDate(selectedDate);
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
    if (venue) {
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
    }
  };

  if (!venue) {
    return <></>;
  }

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
          <Spinner
            initialValue={localQuantity}
            onChange={updateQuantity}
            title={bookTranslations.locationsListPage.bookATableModal.spinner}
          />
        </SpinnerContainer>
        <ConfirmButton>
          <ViewCta onClick={onSubmit}>
            <Text bold color="fixedWhite" fontSize={18}>
              {bookTranslations.locationsListPage.bookATableModal.confirm}
            </Text>
          </ViewCta>
        </ConfirmButton>
      </PopUpContainer>
    </Modal>
  );
};

export default BookATableModal;
