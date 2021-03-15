import React from 'react';

import { GooglePayContainer, GooglePayImage } from './styles';

interface GooglePayProps {
  active?: boolean;
  onClick: () => void;
}

const GooglePay: React.FunctionComponent<GooglePayProps> = ({ active, onClick }) => {
  return (
    <GooglePayContainer active={active} onPress={onClick}>
      <GooglePayImage resizeMode="contain" source={require('./../../../../img/GooglePay.png')} />
    </GooglePayContainer>
  );
};

export default GooglePay;
