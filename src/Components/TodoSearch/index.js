import React from "react";
import { Form } from "react-bootstrap";
import { TodoContext } from "../../Context/TodoContext";

function TodoSearch() {
  const {
    searchValue,
    setSearchValue
  } = React.useContext(TodoContext);
  return (
    <Form.Control
      type="text"
      placeholder="Search To-Do"
      className="text-end shadow-none"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    ></Form.Control>
  );
}

export { TodoSearch };