import styled from 'styled-components/native';

export const MapContainer = styled.TouchableOpacity`
  width: 100%;
  height: ${({ theme }) => theme.spacing.multiple(17)}};
  border-width: 1px;
  background-color: #fff;
  border-radius: ${({ theme }) => theme.spacing.double};
  border-color: transparent;
  border-bottom-width: 0;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;