import React, { useState } from "react";
import { AiFillHtml5, AiOutlineHeart } from "react-icons/ai";
import { BsPerson, BsWordpress } from "react-icons/bs";
import { FaAndroid, FaSpa } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { RiArrowDownSLine, RiWordpressFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const loginStatus = useSelector(state => state.authentication.loginStatus);
  const [showSlide, setShowSlide] = useState(false);
  const [showSlide2, setShowSlide2] = useState(false);
  const [showSlide3, setShowSlide3] = useState(false);
  const [showSlide4, setShowSlide4] = useState(false);
  const [showSlide5, setShowSlide5] = useState(false);
  const [showSlide6, setShowSlide6] = useState(false);
  const [showSlide7, setShowSlide7] = useState(false);
  const [showSlide8, setShowSlide8] = useState(false);
  const [showSlide9, setShowSlide9] = useState(false);
  const [showSlide10, setShowSlide10] = useState(false);
  const [showSlide11, setShowSlide11] = useState(false);
  const [showSlide12, setShowSlide12] = useState(false);

  const clickEntershowslide = () => {
    setShowSlide(true);
  };
  const clickoutshowslide = () => {
    setShowSlide(false);
  };
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
  const clickEntershowslide6 = () => {
    setShowSlide6(true);
  };
  const clickoutshowslide6 = () => {
    setShowSlide6(false);
  };
  const clickEntershowslide7 = () => {
    setShowSlide7(true);
  };
  const clickoutshowslide7 = () => {
    setShowSlide7(false);
  };
  const clickEntershowslide8 = () => {
    setShowSlide8(true);
  };
  const clickoutshowslide8 = () => {
    setShowSlide8(false);
  };
  const clickEntershowslide9 = () => {
    setShowSlide9(true);
  };
  const clickoutshowslide9 = () => {
    setShowSlide9(false);
  };
  const clickEntershowslide10 = () => {
    setShowSlide10(true);
  };
  const clickoutshowslide10 = () => {
    setShowSlide10(false);
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
      <div className="bg-[#07B235] h-1"></div>
      <div className="min-w-full">
        <div className="flex justify-between w-full text-center px-5 py-1">
          <p className="font-[shabnamLight]  leading-10 text-[#707070] text-[0.9rem]">
            آدرس : تهران میدان فردوسی خیابان ایرانشهر بین سمیه و طالقانی مجتمع تجاری میلاد واحد 9
          </p>
          <p className="font-[shabnamLight] leading-10 text-[#707070] text-[0.9rem]">پشتیبانی 24 ساعته : 02188867940 – 09927674217</p>
        </div>
        <div className="flex justify-center mt-10">
          <Link>
            <div className="border-l-2 gap-1 border-dotted border-[#d7f0d6] px-4 py-3 flex flex-col items-center justify-center">
              <BsWordpress className="text-[2rem] text-[#57C053] hover:text-[#6ade66] transition-all duration-300" />
              <p className="text-[#191919] text-[0.9rem] font-[shabnamthin] tracking-tighter">قالب وردپرس</p>
            </div>
          </Link>
          <Link>
            <div className="border-l-2 gap-1 border-dotted border-[#d7f0d6] px-4 py-3 flex flex-col items-center justify-center">
              <AiFillHtml5 className="text-[2rem] text-[#57C053] hover:text-[#6ade66] transition-all duration-300" />
              <p className="text-[#191919] text-[0.9rem] font-[shabnamThin] tracking-tighter">قالب html</p>
            </div>
          </Link>
          <Link>
            <div className="border-l-2 gap-1 border-dotted border-[#d7f0d6] px-4 py-3 flex flex-col items-center justify-center">
              <RiWordpressFill className="text-[2rem] text-[#57C053] hover:text-[#6ade66] transition-all duration-300" />
              <p className="text-[#191919] text-[0.9rem] font-[shabnamThin] tracking-tighter">پلاگین وردپرس</p>
            </div>
          </Link>
          <Link>
            <div className="px-4 py-3 flex gap-1 flex-col items-center justify-center">
              <FaAndroid className="text-[2rem] text-[#57C053]  hover:text-[#6ade66] transition-all duration-300" />
              <p className="text-[#191919] text-[0.9rem] font-[shabnamThin] tracking-tighter">محصولات اپلیکیشن</p>
            </div>
          </Link>
        </div>
        <div className="flex justify-center mt-3 items-center font-[shabnamMedium] py-5" style={{borderBottom:'1px #D6D3D1 solid',borderTop:'1px #D6D3D1 solid'}}>
          <div className="text-[#7c7c7c] text-sm flex items-center justify-center w-full gap-5 2xl:justify-center 2xl:gap-x-[8rem] px-3">
            <ul className="flex justify-start items-baseline gap-x-5 2xl:gap-x-10 lg:whitespace-nowrap">
              <li>
                <Link to="/" className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">صفحه اصلی</Link>
              </li>
              <li
                className="flex items-center gap-x-1 relative"
                onMouseEnter={clickEntershowslide}
                onMouseLeave={clickoutshowslide}
              >
                <li><Link className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">محصولات</Link></li>
                <RiArrowDownSLine/>
                <div
                  onMouseEnter={clickEntershowslide}
                  className={
                    showSlide
                      ? "w-64 absolute z-50 top-9 shadow-[1px_1px_10px_rgba(0,0,0,.25)] transition-all opacity-100 duration-500"
                      : "w-64 absolute z-50 top-9 shadow-[1px_1px_10px_rgba(0,0,0,.25)] opacity-0 -translate-y-[50rem] transition-all duration-500"
                  }
                >
                  <div className="bg-[#07B235] h-[2px] 2xl:h-[5px] absolute top-0 right-0 left-0 text-center"></div>
                  <ul className="p-5 bg-white">
                    <li
                      className="flex items-center justify-between py-3"
                      onMouseEnter={clickEntershowslide6}
                      onMouseLeave={clickoutshowslide6}
                    >
                      <div className="relative">
                        <Link>
                          <p className="2xl:text-base text-[#171717] text-sm font-[shabnamMedium]">سایت های آماده</p>
                        </Link>
                        <div
                          onMouseEnter={clickEntershowslide6}
                          className={
                            showSlide6
                              ? "absolute bg-white -left-[19rem] -top-4 px-7 py-3 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex items-center justify-center transition-all duration-500"
                              : "absolute bg-white -left-[19rem] -top-4 px-7 py-3 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex items-center justify-center opacity-0 -translate-y-[50rem] transition-all duration-500"
                          }
                        >
                          <Link className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">سایت آماده لاراول</Link>
                        </div>
                      </div>
                      <MdKeyboardArrowLeft />
                    </li>
                    <li
                      className="flex relative items-center justify-between py-3"
                      onMouseEnter={clickEntershowslide7}
                      onMouseLeave={clickoutshowslide7}
                    >
                      <Link className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">پلاگین وردپرس</Link>
                      <MdKeyboardArrowLeft />
                      <div
                        onMouseEnter={clickEntershowslide7}
                        className={
                          showSlide7
                            ? "absolute bg-white -left-[12.5rem] -top-2 px-7 py-3 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex flex-col gap-y-2 items-center justify-center transition-all duration-500"
                            : "absolute bg-white -left-[12.5rem] -top-2 px-7 py-3 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex flex-col gap-y-2 items-center justify-center opacity-0 -translate-y-[50rem] transition-all duration-500"
                        }
                      >
                        <Link className="px-4 py-1">
                          <p className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">پلاگین امنیتی</p>
                        </Link>
                        <Link className="px-4 py-1">
                          <p className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">پلاگین مدیریتی</p>
                        </Link>
                        <Link className="px-4 py-1">
                          <p className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">پلاگین کاربردی</p>
                        </Link>
                      </div>
                    </li>
                    <li
                      className="flex items-center justify-between py-3 relative"
                      onMouseEnter={clickEntershowslide8}
                      onMouseLeave={clickoutshowslide8}
                    >
                      <Link className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">قالب html</Link>
                      <MdKeyboardArrowLeft />
                      <div
                        onMouseEnter={clickEntershowslide8}
                        className={
                          showSlide8
                            ? "absolute bg-white -left-[12.7rem] -top-2 px-7 py-3 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex flex-col gap-y-2 items-center justify-center transition-all duration-500"
                            : "absolute bg-white -left-[12.7rem] -top-2 px-7 py-3 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex flex-col gap-y-2 items-center justify-center opacity-0 -translate-y-[50rem] transition-all duration-500"
                        }
                      >
                        <Link className="px-4 py-1">
                          <p className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">قالب شخصی</p>
                        </Link>
                        <Link className="px-4 py-1">
                          <p className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">قالب شرکتی</p>
                        </Link>
                        <Link className="px-4 py-1">
                          <p className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">قالب فروشگاهی</p>
                        </Link>
                        <Link className="px-4 py-1">
                          <p className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">قالب خبری</p>
                        </Link>
                      </div>
                    </li>
                    <li
                      className="flex items-center justify-between py-3 relative"
                      onMouseEnter={clickEntershowslide9}
                      onMouseLeave={clickoutshowslide9}
                    >
                      <Link className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">اپلیکیشن موبایل</Link>
                      <MdKeyboardArrowLeft />
                      <div
                        onMouseEnter={clickEntershowslide9}
                        className={
                          showSlide9
                            ? "absolute bg-white -left-[13.3rem] -top-2 px-7 py-2 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex flex-col gap-y-2 items-center justify-center transition-all duration-500"
                            : "absolute bg-white -left-[13.3rem] -top-2 px-7 py-2 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex flex-col gap-y-2 items-center justify-center opacity-0 -translate-y-[50rem] transition-all duration-500"
                        }
                      >
                        <Link className="px-4 py-1">
                          <p className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">اپلیکیشن اندروید</p>
                        </Link>
                      </div>
                    </li>
                    <li
                      className="flex items-center justify-between py-3 relative"
                      onMouseEnter={clickEntershowslide10}
                      onMouseLeave={clickoutshowslide10}
                    >
                      <Link className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">اسکریپت ها</Link>
                      <MdKeyboardArrowLeft />
                      <div
                        onMouseEnter={clickEntershowslide10}
                        className={
                          showSlide10
                            ? "absolute bg-white -left-[12.5rem] -top-2 px-7 py-2 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex flex-col gap-y-2 items-center justify-center transition-all duration-500"
                            : "absolute bg-white -left-[12.5rem] -top-2 px-7 py-2 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex flex-col gap-y-2 items-center justify-center opacity-0 -translate-y-[50rem] transition-all duration-500"
                        }
                      >
                        <Link className="px-4 py-1">
                          <p className="2xl:text-base font-[shabnamMedium] text-[#171717] text-sm">اسکریپت لاراول</p>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/order" className="2xl:text-base font-[shabnamMedium] text-[#171717] text-sm">ثبت سفارش</Link>
              </li>
              <li>
                <Link className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">بلاگ</Link>
              </li>

              <li
                className="flex items-center gap-x-1 relative"
                onMouseEnter={clickEntershowslide2}
                onMouseLeave={clickoutshowslide2}
              >
                <Link to="/" className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">نمونه کارها</Link>
                <RiArrowDownSLine />
                <div
                  onMouseEnter={clickEntershowslide2}
                  className={
                    showSlide2
                      ? "w-56 2xl:w-fit z-50 absolute top-9 shadow-[1px_1px_10px_rgba(0,0,0,.25)] transition-all duration-500"
                      : "w-56 2xl:w-fit z-50 absolute top-9 shadow-[1px_1px_10px_rgba(0,0,0,.25)] opacity-0 -translate-y-[50rem] transition-all duration-500"
                  }
                >
                  <div className="bg-[#07B235] h-[2px] 2xl:h-[5px] absolute top-0 right-0 left-0 text-center w-full"></div>
                  <ul className="px-3 py-1 bg-white">
                    <li
                      className="flex items-center justify-between py-3 relative"
                      onMouseEnter={clickEntershowslide11}
                      onMouseLeave={clickoutshowslide11}
                    >
                      <Link to="/" className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">نمونه کار گرافیک</Link>
                      <MdKeyboardArrowLeft />
                      <div
                        onMouseEnter={clickEntershowslide11}
                        className={
                          showSlide11
                            ? "absolute bg-white 2xl:-left-[25rem] -left-[16rem] -top-2 px-7 py-3 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex flex-col gap-y-2 items-center justify-center transition-all duration-500"
                            : "absolute bg-white 2xl:-left-[25rem] -left-[16rem] -top-2 px-7 py-3 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex flex-col gap-y-2 items-center justify-center opacity-0 -translate-y-[50rem] transition-all duration-500"
                        }
                      >
                        <Link to="/MotionGraphics" className="px-4 py-1">
                          <p className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">نمونه کار موشن گرافیک</p>
                        </Link>
                        <Link to="/UI_UX" className="px-4 py-1">
                          <p className="2xl:text-base font-[shabnamMedium] text-[#171717] text-sm">نمونه کار UI/UX</p>
                        </Link>
                        <Link to="/Brochure" className="px-4 py-1">
                          <p className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">نمونه کار بروشور</p>
                        </Link>
                        <Link to="/Poster" className="px-4 py-1">
                          <p className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">نمونه کار پوستر</p>
                        </Link>
                        <Link to="/Catalog" className="px-4 py-1">
                          <p className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">نمونه کار کاتالوگ</p>
                        </Link>
                        <Link to="/BusinessCard" className="px-4 py-1">
                          <p className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">نمونه کار کارت ویزیت</p>
                        </Link>
                        <Link to="/Logo" className="px-4 py-1">
                          <p className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">نمونه کار لوگو</p>
                        </Link>
                      </div>
                    </li>
                    <Link to="/Premiere">
                      <li className="flex items-center justify-start py-3">
                        <p className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">نمونه کار پریمیر</p>
                      </li>
                    </Link>
                    <Link>
                      <li
                        className="flex items-center justify-between py-3 relative"
                        onMouseEnter={clickEntershowslide12}
                        onMouseLeave={clickoutshowslide12}
                      >
                        <p className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">نمونه کار طراحی سایت</p>
                        <MdKeyboardArrowLeft />
                        <div
                          onMouseEnter={clickEntershowslide12}
                          className={
                            showSlide12
                              ? "absolute bg-white -left-[12.2rem] -top-2 px-7 py-2 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex flex-col gap-y-2 items-center justify-center transition-all duration-500"
                              : "absolute bg-white -left-[12.2rem] -top-2 px-7 py-2 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex flex-col gap-y-2 items-center justify-center opacity-0 -translate-y-[50rem] transition-all duration-500"
                          }
                        >
                          <Link className="px-4 py-1" to="/WebsiteDesignPortfolio">
                            <p className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">PHP (Laravel)</p>
                          </Link>
                        </div>
                      </li>
                    </Link>
                    <Link to="/Aplication">
                      <li className="flex items-center justify-between py-3">
                        <p className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">نمونه کار اپلیکیشن</p>
                      </li>
                    </Link>
                    <Link to="/Seo">
                      <li className="flex items-center justify-between py-3">
                        <p className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">نمونه کار سئو</p>
                      </li>
                    </Link>
                    <Link to="/Voicing">
                      <li className="flex items-center justify-between py-3">
                        <p className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">نمونه کار تدوین و صدا گذاری</p>
                      </li>
                    </Link>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/LoginLearn" className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">آموزش ورود</Link>
              </li>
              <li>
                <Link to="/recruitment" className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">استخدام</Link>
              </li>
              <li
                className="flex items-center gap-x-1 relative"
                onMouseEnter={clickEntershowslide3}
                onMouseLeave={clickoutshowslide3}
              >
                <Link className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">خدمات ما</Link>
                <RiArrowDownSLine />
                <div
                  onMouseEnter={clickEntershowslide3}
                  className={
                    showSlide3
                      ? "w-64 2xl:w-fit z-50 absolute top-9 transition-all duration-500"
                      : "w-64 2xl:w-fit z-50 absolute top-9 opacity-0 -translate-y-[50rem] transition-all duration-500"
                  }
                >
                  <ul className="px-5 py-3 bg-white  w-fit flex shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex-col items-start gap-2" style={{borderTop:'2px solid #57C053'}}>
                    <Link to="/services/فروش-سایت-اختصاصی-و-اقتصادی">
                      <li className="flex items-center justify-start py-1">
                        <p className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">فروش سایت اختصاصی و اقتصادی</p>
                      </li>
                    </Link>
                    <Link to="/services/فروش-قالب-سایت">
                      <li className="flex items-center justify-start py-1">
                        <p className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">فروش قالب سایت</p>
                      </li>
                    </Link>
                    <Link to="/services/طراحی-سایت-اختصاصی">
                      <li className="flex items-center justify-start py-1">
                        <p className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">طراحی سایت اختصاصی</p>
                      </li>
                    </Link>
                    <Link to="/services/خدمات-سئو-وب-سایت">
                      <li className="flex items-center justify-start py-1">
                        <p className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">خدمات وبسایت و سئو وب سایت</p>
                      </li>
                    </Link>
                    <Link to="/services/خدمات-کسب-و-کار">
                      <li className="flex items-center justify-start py-1">
                        <p className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">خدمات کسب و کار</p>
                      </li>
                    </Link>
                    <Link to="/services/خدمات-شبکه-های-اجتماعی">
                      <li className="flex items-center justify-start py-1">
                        <p className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">خدمات شبکه های اجتماعی</p>
                      </li>
                    </Link>
                    <Link to="/services/موشن-گرافیک">
                      <li className="flex items-center justify-start py-1">
                        <p className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">موشن گرافیک</p>
                      </li>
                    </Link>
                    <Link to="/services/تدوین-پروپوزال">
                      <li className="flex items-center justify-start py-1">
                        <p className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">تدوین پروپوزال</p>
                      </li>
                    </Link>
                    <Link to="/services/اپلیکیشن-موبایل">
                      <li className="flex items-center justify-start py-1">
                        <p className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">اپلیکیشن موبایل</p>
                      </li>
                    </Link>
                    <Link to="/services/خدمات-پریمیر-و-تدوین-فیلم">
                      <li className="flex items-center justify-start py-1">
                        <p className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">خدمات پریمیر، تدوین فیلم</p>
                      </li>
                    </Link>
                    <Link to='/services/خدمات-گرافیک'>
                      <li className="flex items-center justify-between py-1 relative">
                        <span className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">خدمات گرافیک</span>
                      </li>
                    </Link>
                    <Link to='/services/خدمات-تدوین-صدا-و-صدا-گذاری'>
                      <li className="flex items-center justify-between py-1 relative">
                        <span className="2xl:text-base text-[#171717] font-[shabnamMedium] text-sm">خدمات تدوین صدا و صداگذاری</span>
                      </li>
                    </Link>
                  </ul>
                </div>
              </li>
            </ul>
            <div className="flex items-center justify-center xl:gap-x-3 lg:gap-x-3">
              <div className="bg-[#57C053] hover:bg-[#62d15e] transition-all duration-300 xl:px-3 text-white flex flex-row-reverse px-1 py-2 rounded-md items-center justify-center gap-x-2" style={{boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>
                <Link>
                  <p className="text-sm font-[shabnamMedium] tracking-tight">فروشنده باشید</p>
                </Link>
                <FaSpa className="text-base" />
              </div>
              {
                loginStatus
                ?
                <></>
                :
                <div className="flex flex-row-reverse items-center justify-center py-2 px-1 xl:px-3 rounded-md bg-[#57C053] hover:bg-[#62d15e] text-white gap-x-2" style={{boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>
                <Link to={'/login'}>
                  <p className="text-sm font-[shabnamMedium] tracking-tight">ورود و عضویت</p>
                </Link>
                <BsPerson className="text-base" />
              </div>
              }
            </div>
            <div className="flex items-center justify-center flex-row gap-2">
              <div className="relative" onMouseEnter={clickEntershowslide4} onMouseLeave={clickoutshowslide4}>
                <Link>
                  <AiOutlineHeart className="text-[#57C053] text-3xl hover:text-[#62d15e]" />
                </Link>
                <div
                  onMouseEnter={clickEntershowslide4}
                  className={
                    showSlide4
                      ? "container z-10 bg-white w-96 px-5 mx-auto absolute shadow-[1px_1px_10px_rgba(0,0,0,.25)] py-6 top-12 -right-[25rem] transition-all duration-700"
                      : "container z-10 bg-white w-96 px-5 mx-auto absolute opacity-0 -right-[25rem] -translate-y-[50rem] transition-all duration-700"
                  }
                >
                  <p className="pb-3 text-center text-[0.9rem]">برای مشاهده لیست علاقه مندی ها وارد شوید</p>
                  <Link>
                    <p className="bg-[#50BCB1] text-white tracking-tighter font-bold px-3 py-1 text-center rounded-md">
                      مشاهده محصولات فروشگاه
                    </p>
                  </Link>
                </div>
              </div>
              <div className="flex relative" onMouseEnter={clickEntershowslide5} onMouseLeave={clickoutshowslide5}>
                <Link>
                  <HiOutlineShoppingCart className="text-[#57C053] text-3xl hover:text-[#62d15e]" />
                </Link>
                <span className="absolute -top-3 -left-1 rounded-full w-5 h-5 flex items-center justify-center bg-[#57C053] text-white">
                  0
                </span>
                <div
                  className={
                    showSlide5
                      ? "container z-10 bg-white 2xl:py-[2rem] flex flex-col gap-3 justify-around w-80 h-28 px-5 mx-auto absolute shadow-[1px_1px_10px_rgba(0,0,0,.25)] top-10 -right-[22rem] transition-all duration-700"
                      : "container z-10 bg-white 2xl:py-[2rem] flex flex-col gap-3  w-80 h-28 px-5 mx-auto absolute opacity-0 -right-[22rem] -translate-y-[50rem] top-10 transition-all duration-700"
                  }
                >
                  <div className="flex justify-between items-center pt-2">
                    <p>0 مورد</p>
                    <Link>
                      <p className="bg-[#22A6F2] text-white tracking-tighter font-bold text-sm px-3 py-1 text-center rounded-sm">
                        مشاهده سبد خرید
                      </p>
                    </Link>
                  </div>
                  <div className="text-center py-3">هیچ محصولی در سبد خرید نیست.</div>
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
