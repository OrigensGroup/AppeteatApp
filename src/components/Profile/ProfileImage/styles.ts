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
