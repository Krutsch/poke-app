import React from "react";
import App from "../components/App";
import ShallowRenderer from "react-test-renderer/shallow";

it("renders correctly", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
