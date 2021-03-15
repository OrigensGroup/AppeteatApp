import React from 'react';

import cartTranslations from '../../../../translations/cart';
import Text from '../../../shared/Text';

import { ButtonContainer } from './styles';

interface TakeAwayProps {
  onClick?: () => void;
}

const TakeAway: React.FunctionComponent<TakeAwayProps> = ({ onClick }) => {
  return (
    <ButtonContainer onPress={onClick}>
      <Text color="primary" fontSize={18}>
        {cartTranslations.takeAway.placeholder}
      </Text>
    </ButtonContainer>
  );
};

export default TakeAway;
