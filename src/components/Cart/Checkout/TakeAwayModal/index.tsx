import React, { useState } from 'react';
import { Platform } from 'react-native';
import Modal from 'react-native-modal';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons';

import { useTheme } from 'styled-components';

import LoginTextField from '../../../shared/LoginTextField';
import Text from '../../../shared/Text';
import ViewCta from '../../../shared/ViewCta';
import Picker from '../../../Book/Picker';

import { minutes } from '../../../../translations/book';

import cartTranslations from '../../../../translations/cart';

import { PopUpContainer, TakeAwayModalHeader, TakeAwayTextfieldContainer, PickerContainer } from './styles';

interface TakeAwayModalProps {
  isModalVisible: boolean;
  onClose: () => void;
  delivery?: boolean;
  handleChange: (s: string) => (text: string) => void;
}

const TakeAwayModal: React.FunctionComponent<TakeAwayModalProps> = ({
  delivery,
  handleChange,
  isModalVisible,
  onClose,
}) => {
  const theme = useTheme();
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState<'date' | 'time' | undefined>('date');
  const [show, setShow] = useState(false);

  const showMode = (currentMode: 'date' | 'time' | undefined) => {
    setShow(true);
    setMode(currentMode);
  };

  const onChange = (_: Event, selectedDate: Date | undefined) => {
    setShow(Platform.OS === 'ios');
    selectedDate && setDate(selectedDate);
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <Modal
      animationInTiming={400}
      animationOutTiming={400}
      avoidKeyboard
      isVisible={isModalVisible}
      onBackdropPress={onClose}
      style={{
        margin: 0,
      }}
    >
      <PopUpContainer>
        <TakeAwayModalHeader>
          <Text bold color="primary" fontSize={16}>
            {delivery
              ? cartTranslations.checkoutPage.deliveryModal.title
              : cartTranslations.checkoutPage.takeAwayModal.title}
          </Text>
        </TakeAwayModalHeader>

        {delivery ? (
          <TakeAwayTextfieldContainer>
            <LoginTextField
              placeholder="i.e. 2 Oriens Mews"
              textContentType="none"
              updateValue={handleChange('deliveryAddress')}
            />
            <LoginTextField placeholder="Insert city" textContentType="none" updateValue={handleChange('city')} />
            <LoginTextField
              placeholder="Insert phone number"
              textContentType="none"
              updateValue={handleChange('phoneNumber')}
            />
            <PickerContainer>
              <Picker
                icon={<Icon color={theme.colors.fixedBlack} name="ios-time-outline" size={28} />}
                onPress={showTimepicker}
                textValue={
                  date.getHours() > 11
                    ? `${minutes[date.getHours()]}:${date.getMinutes()} PM`
                    : `${minutes[date.getHours()]}:${date.getMinutes()} AM`
                }
                title="Delivery Time"
              />
            </PickerContainer>
            {show && (
              <DateTimePicker
                display="spinner"
                minimumDate={new Date()}
                minuteInterval={15}
                mode={mode}
                onChange={onChange}
                style={{ flex: 1 }}
                testID="dateTimePicker"
                value={date}
              />
            )}
          </TakeAwayTextfieldContainer>
        ) : (
          <TakeAwayTextfieldContainer>
            <PickerContainer>
              <Picker
                icon={<Icon color={theme.colors.fixedBlack} name="ios-time-outline" size={28} />}
                onPress={showTimepicker}
                textValue={
                  date.getHours() > 11
                    ? `${minutes[date.getHours()]}:${date.getMinutes()} PM`
                    : `${minutes[date.getHours()]}:${date.getMinutes()} AM`
                }
                title="Pick up time"
              />
            </PickerContainer>
            {show && (
              <DateTimePicker
                display="spinner"
                minimumDate={new Date()}
                minuteInterval={15}
                mode={mode}
                onChange={(_, sele) => handleChange('orderTime')(sele?.toString() ?? '')}
                style={{ flex: 1 }}
                testID="dateTimePicker"
                value={date}
              />
            )}
            <LoginTextField
              placeholder="Insert phone number"
              textContentType="none"
              updateValue={handleChange('phoneNumber')}
            />
          </TakeAwayTextfieldContainer>
        )}

        <ViewCta onClick={onClose}>
          <Text bold color="fixedWhite" fontSize={20}>
            {cartTranslations.checkoutPage.takeAwayModal.cta}
          </Text>
        </ViewCta>
      </PopUpContainer>
    </Modal>
  );
};

export default TakeAwayModal;
