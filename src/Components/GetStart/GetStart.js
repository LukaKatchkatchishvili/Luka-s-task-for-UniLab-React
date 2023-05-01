import React, { useState } from "react";
import { todologo } from "../../dataImgs";
import RegisterForm from "../RegisterForm/RegisterForm";
import GetStrartComponent from "../GetStartComponent/GetStrartComponent";

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
