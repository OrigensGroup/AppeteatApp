import React from 'react';
import { useTheme } from 'styled-components/native';
import FastImage from 'react-native-fast-image';

import useSettings from '../../../hooks/useSettings';
import { normalisedSource } from '../../../utils/image';

import { HomeLogoContainer } from './styles';

interface LogoProps {}

const Logo: React.FunctionComponent<LogoProps> = () => {
  const [settings] = useSettings();
  const theme = useTheme();

  return (
    <HomeLogoContainer>
      <FastImage
        resizeMode={FastImage.resizeMode.contain}
        source={normalisedSource(settings.logoImage)}
        style={{
          width: Number(theme.spacing.multiple(25).replace('px', '')),
          height: Number(theme.spacing.multiple(10).replace('px', '')),
        }}
      />
    </HomeLogoContainer>
  );
};

export default Logo;
