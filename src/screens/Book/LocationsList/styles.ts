import styled from 'styled-components/native';

export const LocationPageContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.textSecondary};
  height: 100%;
`;
export const MapImage = styled.Image`
  height: 100%;
  width: 100%;
`;

export const SingleVenueContainer = styled.View`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.triple};
  left: 0px;
  right: 0px;
  padding: ${({ theme }) => theme.spacing.half}; 0;
`;
