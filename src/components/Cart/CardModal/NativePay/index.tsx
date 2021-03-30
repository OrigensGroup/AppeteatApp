import React from 'react';
import { Platform } from 'react-native';

import Text from '../../../shared/Text';

import { NativePayContainer, NativePayImage, NativePayText } from './styles';

interface NativePayProps {}

const NativePay: React.FunctionComponent<NativePayProps> = () => {
  const isIos = Platform.OS === 'ios';
  const source = isIos ? require('./../../../../img/ApplePay.png') : require('./../../../../img/GooglePay.png');

  return (
    <NativePayContainer>
      <NativePayImage resizeMode="contain" source={source} />
      <NativePayText>
        <Text color="primary" fontSize={15}>
          Apple Pay
        </Text>
      </NativePayText>
    </NativePayContainer>
  );
};

export default NativePay;
