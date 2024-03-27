import React from "react";
import Spinner from 'react-bootstrap/Spinner';
import { ListGroup } from "react-bootstrap";

function TodoLoader(props) {
  return (
    <ListGroup.Item
      action
      variant="secondary"
      as="div"
      className={`d-flex justify-content-center align-items-center opacity-${props.opacity}`}
    >
      <Spinner animation="grow" variant="secondary" size="sm" className="mx-3" />
      <span>{props.children}</span>
      <Spinner animation="grow" variant="secondary" size="sm" className="mx-3" />
    </ListGroup.Item>
  );
}

export { TodoLoader };
