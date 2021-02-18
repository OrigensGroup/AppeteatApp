import styled from "styled-components/native";

export const CardContainer = styled.TouchableOpacity`
  flex: 1;
  height: ${({ theme }) => theme.spacing.multiple(11)};
  border-width: 1px;
  background-color: #fff;
  display: flex;
  flex-direction:row;
  border-radius:${({ theme }) => theme.spacing.multiple(3)};
  border-color: transparent;
  border-bottom-width: 0;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  elevation: 4;
  overflow: hidden;
`;
export const GreenBorder = styled.View`
  border-top-left-radius: ${({ theme }) => theme.spacing.multiple(3)};
  border-bottom-left-radius: ${({ theme }) => theme.spacing.multiple(3)};
  width: 5%;
  background-color: #11af0e;
`;
export const CardWrap = styled.View`
  padding: ${({ theme }) => theme.spacing.single};
`;
export const DrinkDesc = styled.View`
  padding: ${({ theme }) => theme.spacing.double} 0 0
    ${({ theme }) => theme.spacing.double};
`;

export const TextTitle = styled.Text`
  font-size: 20px;
  color: black;
`;
