import React from 'react';

import { MainButton } from './styles';

interface ViewCtaProps {
  onClick: () => void;
  redDelete?: boolean;
}

const ViewCta: React.FunctionComponent<ViewCtaProps> = ({ children, onClick, redDelete }) => {
  return <MainButton redDelete={redDelete} onPress={onClick}>{children}</MainButton>;
};

export default ViewCta;
