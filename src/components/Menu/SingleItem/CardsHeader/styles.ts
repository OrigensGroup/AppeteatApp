import styled from 'styled-components/native';

export const CardsHeaderContainer = styled.View`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: ${({ theme }) => theme.spacing.single} ${({ theme }) => theme.spacing.triple};

  ${({ theme }) => theme.os === 'android' && `padding-top: ${theme.spacing.double}`};
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
