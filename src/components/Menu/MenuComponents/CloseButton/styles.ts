import styled from 'styled-components/native';

export const CloseButtonContainer = styled.TouchableOpacity`
display: flex;
  width: ${({ theme }) => theme.spacing.multiple(5)};
  height: ${({ theme }) => theme.spacing.multiple(5)};
  justify-content: center;
  align-items: center;
`;
