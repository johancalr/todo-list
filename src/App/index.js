import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { todoItem } from '../interfaces/todoInterface.ts';
import { useLocalStorage } from '../hooks/useLocalStorage.js';
import { AppUI } from './AppUI.js';

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
  // Estados
  const {
    item: todos,
    saveItem: saveTodos,
    resetItem: resetTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);
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

  return (
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      resetTodos={() => resetTodos(getOriginal())}
      searchedTodos={searchedTodos}
    />
  )
}

export default App;
