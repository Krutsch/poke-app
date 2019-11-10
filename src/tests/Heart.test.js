import React from "react";
import Heart from "../components/Heart";
import ShallowRenderer from "react-test-renderer/shallow";

it("renders correctly", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Heart />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
