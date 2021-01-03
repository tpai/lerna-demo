import React from "react";
import Button from "./Button";

function AlertButton() {
  return <Button onClick={() => alert("Alert!")}>Alert Button</Button>;
}

export default AlertButton;
