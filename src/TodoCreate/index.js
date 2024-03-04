import { Button } from "react-bootstrap";
import { IoMdAdd } from "react-icons/io";

function TodoCreate() {
  return (
    <Button
      className="w-100 d-flex justify-content-center fs-4 text-white"
      onClick={(event) => {
        console.log('Create');
      }}
    >
      <IoMdAdd />
    </Button>
  );
}

export { TodoCreate };