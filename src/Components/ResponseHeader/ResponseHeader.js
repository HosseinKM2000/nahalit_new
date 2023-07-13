import React , { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart, BsSearch } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import clearIcon from '../../assets/img/clear.png';
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
      <div className={!dropMenu ? "w-[100vw] z-[70] h-screen bg-[#59ce90f8] fixed top-0 right-[-40rem] sm:right-[-50rem] md:right-[-70rem] transition-all duration-700" : "w-[100vw] md:w-[35vw] z-[70] h-screen bg-[#59ce90f8] fixed top-0 right-0 transition-all duration-700"}>
        <div className="flex itesm-center w-full justify-end p-4" style={{borderBottom:'1px solid #fff'}}>
          <img src={clearIcon} alt="close" className="w-[24px]" onClick={()=>setDropMenu(false)}/>
        </div>
        <MobileMenu/>
      </div>
    </div>
  );
};

export default ResponseHeader;
