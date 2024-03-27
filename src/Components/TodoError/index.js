import React from "react";
import Alert from 'react-bootstrap/Alert';
import { MdError } from "react-icons/md";

function TodoError() {
  return (
    <>
      <Alert variant="danger text-center">
        <MdError className="fs-4 me-2"/>
        Something has gone wrong, please recharge
      </Alert>
    </>
  );
}

export { TodoError };