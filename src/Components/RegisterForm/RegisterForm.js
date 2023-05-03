import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsUpload } from "react-icons/bs";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    img: "",
  });
  const [notFilled, setNotFilled] = useState(false);
  const [tooManyChar, setTooManyChar] = useState(false);
  const handleSignIn = (e) => {
    if (input.name.length < 2 || input.img.length < 2) {
      setNotFilled(true);
    }
    if (input.name.length > 5242878 || input.img.length > 5242878) {
      setTooManyChar(true);
    } else {
      const getitem = localStorage.getItem("user");
      console.log(getitem);
      localStorage.setItem("user", JSON.stringify(input));
      setNotFilled(false);
      navigate("/logined");
    }
  };
  return (
    <>
      <div className="bg-white w-5/6 lg:w-1/3 mx-auto text-center h-[70vh] my-[15vh] p-12 rounded-md">
        <h1 className="text-5xl">Get Started</h1>
        <div className="py-4 flex flex-col justify-around h-full">
          <div>
            <div>
              <p className="text-2xl">add a photo</p>
              <div className="uploadimage w-[75px] mx-auto ">
                <label htmlFor="imgs" className="block w-[75px]">
                  <BsUpload size={75} className="my-5" />
                </label>
              </div>
              {tooManyChar ? (
                <div className="text-[#Ea2424] font-bold">Too big item</div>
              ) : (
                ""
              )}
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
              className="bg-[#e6ebff] px-5 py-3 rounded-md w-3/4"
            />
            {notFilled ? (
              <div className="text-[#Ea2424] font-bold">field is empty</div>
            ) : (
              <br />
            )}
          </div>
          <div>
            <button
              className="bg-green-300 py-3 px-16  text-2xl rounded-md"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
