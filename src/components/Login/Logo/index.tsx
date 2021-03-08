import React from 'react';

import { LogoContainer, LogoImage } from './styles';

interface LogoProps {}

const Logo: React.FunctionComponent<LogoProps> = () => {
  return (
    <LogoContainer>
      <LogoImage source={require('../../../img/logo.png')} />
    </LogoContainer>
  );
};

export default Logo;
