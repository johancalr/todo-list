import { Form } from "react-bootstrap";

function TodoSearch() {
  return (
    <Form.Control
      type="text"
      placeholder="Buscar tarea"
      className="text-end"
      onChange={(event) => {
        console.log(`"${event.target.value}"`);
      }}
    ></Form.Control>
  );
}

export { TodoSearch };