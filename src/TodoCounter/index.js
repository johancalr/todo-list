import { Col, Row } from "react-bootstrap";

function TodoCounter({ completed, total }) {
  return (
    <Row className="justify-content-center my-2">
      <Col className="col-auto border border-1 rounded fs-4">
      { completed < total ?
          `Has completado ${completed} de ${total} TODOs`
        :
          `Has completado todos tus TODOs`
      }
      </Col>
    </Row>
  );
}

export { TodoCounter };