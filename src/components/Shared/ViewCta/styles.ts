import styled from 'styled-components/native';

interface ViewCtaProps {
  redDelete?: boolean;
}

export const MainButton = styled.TouchableOpacity<ViewCtaProps>`
  height: ${({ theme }) => theme.spacing.multiple(7)};
  border-radius: ${({ theme }) => theme.spacing.single};

  ${({ redDelete, theme }) =>
    redDelete ? `background-color: ${theme.colors.activeRed}` : `background-color: ${theme.colors.active}`};

  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;

  width: 100%;
`;
