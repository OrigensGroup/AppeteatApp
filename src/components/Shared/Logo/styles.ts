import styled from 'styled-components/native';

export const HomeLogoContainer = styled.View`
  height: ${({ theme }) => theme.spacing.multiple(10)};
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
`;

export const HomeLogoImage = styled.Image`
  width: ${({ theme }) => theme.spacing.multiple(10)};
  height: ${({ theme }) => theme.spacing.multiple(10)};
`;
