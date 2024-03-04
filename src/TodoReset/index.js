import React from "react";
import { Button } from "react-bootstrap";
import { GrPowerReset } from "react-icons/gr";

function TodoReset({ onReset }) {
  return(
    <Button
      variant="warning"
      className="w-100 d-flex justify-content-center fs-4 text-white"
      onClick={onReset}
    ><GrPowerReset/>
    </Button>
  );
}

export { TodoReset };