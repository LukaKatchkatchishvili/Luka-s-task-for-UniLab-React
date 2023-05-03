import React, { useState } from "react";
import { TbCircleArrowDown } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const Navbar = ({ loggedUser }) => {
  const { name, img } = loggedUser;
  const [logoutBtn, setLogoutBtn] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("todos");
    navigate("/registration");
  };
  return (
    <>
      <section className="flex justify-between items-center p-2 md:p-5 px-7 md:px-20 text-white h-[10vh] relative">
        <div className="uppercase text-2xl md:text-4xl">to do</div>
        <div className="flex items-center relative">
          <h1 className="text-lg md:text-2xl mr-8">{name}</h1>
          <img
            src={img}
            alt="img"
            className="md:w-16 md:h-16 w-12 h-12 rounded-full"
          />
          <TbCircleArrowDown
            className="absolute bottom-0 right-0"
            size={20}
            onClick={() => setLogoutBtn(!logoutBtn)}
          />
        </div>
        {logoutBtn ? (
          <div
            className="absolute -bottom-7 right-[4.1%] w-24 px-6 py-2 cursor-pointer rounded text-center bg-white text-black drop-shadow-md"
            onClick={handleLogout}
          >
            Logout
          </div>
        ) : (
          ""
        )}
      </section>
    </>
  );
};

export default Navbar;
