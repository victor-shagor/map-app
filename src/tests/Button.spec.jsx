import { fireEvent, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import Button from "components/Button";

describe("Button Component", () => {
  it("render button component", () => {
    const onClick = jest.fn();

    render(<Button text={"test"} onClick={onClick} />);
    expect(screen.getByRole("button")).toHaveTextContent("test");
  });

  it("onclick event should be triggered", () => {
    const onClick = jest.fn();

    render(<Button text={"test"} onClick={onClick} />);
    const buttonClick = screen.getByRole("button");
    expect(onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(buttonClick);
    expect(onClick).toHaveBeenCalled();
  });

  it("renders correctly", () => {
    const onClick = jest.fn();
    const tree = renderer
      .create(<Button text={"test"} onClick={onClick} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
