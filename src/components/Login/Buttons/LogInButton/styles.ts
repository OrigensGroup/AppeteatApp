import styled from 'styled-components/native';

interface ButtonContainerProps {
  secondary?: boolean;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  width: 60%;
  height: ${({ theme }) => theme.spacing.multiple(5)};
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #50494991;

  margin: 0 ${({ theme }) => theme.spacing.multiple(3)};
  ${({ theme }) => theme.spacing.double};
  ${({ theme }) => theme.spacing.multiple(3)};

  border-top-right-radius: ${({ theme }) => theme.spacing.single};
  border-top-left-radius: ${({ theme }) => theme.spacing.single};
  border-bottom-right-radius: ${({ theme }) => theme.spacing.single};
  border-bottom-left-radius: ${({ theme }) => theme.spacing.single};

  ${({ secondary, theme }) =>
    secondary &&
    `
    width: auto;

    background-color: transparent;
    align-items: flex-start;
    margin: 0;
    font-size: ${theme.spacing.double};
    font-weight: bold;
  `};
`;

export const ButtonText = styled.Text<ButtonContainerProps>`
  ${({ secondary, theme }) =>
    secondary &&
    `
    font-size: ${theme.spacing.double};
    font-weight: bold;
  `};
`;
