import styled from 'styled-components/native';

export const HomeLogoContainer = styled.View`
  height: ${({ theme }) => theme.spacing.multiple(11)};
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  align-items: center;
`;
