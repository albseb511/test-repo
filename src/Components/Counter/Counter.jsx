import { useState } from "react";
import Button from "../Button/Button";

function Counter({ init = 0 }) {
  const [count, setCount] = useState(init);

  return (
    <div>
      <h2>Counter</h2>
      <div data-testid="counter">{count}</div>
      <Button label="ADD" handleClick={() => setCount((prev) => prev + 1)} />
      <Button label="REDUCE" handleClick={() => setCount((prev) => prev - 1)} />
    </div>
  );
}

export default Counter;
