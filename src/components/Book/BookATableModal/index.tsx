import React, { useState } from 'react';
import Modal from 'react-native-modal';

import DateTimePicker from '@react-native-community/datetimepicker';

import Icon from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components';

import Picker from '../Picker';
import Text from '../../shared/Text';
import Spinner from '../Spinner';
import bookTranslations from '../../../translations/book';
import ViewCta from '../../shared/ViewCta';

import { SpinnerContainer, PopUpContainer, DateContainer, ConfirmButton, PickerContainer } from './styles';

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
  const theme = useTheme();

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState<'date' | 'time' | undefined>('date');
  const [show, setShow] = useState(false);

  const onChange = (_: any, selectedDate: any) => {
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
          icon={<Icon color={theme.colors.textPrimary} name="location-outline" size={28} />}
          textValue={venue.name}
          title="Venue"
        />
        <DateContainer>
          <PickerContainer>
            <Picker
              icon={<Icon color={theme.colors.textPrimary} name="ios-time-outline" size={28} />}
              onPress={showDatepicker}
              textValue={`${date.getDate()} ${months[date.getMonth()]}`}
              title="Date"
            />
          </PickerContainer>
          <PickerContainer>
            <Picker
              icon={<Icon color={theme.colors.textPrimary} name="ios-time-outline" size={28} />}
              onPress={showTimepicker}
              textValue={
                date.getHours() > 11
                  ? `${minutes[date.getHours()]}:${date.getMinutes()} PM`
                  : `${minutes[date.getHours()]}:${date.getMinutes()} AM`
              }
              title="Time"
            />
          </PickerContainer>
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
        </DateContainer>
        <SpinnerContainer>
          <Spinner title="No of member" />
        </SpinnerContainer>
        <ConfirmButton>
          <ViewCta onClick={onClose}>
            <Text bold color="secondary" fontSize={18}>
              {bookTranslations.bookPage.confirmBookingButton}
            </Text>
          </ViewCta>
        </ConfirmButton>
      </PopUpContainer>
    </Modal>
  );
};

export default BookATableModal;
