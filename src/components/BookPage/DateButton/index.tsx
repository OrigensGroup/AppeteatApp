import React from "react";
import { DateButtonContainer } from "./styles";

interface IconFieldProps {}

const DateButton: React.FunctionComponent<IconFieldProps> = ({ children }) => {
  return <DateButtonContainer>{children}</DateButtonContainer>;
};

export default DateButton;
