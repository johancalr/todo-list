import React from "react";
import Alert from 'react-bootstrap/Alert';
import { IoMdCheckboxOutline } from "react-icons/io";
import { TodoContext } from "../TodoContext";

function TodoEmpty() {
  const {setOpenModal} = React.useContext(TodoContext);
  return (
    <Alert className="text-center bg-soft-cake" role="button" onClick={() => setOpenModal(true)}>
      <IoMdCheckboxOutline className="fs-4 me-2"/>
      Create your first TODO
    </Alert>
  );
}

export { TodoEmpty };