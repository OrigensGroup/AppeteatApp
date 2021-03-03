import styled from 'styled-components/native';

export const LocationContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: ${({ theme }) => theme.spacing.multiple(17)};
  padding: ${({ theme }) => theme.spacing.double} ${({ theme }) => theme.spacing.double};
  margin-bottom: ${({ theme }) => theme.spacing.multiple(4)};
`;

export const MapContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  width: 100%;
  height: ${({ theme }) => theme.spacing.multiple(17)};

  border-width: 1px;
  background-color: ${({ theme }) => theme.colors.textSecondary}55;
  border-radius: ${({ theme }) => theme.spacing.double};
  border-color: ${({ theme }) => theme.colors.border};
`;

export const FindButton = styled.View`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.double};
  left: ${({ theme }) => theme.spacing.double};

  background-color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: ${({ theme }) => theme.spacing.multiple(3)};
  padding: ${({ theme }) => theme.spacing.half} ${({ theme }) => theme.spacing.single};
`;
