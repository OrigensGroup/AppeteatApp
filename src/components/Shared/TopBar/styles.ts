import styled from 'styled-components/native';

export const TopContainer = styled.View<{ showBorder?: boolean }>`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: ${({ theme }) => theme.spacing.single} ${({ theme }) => theme.spacing.triple}
    ${({ theme }) => theme.spacing.single} ${({ theme }) => theme.spacing.triple};

  ${({ theme }) => theme.os === 'android' && `padding-top: ${theme.spacing.double}`};

  ${({ showBorder, theme }) =>
    showBorder &&
    `border-bottom-width: 1px; border-color: ${theme.colors.border}; padding-bottom: ${theme.spacing.double}`};
`;

export const TitleWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom-color: ${({ theme }) => theme.colors.active};
  border-bottom-width: 3px;
`;

export const EmptyDiv = styled.View`
  width: ${({ theme }) => theme.spacing.multiple(3)};
  height: ${({ theme }) => theme.spacing.triple};
`;
