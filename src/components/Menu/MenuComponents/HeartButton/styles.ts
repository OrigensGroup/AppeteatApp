import styled from 'styled-components/native';

export const HeartButtonContainer = styled.TouchableOpacity`
  width: ${({ theme }) => theme.spacing.multiple(5)};
  height: ${({ theme }) => theme.spacing.multiple(5)};
  display: flex;
  justify-content: center;
  align-items: center;
`;
