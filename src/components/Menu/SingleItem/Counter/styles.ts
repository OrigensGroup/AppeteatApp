import styled from 'styled-components/native';

export const MainCounterWrapper = styled.View`
  height: ${({ theme }) => theme.spacing.multiple(7)};
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.modalbackground};
  border-radius: ${({ theme }) => theme.spacing.single};
`;
