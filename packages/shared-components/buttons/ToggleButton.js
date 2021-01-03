import React, { useCallback, useState } from "react";
import Button from "./Button";

function ToggleButton() {
  const [clicked, setClicked] = useState(false);
  const handleClick = useCallback(() => {
    setClicked((v) => !v);
  }, []);
  return (
    <Button onClick={handleClick}>
      {clicked ? "Clicked" : "One Click Button"}
    </Button>
  );
}

export default ToggleButton;
