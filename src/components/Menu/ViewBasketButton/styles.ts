import styled from 'styled-components/native';

export const MainButtonWrapper = styled.View`
  flex: 1;
  display: flex;
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.double};
  padding: 0 ${({ theme }) => theme.spacing.triple};
`;
