import React from "react";
import { Button } from "semantic-ui-react";
import { useCounterContext } from "../context/CounterContext";

export default function CounterButtons() {
  const { increment, decrement } = useCounterContext();
  return (
    <div>
      <Button.Group>
        <Button color="green" onClick={increment}>
          Add
        </Button>
        <Button color="red" onClick={decrement}>
          Minus
        </Button>
      </Button.Group>
    </div>
  );
}
