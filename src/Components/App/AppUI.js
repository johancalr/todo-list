import React from 'react';
import { TodoContext } from '../../Context/TodoContext/index.js';
import { TodoCounter } from '../TodoCounter/index.js';
import { TodoSearch }  from '../TodoSearch/index.js';
import { TodoList }    from '../TodoList/index.js';
import { TodoItem }    from '../TodoItem/index.js';
import { TodoCreate }  from '../TodoCreate/index.js';
import { TodoLoading } from '../TodoLoading/index.js';
import { TodoError } from '../TodoError/index.js';
import { TodoEmpty } from '../TodoEmpty/index.js';
import { TodoModal } from '../TodoModal/index.js';
import { TodoCreateModal } from '../TodoCreateModal/index.js';
import { Card, Row, Col } from 'react-bootstrap';
function AppUI() {
  const {
    loading,
    error,
    totalTodos,
    completeTodo,
    deleteTodo,
    searchedTodos
  } = React.useContext(TodoContext);
  return (
    <div className='bg-soft-cake'>
      <img src='./background.svg' alt='Background' className='position-absolute w-100 h-100 object-fit-cover'/>
      <div className='container py-3 py-sm-5 px-sm-5 vh-100'>
        <Card className='border-0 h-100 bg-light'>
          <Card.Header className='d-flex justify-content-center text-violet bg-cake'>
            <img src='./favicon.svg' alt='Icon'/>
            &nbsp;
            <b>To-Do List</b>
          </Card.Header>
          <TodoCounter/>
          <Row className="justify-content-center mx-2 gx-2">
            <Col className='col-12 mt-2' md={6}>
              <TodoSearch/>
            </Col>
            <Col className='col-6 mt-2' md="auto">
              <TodoCreate />
            </Col>
          </Row>
          
          <Card.Body className='overflow-y-auto my-2 p-0'>
            <TodoList>
              {loading && <TodoLoading/>}
              {error && <TodoError/>}
              {(!loading && totalTodos === 0) && <TodoEmpty/>}
              { !error && searchedTodos.map(todo => (
                <TodoItem
                  key={todo.id}
                  text={todo.text}
                  completed={todo.completed}
                  onCompleted={() => completeTodo(todo.id)}
                  onDelete={() => deleteTodo(todo.id)}
                />
              ))}
            </TodoList>
          </Card.Body>

          <TodoModal>
            <TodoCreateModal/>
          </TodoModal>
        </Card>
      </div>
    </div>
  );
}

export { AppUI };