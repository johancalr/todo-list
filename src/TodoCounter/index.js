import { Col, Row } from "react-bootstrap";
import { TodoLoader } from "../TodoLoader";
import React from "react";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const {
    completedTodos: completed,
    totalTodos: total,
    loading,
    error
  } = React.useContext(TodoContext)
  let message = "";
  if (total === 0)
    message = 'You have no TODOS yet';
  else if (completed < total)
    message = `${completed} of ${total} TODOs completed`;
  else
    message = 'You have completed all your TODOs';
  return (
    <Row className="justify-content-center my-2 gx-0">
      <Col className="col-auto border border-1 rounded fs-4">
        { (loading && !error) && <TodoLoader opacity={100}>Counting todos</TodoLoader> }
        { (!loading && !error) && <span className="px-2">{message}</span> }
        { error && <span className="px-2">No todos found</span>}
      </Col>
    </Row>
  );
}

export { TodoCounter };