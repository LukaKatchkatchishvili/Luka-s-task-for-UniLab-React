import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsUpload } from "react-icons/bs";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    img: "",
  });
  const [notFilledName, setNotFilledName] = useState(false);
  const [notFilledImg, setNotFilledImg] = useState(false);
  const [tooManyChar, setTooManyChar] = useState(false);
  const handleSignIn = (e) => {
    let error = 0;
    if (input.name.length < 2) {
      error++;
      setNotFilledName(true);
    } else {
      setNotFilledName(false);
    }
    if (input.img.length < 2) {
      error++;
      setNotFilledImg(true);
    } else {
      setNotFilledImg(false);
    }
    if (input.img.length > 5242878) {
      error++;
      setTooManyChar(true);
    } else {
      setTooManyChar(false);
    }
    if (error < 1) {
      localStorage.setItem("user", JSON.stringify(input));
      setNotFilledName(false);
      setNotFilledImg(false);
      navigate("/logined");
    }
  };
  return (
    <>
      <div className="bg-white w-5/6 lg:w-1/3 mx-auto text-center sm:h-[70vh] my-[15vh] p-4 py-10 md:p-12 rounded-md">
        <h1 className="text-2xl md:text-5xl">Get Started</h1>
        <div className="py-4 flex flex-col justify-around h-full">
          <div>
            <div>
              <p className="text-md md:text-2xl">add a photo</p>
              <div className="uploadimage w-[75px] mx-auto ">
                <label htmlFor="imgs" className="block w-[75px]">
                  <BsUpload size={72} className="my-5" />
                </label>
              </div>
              {notFilledImg ? (
                <div className="text-caution font-bold">upload img</div>
              ) : (
                <br />
              )}
              {tooManyChar ? (
                <div className="text-caution font-bold">Too big item</div>
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
          <div className="my-7 md:my-0">
            <div className="mx-auto text-md md:text-2xl">fill in your name</div>
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
            {notFilledName ? (
              <div className="text-[#Ea2424] font-bold">fields is empty</div>
            ) : (
              <br />
            )}
          </div>
          <div>
            <button
              className="bg-green-300 py-2 px-12 md:py-3 md:px-16 text-md md:text-2xl rounded-md"
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
