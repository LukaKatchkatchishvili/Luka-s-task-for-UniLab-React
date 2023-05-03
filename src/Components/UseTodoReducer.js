import { useReducer, useEffect } from "react";

const ACTIONS = {
  ADD_TODO: "add-todo",
  CHECK_TODO: "check-todo",
  DELETE_TODO: "delete-todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [newTodo(action.payload), ...todos];
    case ACTIONS.CHECK_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload);
    default:
      return todos;
  }
}

function newTodo(description) {
  return { id: Date.now(), description: description, complete: false };
}

function useTodosReducer() {
  const [todos, dispatch] = useReducer(reducer, [], () => {
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return { todos, dispatch };
}

export default useTodosReducer;
