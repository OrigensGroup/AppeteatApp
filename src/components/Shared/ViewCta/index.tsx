import React from 'react';

import { MainButton } from './styles';

interface ViewCtaProps {
  ghost?: boolean;
  onClick?: () => void;
  redDelete?: boolean;
}

const ViewCta: React.FunctionComponent<ViewCtaProps> = ({ ghost, children, onClick, redDelete }) => {
  return (
    <MainButton ghost={ghost} onPress={onClick} redDelete={redDelete}>
      {children}
    </MainButton>
  );
};

export default ViewCta;
