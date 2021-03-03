import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'styled-components';

import { HeartLikeContainer } from './styles';

interface HeartLikeProps {}

const HeartLike: React.FunctionComponent<HeartLikeProps> = () => {
  const theme = useTheme();

  return (
    <HeartLikeContainer>
      <Icon color={theme.colors.textPrimary} name="heart-outline" size={28} />
    </HeartLikeContainer>
  );
};

export default HeartLike;
