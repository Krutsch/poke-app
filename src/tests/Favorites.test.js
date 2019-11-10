import React from "react";
import Favorites from "../routes/Favorites";
import ShallowRenderer from "react-test-renderer/shallow";

it("renders correctly", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Favorites />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
