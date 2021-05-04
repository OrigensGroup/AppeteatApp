import React, { useCallback, useState } from 'react';
import Modal from 'react-native-modal';
import { Picker as OptionPicker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons';

import { useTheme } from 'styled-components';

import LoginTextField from '../../../shared/LoginTextField';
import Text from '../../../shared/Text';
import ViewCta from '../../../shared/ViewCta';
import Picker from '../../../Book/Picker';

import cartTranslations from '../../../../translations/cart';

import { CheckoutServices } from '../../../../types/Checkout';

import useOrders from '../../../../hooks/useOrders';
import { dateToOption, isAllowedToOrder } from '../../../../utils/orderDateUtils';

import useSettings from '../../../../hooks/useSettings';

import { PopUpContainer, TakeAwayModalHeader, TakeAwayTextfieldContainer, PickerContainer } from './styles';

interface TakeAwayModalProps {
  value: CheckoutServices;
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
  value,
}) => {
  const theme = useTheme();
  const [orders] = useOrders();
  const [settings] = useSettings();
  const [show, setShow] = useState(false);
  const [selectedTimeFrame, setSelectedTimeFrame] = useState(value.orderTime);

  const showMode = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
    onClose();
  };

  const optionsToShow = useCallback(() => {
    const ordersPerSection = settings.deliverySettings.oredersPerTimeFrame;
    const orderTimeFrame = 1000 * 60 * settings.deliverySettings.timeFrame;
    let orderStart = new Date();
    const orderFinish = new Date();
    const settingsMinutes = (time: string) => Number(time.split(':')[1]);
    const settingHours = (time: string) => Number(time.split(':')[0]);

    if (orderStart.getHours() < settingHours(settings.deliverySettings.openTime)) {
      orderStart.setHours(
        settingHours(settings.deliverySettings.openTime),
        settingsMinutes(settings.deliverySettings.openTime),
      );
    }

    orderFinish.setHours(
      Number(settings.deliverySettings.closeTime.split(':')[0]),
      Number(settings.deliverySettings.closeTime.split(':')[1]),
    );

    const orderSections = [];

    while (orderStart < orderFinish) {
      const orderTime = dateToOption(orderStart, orderTimeFrame);

      if (isAllowedToOrder(orders.list, orderTime, ordersPerSection)) {
        orderSections.push(<OptionPicker.Item key={orderTime} label={orderTime} value={orderTime} />);
      }

      orderStart = new Date(orderStart.getTime() + orderTimeFrame);
    }

    return orderSections;
  }, [orders, settings.deliverySettings]);

  return (
    <Modal
      animationInTiming={400}
      animationOutTiming={400}
      avoidKeyboard
      isVisible={isModalVisible}
      onBackdropPress={closeModal}
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
        <TakeAwayTextfieldContainer>
          <PickerContainer>
            <Picker
              icon={<Icon color={theme.colors.fixedBlack} name="ios-time-outline" size={28} />}
              onPress={showMode}
              textValue={selectedTimeFrame}
              title={cartTranslations.checkoutPage.takeAwayModal.orderTime}
            />
          </PickerContainer>
          {show && (
            <OptionPicker
              onValueChange={(itemValue) => {
                handleChange('orderTime')(itemValue);
                setSelectedTimeFrame(itemValue);
              }}
              selectedValue={selectedTimeFrame}
            >
              {optionsToShow()}
            </OptionPicker>
          )}
          <LoginTextField
            defaultValue={value.phoneNumber}
            placeholder={cartTranslations.checkoutPage.takeAwayModal.telephone}
            textContentType="telephoneNumber"
            updateValue={handleChange('phoneNumber')}
          />
          {delivery && (
            <LoginTextField
              defaultValue={value.address}
              placeholder={cartTranslations.checkoutPage.takeAwayModal.address}
              textContentType="fullStreetAddress"
              updateValue={handleChange('address')}
            />
          )}
        </TakeAwayTextfieldContainer>

        <ViewCta onClick={closeModal}>
          <Text bold color="fixedWhite" fontSize={14}>
            {cartTranslations.checkoutPage.takeAwayModal.cta}
          </Text>
        </ViewCta>
      </PopUpContainer>
    </Modal>
  );
};

export default TakeAwayModal;
