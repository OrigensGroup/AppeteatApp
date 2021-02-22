import styled from "styled-components/native";

export const CardContainer = styled.TouchableOpacity`
  flex: 1;
  height: ${({ theme }) => theme.spacing.multiple(25)};
  border-width: 1px;
  background-color: #fff;
  border-radius:${({ theme }) => theme.spacing.double};
  border-color: transparent;
  border-bottom-width: 0;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  elevation: 4;
`;
export const CardWrap = styled.View`
  padding: ${({ theme }) => theme.spacing.single};
`;

export const DrinkImage = styled.Image`
  height: 50%;
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const DrinkDesc = styled.View`
  padding: ${({ theme }) => theme.spacing.double} 0 0
    ${({ theme }) => theme.spacing.double};
`;

export const TextTitle = styled.Text`
  font-size: 20px;
  color: black;
`;
