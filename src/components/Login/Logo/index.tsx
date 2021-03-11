import React from 'react';
import { useColorScheme } from 'react-native';

import { LogoContainer, LogoImage } from './styles';

interface LogoProps {}

const Logo: React.FunctionComponent<LogoProps> = () => {
  const mode = useColorScheme();
  return (
    <LogoContainer>
      {mode === 'dark' ? (
        <LogoImage source={require('../../../img/logo.png')} />
      ) : (
        <LogoImage source={require('../../../img/logo2.png')} />
      )}
    </LogoContainer>
  );
};

export default Logo;
