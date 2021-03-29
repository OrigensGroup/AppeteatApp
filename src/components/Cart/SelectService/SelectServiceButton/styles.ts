import styled from 'styled-components/native';

interface ButtonContainerProps {
  active?: boolean;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  flex: 1;
  height: ${({ theme }) => theme.spacing.multiple(5)};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.spacing.single};
  justify-content: center;
  align-items: center;
  ${({ active, theme }) =>
    active &&
    `
    background: ${theme.colors.active};
  `}
`;
