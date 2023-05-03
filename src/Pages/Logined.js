import React, { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import TodoApp from "../Components/Todo/TodoApp";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const loggedUser = JSON.parse(localStorage.getItem("user"));
  console.log(loggedUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (loggedUser == null) {
      navigate("/registration");
    }
  }, []);
  return (
    <>
      {loggedUser?<Navbar loggedUser={loggedUser} />:''}
      <TodoApp />
    </>
  );
};

export default Login;
