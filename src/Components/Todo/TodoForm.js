import React, { useState, useRef } from "react";

function TodoForm({ dispatch }) {
  const [description, setDescription] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      dispatch({ type: "add-todo", payload: description });
      setDescription("");
    }
  };

  const handleFocusInput = () => {
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex w-full">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="my task"
        className="px-4 py-4 text-xl border rounded w-[90%] bg-[#e6ebff]"
        ref={inputRef}
      />

      <button
        className="bg-green-300 hover:bg-black hover:text-white transition-all py-3 px-6  text-2xl rounded-md "
        type="submit"
        onClick={handleFocusInput}
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
