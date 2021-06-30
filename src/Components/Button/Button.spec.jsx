import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import { render, screen, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";

describe("Button should work correctly", () => {
  it("should render without crashing", () => {
    // const container = document.createElement("div");
    // ReactDOM.render( <Button label="button" /> ,container)
    render(<Button label="button" />);
  });

  it("should render the label correctly", () => {
    const label = "LABEL";
    const { getByTestId } = render(<Button label={label} />);
    const btn = getByTestId("btn-basic");
    expect(btn.textContent).toBe(label);
  });

  it("should render the correct color", () => {
    const label = "ADD";
    const color = "green";
    const { getByTestId, debug } = render(
      <Button label={label} color={color} />
    );
    const btn = getByTestId("btn-basic");
    expect(btn.textContent).toBe(label);
    expect(btn.style.backgroundColor).toBe(color);
  });

  it("should invoke the function callback", () => {
    const mockFn = jest.fn();
    const label = "REMOVE";

    const response = render(<Button label={label} handleClick={mockFn} />);
    const { getByTestId } = response;
    const btn = getByTestId("btn-basic");
    fireEvent.click(btn);
    expect(mockFn).toHaveBeenCalledTimes(1);
    fireEvent.click(btn);
    fireEvent.click(btn);
    expect(mockFn).toHaveBeenCalledTimes(3);
  });

  it("match the snapshot", () => {
    const tree = renderer.create(
      <Button label="REMOVE" color="red" handleClick={() => {}} />
    );
    expect(tree).toMatchSnapshot();
  });

  it("match the second snapshot", () => {
    const tree = renderer.create(
      <Button label="ADD" color="red" handleClick={() => {}} />
    );
    expect(tree).toMatchSnapshot();
  });
});
