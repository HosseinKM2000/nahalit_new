import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";

const FixedIcon = () => {
  return (
    <Link to="/" className="fixed z-50">
      <BiShoppingBag className="sm:w-14 sm:h-14 w-10 h-10 2xl:w-24 2xl:h-24 fixed bottom-5 right-5 bg-[#227e1f] hover:bg-[#2d9b29] transition-all duration-200 text-white p-2 rounded-full" />
      <span className="sm:w-7 w-5 h-5 p-2 2xl:w-12 2xl:h-12 2xl:text-[2.5rem] sm:p-0 sm:h-7 bg-[#035e0b] fixed z-[1000] bottom-[3rem] right-[3rem] 2xl:bottom-[5rem] 2xl:right-[5rem] sm:bottom-[3.5rem] sm:right-[3.5rem] flex items-center justify-center text-white rounded-full" style={{border:"solid 1px #ffff"}}>
        0
      </span>
    </Link>
  );
};

export default FixedIcon;
