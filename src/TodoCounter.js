import { Col, Row } from "react-bootstrap";

function TodoCounter({ completed, total }) {
  return (
    <Row className="justify-content-center my-2">
      <Col className="col-auto border border-1 rounded fs-4">
        Has completado {completed} de {total} TODOs
      </Col>
    </Row>
  );
}

export { TodoCounter };