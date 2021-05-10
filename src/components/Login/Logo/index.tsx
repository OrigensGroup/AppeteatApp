import React from 'react';
import { useTheme } from 'styled-components/native';
import FastImage from 'react-native-fast-image';

import useSettings from '../../../hooks/useSettings';
import { normalisedSource } from '../../../utils/image';

import { LogoContainer } from './styles';

interface LogoProps {}

const Logo: React.FunctionComponent<LogoProps> = () => {
  const [settings] = useSettings();
  const theme = useTheme();

  return (
    <LogoContainer>
      <FastImage
        resizeMode={FastImage.resizeMode.contain}
        source={normalisedSource(settings.logoImage)}
        style={{
          width: '100%',
          height: Number(theme.spacing.multiple(20).replace('px', '')),
        }}
      />
    </LogoContainer>
  );
};

export default Logo;
