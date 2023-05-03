import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import TodoApp from "../Components/Todo/TodoApp";
const Login = () => {
  const loggedUser = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <Navbar loggedUser={loggedUser} />
      <TodoApp />
    </>
  );
};

export default Login;
