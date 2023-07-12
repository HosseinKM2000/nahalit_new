import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";

const FixedIcon = () => {
  return (
    <Link to="/" className="fixed z-50">
      <BiShoppingBag className="sm:w-10 sm:h-10 w-10 h-10 fixed bottom-5 right-5 bg-[#227e1f] hover:bg-[#2d9b29] transition-all duration-200 text-white p-2  rounded-full" />
      <span className="bottom-[2.8rem] right-[2.8rem] sm:w-7 w-5 h-5 p-2 sm:h-7 bg-[#035e0b] fixed z-[1000]  flex items-center justify-center text-white rounded-full" style={{border:"solid 1px #ffff"}}>
        0
      </span>
    </Link>
  );
};

export default FixedIcon;
