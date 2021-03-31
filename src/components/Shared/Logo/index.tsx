import React from 'react';
import { useColorScheme } from 'react-native';

import { HomeLogoContainer, HomeLogoImage } from './styles';

interface LogoProps {}

const Logo: React.FunctionComponent<LogoProps> = () => {
  const mode = useColorScheme();
  const source = mode === 'dark' ? require('../../../img/logo.png') : require('../../../img/logo2.png');
  return (
    <HomeLogoContainer>
      <HomeLogoImage resizeMode="contain" source={source} />
    </HomeLogoContainer>
  );
};

export default Logo;
