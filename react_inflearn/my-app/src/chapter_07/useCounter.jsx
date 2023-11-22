import React, { useState } from "react";

function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increaseCount = () => setCount((count) => count + 1);
  const descreaseCount = () => setCount((count) => Math.max(count -1, 0));

  return [count, increaseCount, descreaseCount];
}

export default useCounter;