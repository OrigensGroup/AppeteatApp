import React from 'react';

import { HomeLogoContainer, HomeLogoImage } from './styles';

interface LogoProps {}

const Logo: React.FunctionComponent<LogoProps> = () => {
  return (
    <HomeLogoContainer>
      <HomeLogoImage resizeMode="contain" source={require('../../../img/logo.png')} />
    </HomeLogoContainer>
  );
};

export default Logo;
