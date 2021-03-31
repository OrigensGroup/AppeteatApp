import styled from 'styled-components/native';

export const SettingsContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  height: 100%;
  padding: 0 ${({ theme }) => theme.spacing.double};
`;

export const ProfileSection = styled.View`
  padding: ${({ theme }) => theme.spacing.single} 0;
`;
export const TextContainer = styled.View`
  padding: ${({ theme }) => theme.spacing.single} 0;
`;
export const InfoContainer = styled.View`
  display: flex;
  flex-direction: row;
`;
export const SaveButton = styled.View`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.double};
  right: ${({ theme }) => theme.spacing.double};
`;
