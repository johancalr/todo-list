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
    if (todoDescription.length >= 3) {
      addTodo(todoDescription);
      setOpenModal(false);
      setTodoDescription('');
    } else {
      document.getElementById('todoDescription').focus();
    }
  };
  return (

    <Modal show={openModal} onHide={()=> setOpenModal(false)}>
    <Modal.Header closeButton className='bg-soft-cake'>
      <Modal.Title className='w-100 text-center lh-1'>Create To-Do</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group>
          <Form.Control
            id="todoDescription"
            as="textarea"
            rows={3}
            placeholder="Describe your new task"
            className="text-end shadow-none"
            value={todoDescription}
            onChange={(event) => setTodoDescription(event.target.value)}
            autoFocus
          />
          <Form.Text className="text-muted">
            <span className={`float-end ${todoDescription.length>=3 ? 'text-success' : 'text-warning'}`}>{todoDescription.length}/3</span>
            {todoDescription.length<3 && <span className="float-start">Description must be 3 or more characters</span>}
          </Form.Text>
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer className='bg-soft-cake py-1'>
      <Button
        variant='secondary'
        onClick={()=> setOpenModal(false)}
        size='sm'
        >
        Close
      </Button>
      <Button
        className='text-white'
        variant='lime'
        onClick={onAddTodo}
        size='sm'
        >
        Add Todo
      </Button>
    </Modal.Footer>
  </Modal>
  );
}

export { TodoCreateModal };