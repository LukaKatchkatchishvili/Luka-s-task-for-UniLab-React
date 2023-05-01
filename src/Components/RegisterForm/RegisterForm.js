import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { upload } from "../../dataImgs";
import "./RegisterForm.css";

const RegisterForm = () => {
  const history = useHistory();
  const [input, setInput] = useState({
    name: "",
    img: "",
  });
  const handleSignIn = () => {
    if (input.name.length > 2 && input.img.length > 2) {
      history.push("/logined");
    }
  };
  return (
    <>
      <div className="bg-white w-1/3 mx-auto text-center h-[70vh] my-[15vh] p-16 rounded-md">
        <h1 className="text-5xl">Get Started</h1>
        <div className="py-4 flex flex-col justify-around h-full">
          <div>
            <div>
              <p className="text-2xl">add a photo</p>
              <div className="uploadimage w-[75px] mx-auto ">
                <label htmlFor="imgs" className="block w-[75px]">
                  <img src={upload} alt="upload" />
                </label>
              </div>
            </div>
            <input
              type="file"
              name="imgs"
              id="imgs"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                  setInput((prevInput) => ({
                    ...prevInput,
                    img: reader.result,
                  }));
                };
              }}
            />
          </div>
          <div>
            <div className="mx-auto my-3 text-2xl">fill in your name</div>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              id="name"
              className="bg-[#e6ebff] px-5 py-3 rounded-md w-[300px]"
            />
          </div>
          <div>
            <button className="bg-green-300 py-3 px-16  text-2xl rounded-md" onClick={handleSignIn}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
