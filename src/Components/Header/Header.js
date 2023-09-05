import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getBasketsByUserId } from "../../features/cart/action";
import { getUserRole } from "../../features/dashboard/action";
import HeaderAdminProfileIcon from "../HeaderAdminProfileIcon/HeaderAdminProfileIcon";
import HeaderNavButtons from "../HeaderNavButtons/HeaderNavButtons";
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";
import HeaderProductsLogo from "../HeaderProductsLogo/HeaderProductsLogo";
import HeaderWeAddress from "../HeaderWeAddress/HeaderWeAddress";
import ScrollTop from "../ScrollTop/ScrollTop";

const Header = () => {
  const [showSlide4, setShowSlide4] = useState(false);
  const [showSlide5, setShowSlide5] = useState(false);
  const [showSlide13, setShowSlide13] = useState(false);
  const loginStatus = useSelector(state => state.authentication.loginStatus);
  const baskets = useSelector(state => state.cart.baskets);
  const success = useSelector(state => state.cart.success);
  const userId = loginStatus ? JSON.parse(Cookies.get("user"))?.id  : '';
  const location = useLocation();
  const urlPath = location.pathname;
  const userPermissions = useSelector(state => state.dashboard.userPermissions);
  const dispatch = useDispatch(); 

  useEffect(() => {
    if(loginStatus){
      dispatch(getUserRole(userId))
    }
  },[loginStatus])

  useEffect(() => {
    if(loginStatus) {
      dispatch(getBasketsByUserId(userId))
    }
  },[success])

  const clickEntershowslide4 = () => {
    setShowSlide4(true);
  };
  const clickoutshowslide4 = () => {
    setShowSlide4(false);
  };
  const clickEntershowslide5 = () => {
    setShowSlide5(true);
  };
  const clickoutshowslide5 = () => {
    setShowSlide5(false);
  };


  return (
    <>
      <div className="bg-[#07B235] h-1" id="UP"></div>
      <ScrollTop/>
      <div className="min-w-full">
        <HeaderWeAddress/>
        <HeaderProductsLogo/>
        <div className="flex justify-center mt-3 items-center font-[shabnamMedium] py-5" style={{borderBottom:'1px #D6D3D1 solid',borderTop:'1px #D6D3D1 solid'}}>
        <div className="text-[#7c7c7c] text-sm flex items-center justify-center w-full gap-5 2xl:justify-center 2xl:gap-x-[8rem] px-3">
            <HeaderAdminProfileIcon showSlide13={showSlide13} setShowSlide13={setShowSlide13} userId={userId} loginStatus={loginStatus}/>
            <HeaderNavbar/>
            <HeaderNavButtons loginStatus={loginStatus} userId={userId}/>
            <div className="flex items-center justify-center flex-row gap-2">
              {
                urlPath === '/favorites'
                ?
                <></>
                :
                <div className="relative">
                  <Link to={"/favorites"}>
                    <AiOutlineHeart className="text-[#57C053] text-3xl hover:text-[#62d15e]" onMouseEnter={clickEntershowslide4} onMouseLeave={clickoutshowslide4}/>
                  </Link>
                  <div className={showSlide4 ? "box arrow-top" : "box arrow-top opacity-0 transition-all duration-300"}>
                    مشاهده علاقه مندی ها
                  </div>
                </div>
              }
              <div className="flex relative">
                {
                  urlPath === '/cart'
                  ?
                  <></>
                  :
                  <>
                    <Link to={"/cart"}>
                      <HiOutlineShoppingCart className="text-[#57C053] text-3xl hover:text-[#62d15e]" onMouseEnter={clickEntershowslide5} onMouseLeave={clickoutshowslide5}/>
                    </Link>
                    <span className="absolute -top-3 -left-1 rounded-full w-5 h-5 flex items-center justify-center bg-[#57C053] text-white">
                      {
                        baskets?.length
                      }
                    </span>
                  </>
                }
                <div className={showSlide5 ? "box arrow-bottom transition-all duration-300" : "box arrow-bottom opacity-0 transition-all duration-300"}>
                  مشاهده سبد خرید
                </div>
              </div>
            </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Header;
