import { Col, Row } from "react-bootstrap";
import { TodoLoader } from "../TodoLoader";

function TodoCounter({ completed, total, loading}) {
  const message = completed < total ? `Has completado ${completed} de ${total} TODOs` : `Has completado todos tus TODOs`;
  return (
    <Row className="justify-content-center my-2 gx-0">
      <Col className="col-auto border border-1 rounded fs-4">
        { loading && <TodoLoader opacity={100}>Counting todos</TodoLoader> }
        { !loading && <span className="px-2">{message}</span> }
      </Col>
    </Row>
  );
}

export { TodoCounter };