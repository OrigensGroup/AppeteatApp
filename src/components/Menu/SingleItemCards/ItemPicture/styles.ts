import styled from 'styled-components/native';

export const ItemPictureContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 ${({ theme }) => theme.spacing.double};
  margin: ${({ theme }) => theme.spacing.double} 0;
`;
