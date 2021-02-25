import styled from 'styled-components/native';

export const BottomButtonsWrapper = styled.View`
width: 100%;
align-items: center;
justify-content: center;
flex-direction: row;
`;


export const MainButton = styled.TouchableOpacity`
  height: ${({ theme }) => theme.spacing.multiple(7)};
  border-radius: ${({ theme }) => theme.spacing.single};
  flex-direction: row;
  background-color: #fc7930;
  justify-content: center;
  align-items: center;
  width: 65%;
`;



export const TextWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 ${({ theme }) => theme.spacing.multiple(2)}; 
  width: 100%;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: black;
  font-weight: bold;
`;
