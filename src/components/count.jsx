import { useState } from "react";
import React from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h7 className="btn btn-primary">Count: {count}</h7>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decriment</button>
    </div>
  );
};

export default Count;
