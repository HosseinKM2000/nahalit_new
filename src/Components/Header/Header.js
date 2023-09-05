import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { AiFillDashboard, AiFillHtml5, AiOutlineHeart } from "react-icons/ai";
import { BsPerson, BsWordpress } from "react-icons/bs";
import { FaAndroid, FaSpa, FaUserCircle } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { RiArrowDownSLine, RiWordpressFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getUserRole } from "../../features/dashboard/action";
import ScrollTop from "../ScrollTop/ScrollTop";
import UserAvatarIcon from "../UserAvatar/UserAvatar";
import { getBasketsByUserId } from "../../features/cart/action";
import HeaderWeAddress from "../HeaderWeAddress/HeaderWeAddress";

const Header = () => {

  const [showSlide2, setShowSlide2] = useState(false);
  const [showSlide3, setShowSlide3] = useState(false);
  const [showSlide4, setShowSlide4] = useState(false);
  const [showSlide5, setShowSlide5] = useState(false);
  const [showSlide11, setShowSlide11] = useState(false);
  const [showSlide12, setShowSlide12] = useState(false);
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

  const clickEntershowslide2 = () => {
    setShowSlide2(true);
  };
  const clickoutshowslide2 = () => {
    setShowSlide2(false);
  };
  const clickEntershowslide3 = () => {
    setShowSlide3(true);
  };
  const clickoutshowslide3 = () => {
    setShowSlide3(false);
  };
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
  const clickEntershowslide11 = () => {
    setShowSlide11(true);
  };
  const clickoutshowslide11 = () => {
    setShowSlide11(false);
  };
  const clickEntershowslide12 = () => {
    setShowSlide12(true);
  };
  const clickoutshowslide12 = () => {
    setShowSlide12(false);
  };

  return (
    <>
      <div className="bg-[#07B235] h-1" id="UP"></div>
      <ScrollTop/>
      <div className="min-w-full">
        <HeaderWeAddress/>
        <div className="flex justify-center mt-10">
          <div>
            <div className="border-l-2 gap-1 border-dotted cursor-default border-[#d7f0d6] px-4 py-3 flex flex-col items-center justify-center">
              <BsWordpress className="text-[2rem] text-[#57C053] hover:text-[#6ade66] transition-all duration-300" />
              <p className="text-[#191919] hover:text-[#64d24b] transition-all text-[0.9rem] font-[shabnamthin] tracking-tighter">قالب وردپرس</p>
            </div>
          </div>
          <div>
            <div className="border-l-2 gap-1 border-dotted cursor-default border-[#d7f0d6] px-4 py-3 flex flex-col items-center justify-center">
              <AiFillHtml5 className="text-[2rem] text-[#57C053] hover:text-[#6ade66] transition-all duration-300" />
              <p className="text-[#191919] hover:text-[#64d24b] transition-all text-[0.9rem] font-[shabnamThin] tracking-tighter">قالب html</p>
            </div>
          </div>
          <div>
            <div className="border-l-2 gap-1 cursor-default border-dotted border-[#d7f0d6] px-4 py-3 flex flex-col items-center justify-center">
              <RiWordpressFill className="text-[2rem] text-[#57C053] hover:text-[#6ade66] transition-all duration-300" />
              <p className="text-[#191919] hover:text-[#64d24b] transition-all text-[0.9rem] font-[shabnamThin] tracking-tighter">پلاگین وردپرس</p>
            </div>
          </div>
          <div>
            <div className="px-4 py-3 flex gap-1 cursor-default flex-col items-center justify-center">
              <FaAndroid className="text-[2rem] text-[#57C053]  hover:text-[#6ade66] transition-all duration-300" />
              <p className="text-[#191919] hover:text-[#64d24b] transition-all text-[0.9rem] font-[shabnamThin] tracking-tighter">محصولات اپلیکیشن</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-3 items-center font-[shabnamMedium] py-5" style={{borderBottom:'1px #D6D3D1 solid',borderTop:'1px #D6D3D1 solid'}}>
          <div className="text-[#7c7c7c] text-sm flex items-center justify-center w-full gap-5 2xl:justify-center 2xl:gap-x-[8rem] px-3">
              {
              loginStatus && userId === 1
              ?
              <div className="relative">
                <Link to={'/userPage/userProfile'} onMouseEnter={()=>setShowSlide13(true)} onMouseLeave={()=>setShowSlide13(false)}>
                  <UserAvatarIcon/>
                </Link>
                <div className={showSlide13 ? "box arrow-avatar" : "box arrow-avatar opacity-0 transition-all duration-300"}>
                  پنل کاربری
                </div>
              </div>
              :
              <></>
            }
            <ul className="flex justify-start items-baseline gap-x-5 2xl:gap-x-10 lg:whitespace-nowrap">
              <li>
                <Link to="/" className="text-[#171717] font-[shabnamMedium] text-sm">صفحه اصلی</Link>
              </li>
              <li className="flex items-center gap-x-1 relative">
                <Link to={"/shop"} className="text-[#171717] cursor-default font-[shabnamMedium] text-sm">محصولات</Link>
              </li>
              <li>
                <Link to="/order" className="font-[shabnamMedium] text-[#171717] text-sm">ثبت سفارش</Link>
              </li>
              <li>
                <Link to={'/articles'} className="text-[#171717] font-[shabnamMedium] text-sm">بلاگ</Link>
              </li>
              <li
                className="flex items-center gap-x-1 relative"
                onMouseEnter={clickEntershowslide2}
                onMouseLeave={clickoutshowslide2}
              >
                <span className="text-[#171717] cursor-default font-[shabnamMedium] text-sm">نمونه کارها</span>
                <RiArrowDownSLine />
                <div
                  onMouseEnter={clickEntershowslide2}
                  className={
                    showSlide2
                      ? "w-56 2xl:w-fit z-50 absolute top-9 shadow-[1px_1px_10px_rgba(0,0,0,.25)] transition-all duration-500"
                      : "w-56 2xl:w-fit z-50 absolute top-9 shadow-[1px_1px_10px_rgba(0,0,0,.25)] opacity-0 -translate-y-[50rem] transition-all duration-500"
                  }
                >
                  <div className="bg-[#07B235] h-[2px] absolute top-0 right-0 left-0 text-center w-full"></div>
                  <ul className="px-3 py-1 bg-white">
                    <li
                      className="flex items-center justify-between py-2 relative"
                      onMouseEnter={clickEntershowslide11}
                      onMouseLeave={clickoutshowslide11}
                    >
                      <span className="text-[#171717] cursor-default font-[shabnamMedium] text-sm">نمونه کار گرافیک</span>
                      <MdKeyboardArrowLeft />
                      <div
                        onMouseEnter={clickEntershowslide11}
                        className={
                          showSlide11
                            ? "absolute bg-white -left-[16rem] -top-2 px-7 py-2 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex flex-col gap-y-2 items-center justify-center transition-all duration-500"
                            : "absolute bg-white -left-[16rem] -top-2 px-7 py-2 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex flex-col gap-y-2 items-center justify-center opacity-0 -translate-y-[50rem] transition-all duration-500"
                        }
                      >
                        <Link to="/workSamples/graphic/MotionGraphics" className="px-4 py-1">
                          <p className="text-[#171717] font-[shabnamMedium] text-sm">نمونه کار موشن گرافیک</p>
                        </Link>
                        <Link to="/workSamples/graphic/UI_UX" className="px-4 py-1">
                          <p className="font-[shabnamMedium] text-[#171717] text-sm">نمونه کار UI/UX</p>
                        </Link>
                        <Link to="/workSamples/graphic/Brochure" className="px-4 py-1">
                          <p className="text-[#171717] font-[shabnamMedium] text-sm">نمونه کار بروشور</p>
                        </Link>
                        <Link to="/workSamples/graphic/Poster" className="px-4 py-1">
                          <p className="text-[#171717] font-[shabnamMedium] text-sm">نمونه کار پوستر</p>
                        </Link>
                        <Link to="/workSamples/graphic/Catalog" className="px-4 py-1">
                          <p className="text-[#171717] font-[shabnamMedium] text-sm">نمونه کار کاتالوگ</p>
                        </Link>
                        <Link to="/workSamples/graphic/BusinessCard" className="px-4 py-1">
                          <p className="text-[#171717] font-[shabnamMedium] text-sm">نمونه کار کارت ویزیت</p>
                        </Link>
                        <Link to="/workSamples/graphic/Logo" className="px-4 py-1">
                          <p className="text-[#171717] font-[shabnamMedium] text-sm">نمونه کار لوگو</p>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <Link to="/workSamples/Premiere"  className="flex items-center justify-start py-2">
                        <p className="text-[#171717] font-[shabnamMedium] text-sm">نمونه کار پریمیر</p>
                      </Link>
                    </li>
                    <li
                        className="flex items-center justify-between py-2 relative"
                        onMouseEnter={clickEntershowslide12}
                        onMouseLeave={clickoutshowslide12}
                      >
                        <span className="text-[#171717] cursor-default font-[shabnamMedium] text-sm">نمونه کار طراحی سایت</span>
                        <MdKeyboardArrowLeft />
                        <div
                          onMouseEnter={clickEntershowslide12}
                          className={
                            showSlide12
                              ? "absolute bg-white -left-[12.2rem] -top-2 px-7 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex flex-col gap-y-2 items-center justify-center transition-all duration-500"
                              : "absolute bg-white -left-[12.2rem] -top-2 px-7 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex flex-col gap-y-2 items-center justify-center opacity-0 -translate-y-[50rem] transition-all duration-500"
                          }
                        >
                          <Link className="px-4 py-2" to="/workSamples/web/WebsiteDesignPortfolio">
                            <p className="text-[#171717] font-[shabnamMedium] text-sm">PHP (Laravel)</p>
                          </Link>
                        </div>
                    </li>
                    <li>
                      <Link to="/workSamples/Aplication" className="flex items-center justify-between py-2">
                        <p className="text-[#171717] font-[shabnamMedium] text-sm">نمونه کار اپلیکیشن</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/workSamples/Seo" className="flex items-center justify-between py-2">
                        <p className="text-[#171717] font-[shabnamMedium] text-sm">نمونه کار سئو</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/workSamples/Voicing" className="flex items-center justify-between py-2">
                        <p className="text-[#171717] font-[shabnamMedium] text-sm">نمونه کار تدوین و صدا گذاری</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/LoginLearn" className="text-[#171717] font-[shabnamMedium] text-sm">آموزش ورود</Link>
              </li>
              <li>
                <Link to="/recruitment" className="text-[#171717] font-[shabnamMedium] text-sm">استخدام</Link>
              </li>
              <li
                className="flex items-center gap-x-1 relative"
                onMouseEnter={clickEntershowslide3}
                onMouseLeave={clickoutshowslide3}
              >
                <span className="text-[#171717] cursor-default font-[shabnamMedium] text-sm">خدمات ما</span>
                <RiArrowDownSLine />
                <div
                  onMouseEnter={clickEntershowslide3}
                  className={
                    showSlide3
                      ? "w-64 2xl:w-fit z-50 absolute top-9 transition-all duration-500"
                      : "w-64 2xl:w-fit z-50 absolute top-9 opacity-0 -translate-y-[50rem] transition-all duration-500"
                  }
                >
                  <ul className="px-5 py-1 bg-white  w-fit flex shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex-col items-start" style={{borderTop:'2px solid #57C053'}}>
                    <li className="flex items-center justify-start py-1">
                     <Link to="/services/فروش-سایت-اختصاصی-و-اقتصادی">
                        <span className="text-[#171717] font-[shabnamMedium] text-sm">فروش سایت اختصاصی و اقتصادی</span>
                     </Link>
                    </li>
                    <li className="flex items-center justify-start py-1">
                     <Link to="/services/فروش-قالب-سایت">
                        <span className="text-[#171717] font-[shabnamMedium] text-sm">فروش قالب سایت</span>
                     </Link>
                    </li>
                    <li className="flex items-center justify-start py-1">
                     <Link to="/services/طراحی-سایت-اختصاصی">
                        <span className="text-[#171717] font-[shabnamMedium] text-sm">طراحی سایت اختصاصی</span>
                     </Link>
                    </li>
                    <li className="flex items-center justify-start py-1">
                     <Link to="/services/خدمات-سئو-وب-سایت">
                        <span className="text-[#171717] font-[shabnamMedium] text-sm">خدمات وب سایت و سئو وب سایت</span>
                     </Link>
                    </li>
                    <li className="flex items-center justify-start py-1">
                     <Link to="/services/خدمات-کسب-و-کار">
                        <span className="text-[#171717] font-[shabnamMedium] text-sm">خدمات کسب و کار</span>
                     </Link>
                    </li>
                    <li className="flex items-center justify-start py-1">
                     <Link to="/services/خدمات-شبکه-های-اجتماعی">
                        <span className="text-[#171717] font-[shabnamMedium] text-sm">خدمات شبکه های اجتماعی</span>
                     </Link>
                    </li>
                    <li className="flex items-center justify-start py-1">
                     <Link to="/services/موشن-گرافیک">
                        <span className="text-[#171717] font-[shabnamMedium] text-sm">موشن گرافیک</span>
                     </Link>
                    </li>
                    <li className="flex items-center justify-start py-1">
                     <Link to="/services/تدوین-پروپوزال">
                        <span className="text-[#171717] font-[shabnamMedium] text-sm">تدوین پروپوزال</span>
                     </Link>
                    </li>
                    <li className="flex items-center justify-start py-1">
                     <Link to="/services/اپلیکیشن-موبایل">
                        <span className="text-[#171717] font-[shabnamMedium] text-sm">اپلیکیشن موبایل</span>
                     </Link>
                    </li>
                    <li className="flex items-center justify-start py-1">
                     <Link to="/services/خدمات-پریمیر-و-تدوین-فیلم">
                        <span className="text-[#171717] font-[shabnamMedium] text-sm">خدمات پریمیر و تدوین فیلم</span>
                     </Link>
                    </li>
                    <li className="flex items-center justify-start py-1">
                     <Link to='/services/خدمات-گرافیک'>
                        <span className="text-[#171717] font-[shabnamMedium] text-sm">خدمات گرافیک</span>
                     </Link>
                    </li>
                    <li className="flex items-center justify-start py-1">
                     <Link to='/services/خدمات-تدوین-صدا-و-صدا-گذاری'>
                        <span className="text-[#171717] font-[shabnamMedium] text-sm">خدمات تدوین صدا و صدا گذاری</span>
                     </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
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
