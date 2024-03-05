import React from 'react';
import { TodoCounter } from '../TodoCounter/index.js';
import { TodoSearch }  from '../TodoSearch/index.js';
import { TodoList }    from '../TodoList/index.js';
import { TodoItem }    from '../TodoItem/index.js';
import { TodoCreate }  from '../TodoCreate/index.js';
import { TodoReset } from '../TodoReset/index.js';
import { TodoLoading } from '../TodoLoading/index.js';
import { TodoError } from '../TodoError/index.js';
import { TodoEmpty } from '../TodoEmpty/index.js';
import { Card, Row, Col } from 'react-bootstrap';
import './App.css';
function AppUI({
  loading,
  error,
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  completeTodo,
  deleteTodo,
  resetTodos,
  searchedTodos
}) {
  return (
    <div className='container-fluid pt-3'>
      <Card>
        <Card.Header className='text-center bg-acua'>
          <b>ToDo List</b>
        </Card.Header>

        <TodoCounter completed={completedTodos} total={totalTodos} loading={loading} error={error}/>
        <Row className="justify-content-center mx-2 gx-2">
          <Col className='col-12 mt-2' md={6}>
            <TodoSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </Col>
          <Col className='col-6 mt-2' md="auto">
            <TodoCreate />
          </Col>
          <Col className='col-6 mt-2' md="auto">
            <TodoReset
              onReset={resetTodos}
            />
          </Col>
        </Row>

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

      </Card>
    </div>
  );
}

export { AppUI };