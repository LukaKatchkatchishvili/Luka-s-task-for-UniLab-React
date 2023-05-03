import React from "react";
import { BsCheckLg, BsFillBackspaceFill } from "react-icons/bs";

function TodoList({ todos, dispatch }) {
  return (
    <ul className="list-disc text-black w-full">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`flex justify-between items-center mb-2 px-5 py-2 rounded text-xl bg-black text-white ${
            todo.complete ? "bg-checked transition-all" : ""
          }`}
        >
          <span className="flex-1">{todo.description}</span>
          <div className="flex">
            <BsCheckLg
              onClick={() => dispatch({ type: "check-todo", payload: todo.id })}
              className="mr-2 hover:bg-[#5efc8d] p-2 hover:rounded transiton-all"
              size={45}
            />
            <BsFillBackspaceFill
              onClick={() =>
                dispatch({ type: "delete-todo", payload: todo.id })
              }
              className="font-3xl hover:bg-caution p-2 hover:rounded transiton-all"
              size={45}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
export default TodoList;
