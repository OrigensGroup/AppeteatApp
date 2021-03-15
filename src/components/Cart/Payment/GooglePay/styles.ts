import styled from 'styled-components/native';

interface GooglePayProps {
  active?: boolean;
}

export const GooglePayContainer = styled.TouchableOpacity<GooglePayProps>`
  height: ${({ theme }) => theme.spacing.multiple(7)};
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: ${({ theme }) => theme.colors.border};
  border-width: 1px;
  margin: 0 ${({ theme }) => theme.spacing.double};
  border-radius: ${({ theme }) => theme.spacing.single};
  padding: ${({ theme }) => theme.spacing.single};
  ${({ active }) =>
    active &&
    `
    background: #B4D3F0;
    border-color: #4FBBCA;
  `}
`;
export const GooglePayImage = styled.Image`
  flex: 1;
  resizemode: contain;
`;
