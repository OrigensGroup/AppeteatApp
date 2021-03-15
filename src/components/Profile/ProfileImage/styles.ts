import styled from 'styled-components/native';

export const ProfileImageContainer = styled.View`
  width: ${({ theme }) => theme.spacing.multiple(18)};
  height: ${({ theme }) => theme.spacing.multiple(18)};
  border-radius: ${({ theme }) => theme.spacing.multiple(9)};
`;

export const AccountImage = styled.Image`
  width: ${({ theme }) => theme.spacing.multiple(18)};
  height: ${({ theme }) => theme.spacing.multiple(18)};
  border-radius: ${({ theme }) => theme.spacing.multiple(9)};
`;

export const AccountImageBackground = styled.View`
  width: ${({ theme }) => theme.spacing.multiple(18)};
  height: ${({ theme }) => theme.spacing.multiple(18)};
  border-radius: ${({ theme }) => theme.spacing.multiple(9)};
  background: ${'#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)};
  display: flex;
  justify-content: center;
  align-items: center;
`;
