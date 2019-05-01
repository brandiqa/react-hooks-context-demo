import React from "react";
import { Statistic } from "semantic-ui-react";
import { useCounterContext } from "../context/CounterContext";

export default function CounterDisplay() {
  const { count } = useCounterContext();
  return (
    <Statistic>
      <Statistic.Value>{count}</Statistic.Value>
      <Statistic.Label>Counter</Statistic.Label>
    </Statistic>
  );
}
