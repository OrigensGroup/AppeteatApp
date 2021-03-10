import React from 'react';

import { LogoContainer, LogoImage } from './styles';

interface LogoProps {}

const Logo: React.FunctionComponent<LogoProps> = () => {
  return (
    <LogoContainer>
      <LogoImage resizeMode="contain" source={require('../../../img/logo.png')} />
    </LogoContainer>
  );
};

export default Logo;
