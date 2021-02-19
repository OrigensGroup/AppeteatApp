import React from "react";
import { render } from "@testing-library/react-native";

import Home from ".";

it("displays the example text", () => {
  const { getByText } = render(<Home />);

  expect(getByText("Example")).toBeTruthy();
});
