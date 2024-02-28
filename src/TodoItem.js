import { Button, Col, Form, ListGroup, Row } from "react-bootstrap";
import { TiDeleteOutline } from "react-icons/ti";

function TodoItem(props) {
  return (
    <ListGroup.Item action variant="success" className="cursor-auto">
      <Row>
        <Col className="col-auto fs-4 lh-1">
          <Form.Check role="button"></Form.Check>
        </Col>
        <Col>
          <span>{props.text}</span>
        </Col>
        <Col className="col-auto">
          <Button size="sm" className="py-0 px-1 lh-1 bg-pink border-0" variant="danger">
            <TiDeleteOutline className="fs-4" />
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}

export { TodoItem };