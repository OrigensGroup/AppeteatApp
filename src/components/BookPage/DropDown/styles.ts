import styled from "styled-components/native";

export const DropDownContainer = styled.View`
  width: 100%;
  height: ${({ theme }) => theme.spacing.multiple(5)};
  border-radius:${({ theme }) => theme.spacing.double};
  display: flex;
  flex-direction: row;
  border-width: 1px;
  background-color: #fff;
  border-color: transparent;
  border-bottom-width: 0;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.8;
  shadow-radius: 2px;
  elevation: 6;

`;
