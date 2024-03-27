import React from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage.js";
import { todoItem } from '../../interfaces/todoInterface.ts';

const TodoContext = React.createContext();

function TodoProvider({ children }) {

  // Estados
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal]     = React.useState(false);
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
  const addTodo = (todoText) => {
    const newTodos = [...todos];
    const todoId   = todos.length > 0 ? (todos[todos.length - 1].id +1 ) : 1; // Obtiene el id del nuevo todo
    newTodos.push(new todoItem(todoId, todoText, false));
    saveTodos(newTodos);
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
        searchedTodos,
        openModal,
        setOpenModal,
        addTodo
      }}
    >
      { children }
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };