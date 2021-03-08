import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.single};
`;

export const GoogleImage = styled.Image`
  height: ${({ theme }) => theme.spacing.multiple(8)};
  width: ${({ theme }) => theme.spacing.multiple(8)};
`;
