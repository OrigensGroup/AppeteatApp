import styled from 'styled-components/native';

interface ViewCtaProps {
  redDelete?: boolean;
  ghost?: boolean;
}

export const MainButton = styled.TouchableOpacity<ViewCtaProps>`
  height: ${({ theme }) => theme.spacing.multiple(7)};
  border-radius: ${({ theme }) => theme.spacing.single};

  ${({ redDelete, theme }) =>
    redDelete ? `background-color: ${theme.colors.actionRed}` : `background-color: ${theme.colors.active}`};

  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;

  width: 100%;

  ${({ ghost, theme }) =>
    ghost &&
    `
      background-color: ${theme.colors.backgroundColor};
      border: 1px solid ${theme.colors.active};
    `}
`;
