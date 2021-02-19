import React from 'react';

import { IconFieldContainer } from './styles';

interface IconFieldProps {}

const IconField: React.FunctionComponent<IconFieldProps> = ({ children }) => {
  return <IconFieldContainer>{children}</IconFieldContainer>;
};

export default IconField;
