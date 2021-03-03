import React from 'react';
import { ImagePromotionContainer, ImagePromotionImageContainer, ImagePromotionImage } from './styles';

interface ImagePromotionProps {
  image: string;
}

const ImagePromotion: React.FunctionComponent<ImagePromotionProps> = ({ image }) => {
  return (
    <ImagePromotionContainer>
      <ImagePromotionImageContainer>
        <ImagePromotionImage source={{ uri: image }} />
      </ImagePromotionImageContainer>
    </ImagePromotionContainer>
  );
};

export default ImagePromotion;
