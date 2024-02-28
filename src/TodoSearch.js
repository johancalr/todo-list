import { Form } from "react-bootstrap";

function TodoSearch() {
  return (
    <Form.Control type="text" placeholder="Buscar tarea" className="text-end"></Form.Control>
  );
}

export { TodoSearch };