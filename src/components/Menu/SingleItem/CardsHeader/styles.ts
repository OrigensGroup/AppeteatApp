import styled from 'styled-components/native';

export const CardsHeaderContainer = styled.View`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.single} ${({ theme }) => theme.spacing.triple};
  padding-bottom: ${({ theme }) => theme.spacing.double};
  ${({ theme }) => theme.os === 'android' && `padding-top: ${theme.spacing.multiple(5)}`};
`;

export const TitleWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom-color: ${({ theme }) => theme.colors.active};
  border-bottom-width: 3px;
`;

export const EmptyDiv = styled.View`
  width: ${({ theme }) => theme.spacing.triple};
`;
