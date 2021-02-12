import styled from "styled-components/native";

export const CardContainer = styled.TouchableOpacity`
  height: ${({ theme }) => theme.spacing.multiple(28)};
  background-color: #fff;
  border-radius:${({ theme }) => theme.spacing.double};
  margin-bottom: ${({ theme }) => theme.spacing.double};
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  elevation: 5;
  margin:${({ theme }) => theme.spacing.double} ${({ theme }) =>
  theme.spacing.multiple(3)};
`;

export const VenueImage = styled.Image`
  width: 100%;
  height: 100%;
  border-top-right-radius: ${({ theme }) => theme.spacing.double};
  border-top-left-radius: ${({ theme }) => theme.spacing.double};
`;
export const ImageContainer = styled.View`
  height: 40%;
  position: relative;
  overflow: hidden;
`;
export const Triangle = styled.View`
  position: absolute;
  width: 0;
  z-index: 1;
  top: 65;
  right: 0;
  height: 0;
  background-color: transparent;
  border-style: solid;
  border-left-width: 1000;
  border-right-width: 0;
  border-bottom-width: 70;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: white;
`;

export const DrinkDesc = styled.View`
  padding: ${({ theme }) => theme.spacing.double} 0 0
    ${({ theme }) => theme.spacing.double};
`;

export const TextTitle = styled.Text`
  font-size: 20px;
  color: black;
  margin-bottom: ${({ theme }) => theme.spacing.half};
`;

export const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: ${({ theme }) => theme.spacing.single};
`;

export const LocationButton = styled.TouchableOpacity`
  width: 40%;
  padding: ${({ theme }) => theme.spacing.half};
  align-items: center;
  border-radius: ${({ theme }) => theme.spacing.double};
  background-color: #fff;
  elevation: 3;
`;
