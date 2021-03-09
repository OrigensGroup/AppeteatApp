import React, { useState } from 'react';
import InputSpinner from 'react-native-input-spinner';
import Modal from 'react-native-modal';

import DateTimePicker from '@react-native-community/datetimepicker';
import {
  SpinnerContainer,
  ModalContainer,
  PopUpContainer,
  DateContainer,
  ConfirmButton,
  PickerContainer,
} from './styles';
import Text from '../../shared/Text';
import Picker from '../Picker';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components';
import Spinner from '../Spinner';
import bookTranslations from '../../../translations/book';
import ViewCta from '../../shared/ViewCta';

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

const BookATableModal: React.FunctionComponent<BookATableModalProps> = ({ isModalVisible, venue, onClose }) => {
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
      isVisible={isModalVisible}
      onBackdropPress={onClose}
      avoidKeyboard={true}
      style={{
        margin: 0,
      }}
    >
      <PopUpContainer>
        <Picker
          title="Venue"
          icon={<Icon color={theme.colors.textPrimary} name="location-outline" size={28} />}
          textValue={venue.name}
        />
        <DateContainer>
          <PickerContainer>
            <Picker
              title="Date"
              onPress={showDatepicker}
              icon={<Icon color={theme.colors.textPrimary} name="ios-time-outline" size={28} />}
              textValue={`${date.getDate()} ${months[date.getMonth()]}`}
            />
          </PickerContainer>
          <PickerContainer>
            <Picker
              title="Time"
              onPress={showTimepicker}
              icon={<Icon color={theme.colors.textPrimary} name="ios-time-outline" size={28} />}
              textValue={
                date.getHours() > 11
                  ? `${minutes[date.getHours()]}:${date.getMinutes()} PM`
                  : `${minutes[date.getHours()]}:${date.getMinutes()} AM`
              }
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
            <Text color="secondary" fontSize={18} bold>
              {bookTranslations.bookPage.confirmBookingButton}
            </Text>
          </ViewCta>
        </ConfirmButton>
      </PopUpContainer>
    </Modal>
  );
};

export default BookATableModal;