import styled from "styled-components/native";

export const CardContainer = styled.TouchableOpacity`
  width: 100%;
  height: ${({ theme }) => theme.spacing.multiple(28)};
  background-color: #fff;
  border-radius:${({ theme }) => theme.spacing.double};
  margin: ${({ theme }) => theme.spacing.single} ${({ theme }) =>
  theme.spacing.double} ${({ theme }) => theme.spacing.half} 0};
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  elevation: 6;
`;

export const VenueImage = styled.Image`
  width: 100%;
  height: 100%;
`;
export const ImageContainer = styled.View`
  height: 40%;
  position: relative;
`;
export const Triangle = styled.View`
  position: absolute;
  width: 0;
  top: 75;
  right: 0;
  height: 0;
  background-color: transparent;
  border-style: solid;
  border-left-width: 1500;
  border-right-width: 0;
  border-bottom-width: 80;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: red;
`;

export const DrinkDesc = styled.View`
  padding: ${({ theme }) => theme.spacing.double} 0 0
    ${({ theme }) => theme.spacing.double};
`;

export const TextTitle = styled.Text`
  font-size: 20px;
  color: black;
`;
