import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch }  from './TodoSearch';
import { TodoList }    from './TodoList';
import { TodoItem }    from './TodoItem';
import { TodoCreate }  from './TodoCreate';
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const defaultTodos = [
  { id: 1, text: 'Cortar cebolla', completed: false },
  { id: 2, text: 'Tomar curso de React Js', completed: true },
  { id: 3, text: 'Llorar con la llorona', completed: false },
  { id: 4, text: 'Renunciar a la chamba', completed: true }
];

function App() {
  return (
    <div className='container-fluid pt-3'>
      <Card>
        <Card.Header className='text-center bg-acua'>
          <b>ToDo List</b>
        </Card.Header>

        <TodoCounter completed={3} total={10} />
        <Row className="justify-content-center mx-2 gx-2">
          <Col className='col-12 mt-2' md={6}>
            <TodoSearch />
          </Col>
          <Col className='col-3 mt-2' md="auto">
            <TodoCreate />
          </Col>
        </Row>

        <TodoList>
          {defaultTodos.map(todo => (
            <TodoItem
              key={todo.id}
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </TodoList>

      </Card>
    </div>
  );
}

export default App;
