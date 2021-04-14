import styled from 'styled-components/native';

export const SettingsContainer = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  height: 100%;
`;

export const ProfileSection = styled.View`
  padding: ${({ theme }) => theme.spacing.single} ${({ theme }) => theme.spacing.double};
`;

export const TextContainer = styled.View`
  padding: ${({ theme }) => theme.spacing.single} 0;
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
