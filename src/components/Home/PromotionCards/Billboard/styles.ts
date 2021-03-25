import styled from 'styled-components/native';

export const ImagePromotionContainer = styled.View`
  width: 100%;
  height: ${({ theme }) => theme.spacing.multiple(25)};
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.spacing.multiple(3)};
`;

export const ImagePromotionImageContainer = styled.View`
  height: 100%;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.oneAndHalf};
`;
