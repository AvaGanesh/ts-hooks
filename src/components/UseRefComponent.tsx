import React, { useRef } from "react";

function UseRefComponent() {
  const buttonEle = useRef<HTMLButtonElement | null>(null);
  const onButtonClick = () => {
    if (buttonEle.current?.style.background) {
      buttonEle.current.style.background = "yellow";
      buttonEle.current.style.color = "black";
    }
  };
  return (
    <>
      <button
        onClick={onButtonClick}
        ref={buttonEle}
        style={{ background: "blue", color: "white"}}
      >
        Update background color
      </button>
    </>
  );
}

export default UseRefComponent;
