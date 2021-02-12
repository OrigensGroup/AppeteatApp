import styled from "styled-components/native";

export const ReservationContainer = styled.TouchableOpacity`
  width: 100%;
  height: ${({ theme }) => theme.spacing.multiple(16)};
  border-width: 1px;
  background-color: #fff;
  border-radius:${({ theme }) => theme.spacing.double};
  border-color: transparent;
  border-bottom-width: 0;
  justify-content: center;
  align-items: center;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  elevation: 5;
`;

export const ReservationTitle = styled.Text`
  font-size: 20px;
  color: black;
  margin-bottom: ${({ theme }) => theme.spacing.half};
`;
export const ReservationWrap = styled.View``;
