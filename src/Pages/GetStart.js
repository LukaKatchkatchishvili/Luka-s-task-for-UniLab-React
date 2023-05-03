import React, { useState } from "react";
import RegisterForm from "../Components/RegisterForm/RegisterForm";
import GetStrartComponent from "../Components/GetStartComponent/GetStrartComponent";

const GetStart = () => {
  const [getRegister, setGetRegister] = useState(false);
  return (
    <>
      {!getRegister ? (
        <GetStrartComponent
          setGetRegister={setGetRegister}
          getRegister={getRegister}
        />
      ) : (
        ""
      )}
      {getRegister ? <RegisterForm /> : ""}
    </>
  );
};

export default GetStart;
