import styled from 'styled-components/native';

export const MainButtonWrapper = styled.View`
  width: 100%;
`;

export const MainButton = styled.TouchableOpacity`
  height: ${({ theme }) => theme.spacing.multiple(7)};
  border-radius: ${({ theme }) => theme.spacing.single};
  flex-direction: row;
  background-color: #fc7930;
  border-color: transparent;
  border-bottom-width: 0;
  background-color: #fc7930;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: black;
  font-weight: bold;
`;
