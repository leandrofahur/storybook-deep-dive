import { useState } from "react";
import ButtonCounter from "../ButtonCounter/ButtonCounter";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount(count + 1);
  }

  return (
    <div>
      {count}
      <br />
      <ButtonCounter
        label={"increment"}
        type="counter-button1"
        size="large"
        backgroundColor="#0077b6"
        onClick={handleCount}
      />
    </div>
  );
}
