import { Button } from "react-bootstrap";

function TodoCreate() {
  return (
    <Button
      className="w-100"
      onClick={(event) => {
        console.log('Create');
      }}
    >Crear</Button>
  );
}

export { TodoCreate };