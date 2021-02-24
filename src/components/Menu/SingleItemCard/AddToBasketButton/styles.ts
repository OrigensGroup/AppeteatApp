import styled from 'styled-components/native';


export const MainButtonWrapper = styled.View`
`;

export const MainButton = styled.TouchableOpacity`
  height: ${({ theme }) => theme.spacing.multiple(7)};
  border-radius:${({ theme }) => theme.spacing.single};
  flex-direction: row;
  background-color: #FC7930;
  justify-content: center;
`;

export const TextWrapper = styled.View`
flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.multiple(3)};
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: black;
  font-weight: bold;
`;
