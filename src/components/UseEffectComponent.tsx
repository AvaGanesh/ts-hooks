import { useEffect, useState } from "react";

function UseEffectComponent() {
  const [val, setVal] = useState(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setVal(val + 1);
    }, 1000);

    return () => window.clearInterval(timer);
  }, [val]);

  return <div>{val}</div>;
}

export default UseEffectComponent;
