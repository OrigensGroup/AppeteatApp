import styled from 'styled-components/native';

interface BankCardProps {
  active?: boolean;
}

export const BankCardContainer = styled.TouchableOpacity<BankCardProps>`
  height: ${({ theme }) => theme.spacing.multiple(7)};
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: ${({ theme }) => theme.colors.border};
  border-width: 1px;
  border-radius: ${({ theme }) => theme.spacing.single};
  padding: ${({ theme }) => theme.spacing.single};
  ${({ active }) =>
    active &&
    `
    background: #B4D3F0;
    border-color: #4FBBCA;
  `}
`;
