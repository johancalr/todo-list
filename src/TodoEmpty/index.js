import React from "react";
import Alert from 'react-bootstrap/Alert';
import { IoMdCheckboxOutline } from "react-icons/io";

function TodoEmpty() {
  return (
    <Alert variant="success text-center">
      <IoMdCheckboxOutline className="fs-4 me-2"/>
      Create your first TODO
    </Alert>
  );
}

export { TodoEmpty };