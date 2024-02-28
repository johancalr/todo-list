import { ListGroup } from "react-bootstrap";

function TodoList(props) {
  return (
    <ListGroup className="mx-1 my-2 mx-md-4">
      {props.children}
    </ListGroup>
  );
}

export { TodoList };