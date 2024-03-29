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

export const InfoUpdateContainer = styled.View`
  display: flex;
  justify-content: flex-end;
`;
