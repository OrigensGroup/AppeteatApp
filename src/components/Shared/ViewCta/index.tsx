import React from 'react';

import { MainButton } from './styles';

interface ViewCtaProps {
  onClick: () => void;
  redDelete?: boolean;
}

const ViewCta: React.FunctionComponent<ViewCtaProps> = ({ children, onClick, redDelete }) => {
  return (
    <MainButton onPress={onClick} redDelete={redDelete}>
      {children}
    </MainButton>
  );
};

export default ViewCta;
