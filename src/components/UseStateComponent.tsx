import React, { useState } from "react";

function UseStateComponent() {
  const [arr, setArr] = useState<number[]>([]);
  const [name, setName] = useState<string | null>(null);
  return (
    <div>
      <div>
        <button onClick={() => setArr([...arr, arr.length + 1])}>
          Add to array
        </button>
        {JSON.stringify(arr)}
      </div>
      <div>
        <button onClick={() => setName("Ganesh")}>Set name</button>
      </div>
      {JSON.stringify(name)}
    </div>
  );
}

export default UseStateComponent;
