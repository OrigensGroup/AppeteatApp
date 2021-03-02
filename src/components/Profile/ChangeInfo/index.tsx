import React from 'react';
import TextField from '../../Shared/LoginTextField';

import { ChangeInfoContainer, Container } from './styles';

interface ChangeInfoProps {
  icon: React.ReactElement;
}

const ChangeInfo: React.FunctionComponent<ChangeInfoProps> = ({icon}) => {
  return (
    <ChangeInfoContainer>
      <Container>
        {icon}
        <TextField
          textContentType="none"
        ></TextField>
        </Container>
    </ChangeInfoContainer>
  );
};

export default ChangeInfo;