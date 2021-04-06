import styled from 'styled-components/native';

export const MainCounterWrapper = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.modalbackground};
  border-radius: ${({ theme }) => theme.spacing.single};
`;
