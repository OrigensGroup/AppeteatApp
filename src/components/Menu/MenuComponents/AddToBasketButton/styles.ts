import styled from 'styled-components/native';


export const MainButtonWrapper = styled.View`
  width: 100%;
`;

export const MainButton = styled.TouchableOpacity`
  height: ${({ theme }) => theme.spacing.multiple(7)};
  border-radius:${({ theme }) => theme.spacing.single};
  flex-direction: row;
  border-width: 1px;
  background-color: #FC7930;
  border-color: transparent;
  border-bottom-width: 0;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  elevation: 6;
  justify-content: center;
`;

export const TextWrapper = styled.View`
flex-direction: row;
align-items:center;
height: 100%;
width: 90%;
justify-content: space-between;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: black;
  font-weight: bold;
`;



