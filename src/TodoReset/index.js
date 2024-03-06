import React from "react";
import { Button } from "react-bootstrap";
import { GrPowerReset } from "react-icons/gr";
import { TodoContext } from "../TodoContext";

function TodoReset() {
  const {
    resetTodos
  } = React.useContext(TodoContext);
  return(
    <Button
      variant="warning"
      className="w-100 d-flex justify-content-center fs-4 text-white"
      onClick={resetTodos}
    ><GrPowerReset/>
    </Button>
  );
}

export { TodoReset };