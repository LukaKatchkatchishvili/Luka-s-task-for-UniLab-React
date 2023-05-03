import React from "react";
import { todologo } from "../../data/dataImgs";

const GetStrartComponent = ({ setGetRegister, getRegister }) => {
  return (
    <div className="w-3/4 md:w-1/2 mx-auto flex flex-col justify-around items-center h-[75vh] md:mt-[5vh] mb-[20vh]">
      <img src={todologo} alt="todologo" className="w-3/4 h-1/4 md:w-1/3" />
      <h1 className="text-2xl md:text-6xl text-white text-center font-bold">
        Keep Track Of Daily Tasks In Life
      </h1>
      <button
        onClick={() => setGetRegister(!getRegister)}
        className="bg-green-300 py-2 md:py-4 px-12 md:px-24 text-lg md:text-4xl rounded-md"
      >
        Get Strated
      </button>
    </div>
  );
};

export default GetStrartComponent;
