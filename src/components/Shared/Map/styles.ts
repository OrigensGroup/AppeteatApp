import styled from 'styled-components/native';

export const MapContainer = styled.TouchableOpacity`
  width: 100%;
  border-width: 1px;
  background-color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: ${({ theme }) => theme.spacing.double};
  border-color: transparent;
  border-bottom-width: 0;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
