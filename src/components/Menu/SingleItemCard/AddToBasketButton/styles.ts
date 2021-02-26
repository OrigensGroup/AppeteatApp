import styled from 'styled-components/native';

export const MainButtonWrapper = styled.View`
  width: 100%;
`;

export const MainButton = styled.TouchableOpacity`
  height: ${({ theme }) => theme.spacing.multiple(7)};
  border-radius: ${({ theme }) => theme.spacing.single};
  flex-direction: row;
  background-color: #fc7930;
  justify-content: center;
`;

export const TextWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 90%;
  justify-content: space-between;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: black;
  font-weight: bold;
`;

export const BottomButtonsWrapper = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
