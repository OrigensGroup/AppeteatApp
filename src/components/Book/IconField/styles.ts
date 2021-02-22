import styled from 'styled-components/native';

interface IconFieldProps {}

export const IconFieldContainer = styled.View<IconFieldProps>`
  display: flex;
  flex-direction: row;
  border-radius: ${({ theme }) => theme.spacing.double};
  padding: ${({ theme }) => theme.spacing.single} ${({ theme }) => theme.spacing.double};
`;
