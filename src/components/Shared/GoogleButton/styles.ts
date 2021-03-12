import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.triple};
  padding-top: ${({ theme }) => theme.spacing.oneAndHalf};
`;

export const GoogleImage = styled.Image`
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.spacing.multiple(7)};
  width: ${({ theme }) => theme.spacing.multiple(7)};
`;
