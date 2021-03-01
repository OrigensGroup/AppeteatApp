import styled from 'styled-components/native';

export const MainButtonWrapper = styled.View`
  width: 100%;
`;

export const MainButton = styled.TouchableOpacity`
display: flex;
  height: ${({ theme }) => theme.spacing.multiple(7)};
  border-radius: ${({ theme }) => theme.spacing.single};
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.active};
  justify-content: center;
`;

export const TextWrapper = styled.View`
display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 90%;
  justify-content: space-between;
`;

export const BottomButtonsWrapper = styled.View`
display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
