import { Button, Col, Form, ListGroup, Row } from "react-bootstrap";
import { TiDeleteOutline } from "react-icons/ti";

function TodoItem(props) {
  return (
    <ListGroup.Item action as="div">
      <Row>
        <Col className="col-auto fs-4 lh-1">
          <Form.Check
            role="button"
            checked={!!props.completed}
            onChange={props.onCompleted}
          ></Form.Check>
        </Col>
        <Col>
          <span>{props.text}</span>
        </Col>
        <Col className="col-auto">
          <Button
            size="sm"
            className="py-0 px-1 lh-1 border-0 bg-red"
            variant="danger"
            onClick={props.onDelete}>
            <TiDeleteOutline className="fs-4" />
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}

export { TodoItem };