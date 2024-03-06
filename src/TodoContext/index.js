import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { todoItem } from '../interfaces/todoInterface.ts';

const TodoContext = React.createContext();

function TodoProvider({ children }) {

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

  // Estados
  const {
    item: todos,
    saveItem: saveTodos,
    resetItem: resetTodoitems,
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
  // Funciones
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
  const resetTodos = () => {
    resetTodoitems(getOriginal());
  }

  return (
    <TodoContext.Provider
      value={{
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
      }}
    >
      { children }
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };