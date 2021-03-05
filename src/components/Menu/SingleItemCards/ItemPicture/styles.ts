import styled from 'styled-components/native';

export const ItemPictureContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 ${({ theme }) => theme.spacing.double};
  margin: ${({ theme }) => theme.spacing.double} 0;
`;

export const ItemPic = styled.Image`
  height: ${({ theme }) => theme.spacing.multiple(40)};
  width: 100%;
  border-bottom-left-radius: ${({ theme }) => theme.spacing.double};
  border-bottom-right-radius: ${({ theme }) => theme.spacing.double};
  border-top-left-radius: ${({ theme }) => theme.spacing.double};
  border-top-right-radius: ${({ theme }) => theme.spacing.double};
`;
