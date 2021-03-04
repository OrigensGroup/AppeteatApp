import React from 'react';

import { MainButton } from './styles';

interface ViewCtaProps {
  onClick: () => void;
}

const ViewCta: React.FunctionComponent<ViewCtaProps> = ({ children, onClick }) => {
  return <MainButton onPress={onClick}>{children}</MainButton>;
};

export default ViewCta;
