import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch }  from './TodoSearch';
import { TodoList }    from './TodoList';
import { TodoItem }    from './TodoItem';
import { TodoCreate }  from './TodoCreate';
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { todoItem } from './todoInterface.ts';
import { TodoReset } from './TodoReset.js';

/*const defaultTodos = [
  { id: 1, text: 'Cortar cebolla', completed: false },
  { id: 2, text: 'Tomar curso de React Js', completed: true },
  { id: 3, text: 'Llorar con la llorona', completed: false },
  { id: 4, text: 'Renunciar a la chamba', completed: true }
];*/

const getOriginal = () => {
  return [
    new todoItem(1, 'Cortar cebolla',          false),
    new todoItem(2, 'Tomar curso de React Js', true),
    new todoItem(3, 'Llorar con la llorona',   false),
    new todoItem(4, 'Renunciar a la chamba',   true),
    new todoItem(5, 'Graduarme',               false),
    new todoItem(6, 'Cantar una canción',      false)
  ];
}

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem(defaultTodos);

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  const parsedTodos       = JSON.parse(localStorageTodos)??[];
  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', '[]');
  }
  const defaultTodos      = parsedTodos??[];
  // Estados
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  // Estados derivados
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos     = todos.length;
  const searchedTodos  = todos.filter(todo => {
    const noTildes = (text) => {
      return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    };
    const todoText   = noTildes(todo.text.toLowerCase());
    const searchText = noTildes(searchValue.toLowerCase());

    return todoText.includes(searchText);
  });

  const completeTodo = (todoId) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === todoId);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (todoId) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === todoId);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const saveTodos = (newTodos) => {
    setTodos(newTodos);
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
  };

  const resetTodos = () => {
    saveTodos(getOriginal());
  };

  return (
    <div className='container-fluid pt-3'>
      <Card>
        <Card.Header className='text-center bg-acua'>
          <b>ToDo List</b>
        </Card.Header>

        <TodoCounter completed={completedTodos} total={totalTodos} />
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
              onReset={() => resetTodos()}
            />
          </Col>
        </Row>

        <TodoList>
          {searchedTodos.map(todo => (
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

export default App;
