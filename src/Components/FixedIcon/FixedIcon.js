import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";

const FixedIcon = () => {
  return (
    <Link to="/" className="fixed z-50">
      <BiShoppingBag className="sm:w-10 sm:h-10 w-10 h-10 2xl:w-20 2xl:h-20 fixed bottom-5 right-5 bg-[#227e1f] hover:bg-[#2d9b29] transition-all duration-200 text-white p-2 2xl:p-3 rounded-full" />
      <span className="sm:w-7 w-5 h-5 p-2 2xl:w-9 2xl:h-9 2xl:text-[2rem] 2xl:p-5 sm:p-0 sm:h-7 bg-[#035e0b] fixed z-[1000] bottom-[3rem] right-[3rem] 2xl:bottom-[4.5rem] 2xl:right-[4.5rem] sm:bottom-[1.5rem] sm:right-[1.5rem] flex items-center justify-center text-white rounded-full" style={{border:"solid 1px #ffff"}}>
        0
      </span>
    </Link>
  );
};

export default FixedIcon;
