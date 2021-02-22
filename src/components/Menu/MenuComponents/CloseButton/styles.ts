import styled from 'styled-components/native';

export const CloseButtonContainer = styled.TouchableOpacity`
  width: ${({ theme }) => theme.spacing.multiple(4)};
  height: ${({ theme }) => theme.spacing.multiple(4)};
  justify-content: center;
  align-items: center;
`;
