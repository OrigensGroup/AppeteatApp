import React from 'react';
import { useColorScheme } from 'react-native';

import useSettings from '../../../hooks/useSettings';

import { LogoContainer, LogoImage } from './styles';

interface LogoProps {}

const Logo: React.FunctionComponent<LogoProps> = () => {
  const [settings] = useSettings();
  const mode = useColorScheme();

  const source =
    settings.features.FEAT_DARK_MODE && mode === 'dark'
      ? require('../../../img/logo.png')
      : { uri: settings.logoImage };

  return (
    <LogoContainer>
      <LogoImage resizeMode="contain" source={source} />
    </LogoContainer>
  );
};

export default Logo;
