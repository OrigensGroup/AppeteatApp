import styled from 'styled-components/native';

export const MainCoutnerWrapper = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.quantityUpdate};
  border-radius: ${({ theme }) => theme.spacing.single};
`;
