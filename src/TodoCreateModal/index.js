import React from "react";
import { Button, Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { TodoContext } from "../TodoContext";

function TodoCreateModal() {
  // Contextos
  const {
    openModal,
    setOpenModal,
    addTodo
  } = React.useContext(TodoContext);
  
  // Estados
  const [todoDescription, setTodoDescription] = React.useState('');

  const onAddTodo = () => {
    addTodo(todoDescription);
    setOpenModal(false);
    setTodoDescription('');
  };
  return (

    <Modal show={openModal} onHide={()=> setOpenModal(false)}>
    <Modal.Header closeButton>
      <Modal.Title className='w-100 text-center lh-1'>Create To-Do</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Describe your new task"
            className="text-end"
            value={todoDescription}
            onChange={(event) => setTodoDescription(event.target.value)}
            autoFocus
          />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button
        variant="secondary"
        onClick={()=> setOpenModal(false)}
        >
        Close
      </Button>
      <Button
        className="text-white"
        variant="lime"
        onClick={onAddTodo}
        >
        Add Todo
      </Button>
    </Modal.Footer>
  </Modal>
  );
}

export { TodoCreateModal };