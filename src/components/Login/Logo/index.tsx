import React from 'react';
import { useColorScheme } from 'react-native';

import { LogoContainer, LogoImage } from './styles';

interface LogoProps {}

const Logo: React.FunctionComponent<LogoProps> = () => {
  const mode = useColorScheme();
  const source = mode === 'dark' ? require('../../../img/logo.png') : require('../../../img/logo2.png');

  return (
    <LogoContainer>
      <LogoImage resizeMode="contain" source={source} />
    </LogoContainer>
  );
};

export default Logo;
