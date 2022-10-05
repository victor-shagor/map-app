import { fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import GeoLocationBoxForm from "components/GeoLocationBoxForm";

describe("GeoLocationBoxForm Component", () => {
  const onSubmit = jest.fn();
  const handleChange = jest.fn();
  const inputData = {
    minlong: 10,
    minlat: 20,
    maxlong: 10,
    maxlat: 20,
  };
  it("form values should be accurate", () => {
    render(
      <GeoLocationBoxForm
        inputData={inputData}
        onSubmit={onSubmit}
        handleChange={handleChange}
      />
    );
    expect(screen.getByTestId("form")).toHaveFormValues(inputData);
  });

  it("onChange shoould call handlechange function", async () => {
    render(
      <GeoLocationBoxForm
        inputData={inputData}
        onSubmit={onSubmit}
        handleChange={handleChange}
      />
    );
    const minlong = screen.getByLabelText("Min Longitude");
    fireEvent.change(minlong, { target: { value: 20 } });
    expect(handleChange).toHaveBeenCalled();
  });

  it("submit should call onsubmit function", async () => {
    render(
      <GeoLocationBoxForm
        inputData={inputData}
        onSubmit={onSubmit}
        handleChange={handleChange}
      />
    );
    const form = screen.getByTestId("form");
    fireEvent.submit(form);
    expect(onSubmit).toHaveBeenCalled();
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <GeoLocationBoxForm
          inputData={inputData}
          onSubmit={onSubmit}
          handleChange={handleChange}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
