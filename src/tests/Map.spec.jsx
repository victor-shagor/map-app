import { render } from "@testing-library/react";

import MapComponent from "components/map";

jest.mock("react-leaflet", () => {
  return {
    __esModule: true,
    default: () => {
      return <div />;
    },
  };
});

describe("should renderMap Component", () => {
  it("should throw error if features props is empty or undefined", () => {
    expect(() => render(<MapComponent />)).toThrow();
  });
});
