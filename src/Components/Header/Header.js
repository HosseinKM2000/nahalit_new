import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { AiFillDashboard, AiOutlineHeart } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { FaSpa, FaUserCircle } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getBasketsByUserId } from "../../features/cart/action";
import { getUserRole } from "../../features/dashboard/action";
import HeaderWeAddress from "../HeaderWeAddress/HeaderWeAddress";
import ScrollTop from "../ScrollTop/ScrollTop";
import UserAvatarIcon from "../UserAvatar/UserAvatar";
import HeaderProductsLogo from "../HeaderProductsLogo/HeaderProductsLogo";
import HeaderAdminProfileIcon from "../HeaderAdminProfileIcon/HeaderAdminProfileIcon";
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";

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
            <div className="flex items-center justify-center xl:gap-x-3 lg:gap-x-3">
              <div className="bg-[#57C053] min-w-fit hover:bg-[#62d15e] transition-all duration-300 xl:px-3 text-white flex flex-row-reverse px-1 py-2 rounded-md items-center justify-center gap-x-2" style={{boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>
                <Link to={"/be_seller"}>
                  <span className="text-sm font-[shabnamMedium] tracking-tight">فروشنده باشید</span>
                </Link>
                <FaSpa className="text-base" />
              </div>
              {
                loginStatus
                ?
                <></>
                :
                <Link to={'/login'} className="flex flex-row-reverse items-center justify-center py-2 px-1 xl:px-3 rounded-md bg-[#57C053] hover:bg-[#62d15e] text-white gap-x-2" style={{boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>
                  <span className="text-sm font-[shabnamMedium] tracking-tight">ورود و عضویت</span>
                  <BsPerson className="text-base" />
              </Link>
              }
              {
                userId !== '' && userId === 1
                ?
                <Link to={'/dashboard'} className="flex flex-row-reverse w-[7rem] min-w-fit items-center justify-center py-2 px-1 xl:px-3 rounded-md bg-[#57C053] hover:bg-[#62d15e] text-white gap-x-2" style={{boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>
                  <span className="text-sm font-[shabnamMedium] tracking-tight">پنل مدیریت</span>
                  <AiFillDashboard className="text-lg" />
                </Link>
              :
              <></>
              }
              {
                userId !== '' && userId !== 1
                ?
                <Link to={'/userPage/userProfile'} className="flex flex-row-reverse w-[7rem] min-w-fit items-center justify-center py-2 px-1 xl:px-3 rounded-md bg-[#57C053] hover:bg-[#62d15e] text-white gap-x-2" style={{boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>
                  <span className="text-sm font-[shabnamMedium] tracking-tight">پنل کاربری</span>
                  <FaUserCircle className="text-lg" />
                </Link>
              :
              <></>
              }
            </div>
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
