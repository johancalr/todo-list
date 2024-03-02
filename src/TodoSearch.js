import React from "react";
import { Form } from "react-bootstrap";

function TodoSearch({searchValue, setSearchValue}) {
  return (
    <Form.Control
      type="text"
      placeholder="Buscar tarea"
      className="text-end"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
        console.log(`"${event.target.value}"`);
      }}
    ></Form.Control>
  );
}

export { TodoSearch };