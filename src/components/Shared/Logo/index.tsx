import React from 'react';
import { useColorScheme } from 'react-native';

import useSettings from '../../../hooks/useSettings';

import { HomeLogoContainer, HomeLogoImage } from './styles';

interface LogoProps {}

const Logo: React.FunctionComponent<LogoProps> = () => {
  const [settings] = useSettings();
  const mode = useColorScheme();

  const source =
    settings.features.FEAT_DARK_MODE && mode === 'dark'
      ? require('../../../img/logo.png')
      : { uri: settings.logoImage };

  return (
    <HomeLogoContainer>
      <HomeLogoImage resizeMode="contain" source={source} />
    </HomeLogoContainer>
  );
};

export default Logo;
