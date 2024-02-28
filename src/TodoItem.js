import { Button, Col, Form, ListGroup, Row } from "react-bootstrap";

function TodoItem(props) {
  return (
    <ListGroup.Item action variant="light">
      <Row>
        <Col className="col-auto">
          <Form.Check></Form.Check>
        </Col>
        <Col>
          <small>{props.text}</small>
        </Col>
        <Col className="col-auto">
          <Button size="sm" className="py-0" variant="danger">X</Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}

export { TodoItem };