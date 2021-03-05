import styled from 'styled-components/native';

export const MainButtonWrapper = styled.View`
  width: 100%;
`;

export const MainButton = styled.TouchableOpacity`
  height: ${({ theme }) => theme.spacing.multiple(7)};
  border-radius: ${({ theme }) => theme.spacing.single};
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.active};
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;