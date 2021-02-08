import styled, { css } from 'styled-components';

import { fromSmall } from 'style/utils/breakpoints';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.util.primaryBackground};
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.util.secondaryBackground};
  padding: ${({ theme }) => theme.spacing.multiple(4)};
  border-radius: ${({ theme }) => theme.spacing.single};

  box-shadow: 1px 3px 6px 0px rgba(67, 70, 74, 0.12), -2px 2px 5px 0px rgba(67, 86, 100, 0.12);
`;

export const HeadingText = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing.triple};

  ${fromSmall(css`
    padding-left: ${({ theme }) => theme.spacing.triple};
    padding-right: ${({ theme }) => theme.spacing.triple};
  `)}
`;

export const ErrorMessage = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.triple};
`;

export const ButtonSpace = styled.div`
  margin-top: ${({ theme }) => theme.spacing.triple};
`;

interface SpaceProps {
  show?: boolean;
}

export const Space = styled.div<SpaceProps>`
  margin-bottom: ${({ show, theme }) => (show ? theme.spacing.half : theme.spacing.multiple(4))};
`;

export const GoToLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: underline;

  margin-top: ${({ theme }) => theme.spacing.double};
`;
