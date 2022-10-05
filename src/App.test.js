import { render } from "@testing-library/react";

import App from "./App";

jest.mock("react-leaflet", () => {
  return {
    __esModule: true,
    default: () => {
      return <div />;
    },
  };
});

test("renders correctly", () => {
  render(<App />);
});
