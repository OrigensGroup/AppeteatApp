import styled from 'styled-components/native';

interface GooglePayProps {
  active?: boolean;
}

export const GooglePayContainer = styled.TouchableOpacity<GooglePayProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  height: ${({ theme }) => theme.spacing.multiple(7)};

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
export const GooglePayImage = styled.Image`
  width: 100%;
  height: 100%;
`;
