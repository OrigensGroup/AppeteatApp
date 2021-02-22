import styled from 'styled-components/native';

export const SettingsContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.textSecondary};
  height: 100%;
`;
export const SettingsWrap = styled.View`
  margin: 0 ${({ theme }) => theme.spacing.multiple(3)} 0 0;
`;
