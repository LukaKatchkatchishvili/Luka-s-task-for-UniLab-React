import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import useTodosReducer from "../UseTodoReducer";

function TodoApp() {
  const { todos, dispatch } = useTodosReducer();

  return (
    <section className="min-h-[90vh] bg-white">
      <div className="flex flex-col items-center w-full p-8 md:p-16 md:w-[55%] lg:w-[35%] mx-auto">
        <h1 className="text-4xl text-center font-bold mb-4">
          Add Your Daily Tasks
        </h1>
        <TodoForm dispatch={dispatch} />
        <TodoList todos={todos} dispatch={dispatch} />
      </div>
    </section>
  );
}

export default TodoApp;
