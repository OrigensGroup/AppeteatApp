import React from 'react';
import { useColorScheme } from 'react-native';

import { HomeLogoContainer, HomeLogoImage } from './styles';

interface LogoProps {}

const Logo: React.FunctionComponent<LogoProps> = () => {
  const mode = useColorScheme();
  return (
    <HomeLogoContainer>
      {mode === 'dark' ? (
        <HomeLogoImage source={require('../../../img/logo.png')} />
      ) : (
        <HomeLogoImage source={require('../../../img/logo2.png')} />
      )}
    </HomeLogoContainer>
  );
};

export default Logo;
