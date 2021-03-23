import styled from 'styled-components/native';

interface ButtonContainerProps {
  secondary?: boolean;
}

export const LocationContainer = styled.View`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
`;

export const MapContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  width: 100%;
  height: ${({ theme }) => theme.spacing.multiple(17)};

  border-width: 1px;
  background-color: ${({ theme }) => theme.colors.textSecondary}55;
  border-radius: ${({ theme }) => theme.spacing.double};
  border-color: ${({ theme }) => theme.colors.border};
`;

export const FindButton = styled.View<ButtonContainerProps>`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.oneAndHalf};
  left: ${({ theme }) => theme.spacing.oneAndHalf};

  background-color: ${({ theme }) => theme.colors.fixedWhite};
  opacity: 0.9;
  border-radius: ${({ theme }) => theme.spacing.multiple(3)};
  padding: ${({ theme }) => theme.spacing.half} ${({ theme }) => theme.spacing.oneAndHalf};
  ${({ secondary }) =>
    secondary &&
    `
    opacity: 0.7
    ;
  `};
`;
