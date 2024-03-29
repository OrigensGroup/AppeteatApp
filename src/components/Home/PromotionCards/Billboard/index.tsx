import React from 'react';
import FastImage from 'react-native-fast-image';
import { useTheme } from 'styled-components';

import { normalisedSource } from '../../../../utils/image';

import { ImagePromotionContainer, ImagePromotionImageContainer } from './styles';

interface ImagePromotionProps {
  image: string;
}

const ImagePromotion: React.FunctionComponent<ImagePromotionProps> = ({ image }) => {
  const theme = useTheme();

  return (
    <ImagePromotionContainer>
      <ImagePromotionImageContainer>
        <FastImage
          resizeMode={FastImage.resizeMode.cover}
          source={normalisedSource(image)}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: Number(theme.spacing.triple.replace('px', '')),
          }}
        />
      </ImagePromotionImageContainer>
    </ImagePromotionContainer>
  );
};

export default ImagePromotion;
