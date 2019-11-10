import React from "react";
import Pokemon from "../components/Pokemon";
import ShallowRenderer from "react-test-renderer/shallow";

it("renders correctly", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Pokemon />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
