import { fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import Input from "components/Inputs";

describe("input Component", () => {
  it("render input component", () => {
    render(<Input />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("onchange event should be triggered", () => {
    const onChange = jest.fn();

    render(<Input onChange={onChange} />);
    const input = screen.getByRole("textbox");
    expect(onChange).toHaveBeenCalledTimes(0);
    fireEvent.change(input, { target: { value: 20 } });
    expect(onChange).toHaveBeenCalled();
  });

  it("renders correctly", () => {
    const onChange = jest.fn();
    const tree = renderer.create(<Input onChange={onChange} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
