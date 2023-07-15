import React , { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart, BsSearch } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";

const ResponseHeader = () => {
  const [dropMenu,setDropMenu] = useState(false);

  return (
    <div className="flex flex-row-reverse relative items-center justify-between p-4" style={{borderBottom:'1px solid #c3c3c3'}}>
      <Link to="/">
        <img src="https://nahalit.com/wp-content/uploads/2022/09/photo_2022-09-21_19-42-20.jpg" className="w-[3rem]" alt="nahal it icon" />
      </Link>
      <div className="flex items-center min-w-fit w-[50%] sm:w-[30%] justify-between">
        <Link>
          <BsCart className="text-xl text-[#8E8C8C]" />
        </Link>
        <Link>
          <AiOutlineHeart className="text-2xl text-[#8E8C8C] font-thin" />
        </Link>
        <Link>
          <BsSearch className="text-xl text-[#8E8C8C]" />
        </Link>
      </div>
      <div>
        <RxHamburgerMenu className="text-2xl text-[#8E8C8C]" onClick={()=> setDropMenu(true)}/>
      </div>
      <MobileMenu dropMenu={dropMenu} setDropMenu={setDropMenu}/>
    </div>
  );
};

export default ResponseHeader;
