import React from "react";
import { Button } from "react-bootstrap";
import { IoMdAdd } from "react-icons/io";
import { TodoContext } from "../TodoContext";

function TodoCreate() {
  const {setOpenModal} = React.useContext(TodoContext);
  return (
    <Button
      className="w-100 d-flex justify-content-center fs-4 text-white"
      variant="lime"
      onClick={() => setOpenModal(true)}
    >
      <IoMdAdd />
    </Button>
  );
}

export { TodoCreate };