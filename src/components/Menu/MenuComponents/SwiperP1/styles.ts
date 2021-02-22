import styled from 'styled-components/native';

export const Wrapper = styled.View`
  /* padding-bottom: ${({ theme }) => theme.spacing.multiple(1)}; */
`;

export const Page1 = styled.View`
  background-color: #fc7930;
  justify-content: center;
  align-items: center;
`;

export const Page2 = styled.View`
  background-color: #80244e;
  justify-content: center;
  align-items: center;
`;

export const Page3 = styled.View`
  background-color: ${({ theme }) => theme.colors.textSecondary};
  justify-content: center;
  align-items: center;
`;
