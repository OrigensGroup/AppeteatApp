import styled from 'styled-components/native';

export const LinkWrapper = styled.View`
  margin: ${({ theme }) => theme.spacing.multiple(3)} ${({ theme }) => theme.spacing.multiple(3)}
    ${({ theme }) => theme.spacing.single} ${({ theme }) => theme.spacing.multiple(3)};
`;
