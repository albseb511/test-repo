import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter component should perform according to the tests", function () {
  it("should render without any error", () => {
    render(<Counter />);
  });

  it("Should diplay initial value and text correctly", () => {
    const number = 10;
    const { getByTestId, getByText } = render(<Counter init={number} />);

    const h2 = getByText(/Counter/i);
    const counter = getByTestId("counter");

    expect(h2.textContent).toBe("Counter");
    expect(h2.tagName).toBe("H2");

    expect(counter.textContent).toBe(number.toString());
  });

  it("should render the ADD and REMOVE buttons correctly", () => {
    const number = 10;
    const { getAllByTestId, getByTestId } = render(<Counter init={number} />);

    const btn = getAllByTestId("btn-basic");
    const counter = getByTestId("counter");
    expect(btn.length).toBe(2);
    const [add, reduce] = btn;

    expect(add.textContent).toBe("ADD");
    expect(reduce.textContent).toBe("REDUCE");
    expect(counter.textContent).toBe(number.toString());
  });

  it("should increase count and decrease count when clicking on add and reduce", () => {
    let number = 5;
    const { getAllByTestId, getByTestId, debug } = render(
      <Counter init={number} />
    );

    const [add, reduce] = getAllByTestId("btn-basic");
    const counter = getByTestId("counter");
    const allTests = [
      {
        test: () => fireEvent.click(add),
        output: 6,
      },
      {
        test: () => fireEvent.click(add),
        output: 7,
      },
      {
        test: () => fireEvent.click(reduce),
        output: 6,
      },
      {
        test: () => fireEvent.click(reduce),
        output: 5,
      },
      {
        test: () => fireEvent.click(reduce),
        output: 4,
      },
      {
        test: () => fireEvent.click(add),
        output: 5,
      },
    ];

    allTests.forEach(({ test, output }) => {
      test();
      expect(counter.textContent).toBe(output.toString());
    });
    debug();
  });
});
