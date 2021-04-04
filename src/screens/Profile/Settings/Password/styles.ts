import styled from 'styled-components/native';

export const PasswordContainer = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  height: 100%;
`;

export const PasswordFieldContainer = styled.View`
  display: flex;
  margin: ${({ theme }) => theme.spacing.double};
`;

export const SaveButton = styled.View`
  position: absolute;
  left: ${({ theme }) => theme.spacing.double};
  bottom: ${({ theme }) => theme.spacing.double};
  right: ${({ theme }) => theme.spacing.double};
`;

export const InfoUpdatedContainer = styled.View`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.double};
  left: ${({ theme }) => theme.spacing.double};
  flex: 1;
`;
