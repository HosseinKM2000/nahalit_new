import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart, BsSearch } from "react-icons/bs";
import { RiDashboard3Line } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";
import MobileSearch from "../MobileSearch/MobileSearch";
import ScrollTop from "../ScrollTop/ScrollTop";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import UserAvatarIcon from "../UserAvatar/UserAvatar";

const ResponseHeader = () => {
  const [dropMenu,setDropMenu] = useState(false);
  const [dropSearchBox,setDropSearchBox] = useState(false);
  const loginStatus = useSelector(state => state.authentication.loginStatus);
  const userId = Cookies.get('user') === undefined ? '' : JSON.parse(Cookies.get('user')).id
  const location = useLocation();
  const urlPath = location.pathname;
  
  return (
    <div  className="flex flex-row-reverse relative items-center justify-between p-4" style={{borderBottom:'1px solid #c3c3c3'}}>
      <Link id="UP" to="/">
        <img src="https://nahalit.com/wp-content/uploads/2022/09/photo_2022-09-21_19-42-20.jpg" className="w-[3rem]" alt="nahal it icon" />
      </Link>
      <div className="flex items-center min-w-fit w-[50%] sm:w-[30%] justify-between">
        {
          loginStatus
          ?
          <UserAvatarIcon/>
          :
          <></>
        }
        {
          urlPath === '/cart'
          ?
          <></>
          :
          <Link to={'/cart'}>
            <BsCart className="text-xl text-[#8E8C8C]" />
          </Link>
        }
        {
          userId !== '' && userId === 1
          ?
          <Link to={'/dashboard'}>
           <RiDashboard3Line className="text-2xl text-[#8E8C8C] font-thin" />
          </Link>
        :
        <></>
        }
        {
          urlPath === '/favorites'
          ?
          <></>
          :
          <Link to={'/favorites'}>
            <AiOutlineHeart className="text-2xl text-[#8E8C8C] font-thin" />
          </Link>
        }
        <Link>
          <BsSearch className="text-xl text-[#8E8C8C]" onClick={()=>setDropSearchBox(true)}/>
        </Link>
      </div>
      <div>
        <RxHamburgerMenu className="text-2xl text-[#8E8C8C]" onClick={()=> setDropMenu(true)}/>
      </div>
      <MobileSearch dropSearchBox={dropSearchBox} setDropSearchBox={setDropSearchBox}/>
      <MobileMenu dropMenu={dropMenu} setDropMenu={setDropMenu}/>
      <ScrollTop/>
    </div>
  );
};

export default ResponseHeader;
