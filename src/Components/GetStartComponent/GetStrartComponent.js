import React from "react";
import { todologo } from "../../dataImgs";

const GetStrartComponent = ({setGetRegister,getRegister}) => {
  return (
    <div className="w-1/2 mx-auto flex flex-col justify-around items-center h-[70vh] my-[15vh]">
      <img src={todologo} alt="todologo" className="w-1/4" />
      <h1 className="text-6xl text-white text-center">Keep Track Of Daily Tasks In Life</h1>
      <button
        className="bg-green-300 py-3 px-16  text-2xl rounded-md"
        onClick={() => setGetRegister(!getRegister)}
      >
        Get Straterd
      </button>
    </div>
  );
};

export default GetStrartComponent;
