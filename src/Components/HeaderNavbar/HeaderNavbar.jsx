import React, { useState } from 'react';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

function HeaderNavbar() {
    const [showSlide11, setShowSlide11] = useState(false);
    const [showSlide12, setShowSlide12] = useState(false);
    const [showSlide2, setShowSlide2] = useState(false);
    const [showSlide3, setShowSlide3] = useState(false);

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
  return (
    <ul className="flex justify-start items-baseline gap-x-5 2xl:gap-x-10 lg:whitespace-nowrap">
        <li>
        <Link to="/" className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">صفحه اصلی</Link>
        </li>
        <li className="flex items-center gap-x-1 relative">
        <Link to={"/shop"} className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">محصولات</Link>
        </li>
        <li>
        <Link to="/order" className="font-[shabnamMedium] text-[#171717] text-sm cursor-pointer">ثبت سفارش</Link>
        </li>
        <li>
        <Link to={'/articles'} className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">بلاگ</Link>
        </li>
        <li
        className="flex items-center gap-x-1 relative"
        onMouseEnter={clickEntershowslide2}
        onMouseLeave={clickoutshowslide2}
        >
        <span className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">نمونه کارها</span>
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
                <span className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">نمونه کار گرافیک</span>
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
                    <p className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">نمونه کار موشن گرافیک</p>
                </Link>
                <Link to="/workSamples/graphic/UI_UX" className="px-4 py-1">
                    <p className="font-[shabnamMedium] text-[#171717] text-sm cursor-pointer">نمونه کار UI/UX</p>
                </Link>
                <Link to="/workSamples/graphic/Brochure" className="px-4 py-1">
                    <p className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">نمونه کار بروشور</p>
                </Link>
                <Link to="/workSamples/graphic/Poster" className="px-4 py-1">
                    <p className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">نمونه کار پوستر</p>
                </Link>
                <Link to="/workSamples/graphic/Catalog" className="px-4 py-1">
                    <p className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">نمونه کار کاتالوگ</p>
                </Link>
                <Link to="/workSamples/graphic/BusinessCard" className="px-4 py-1">
                    <p className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">نمونه کار کارت ویزیت</p>
                </Link>
                <Link to="/workSamples/graphic/Logo" className="px-4 py-1">
                    <p className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">نمونه کار لوگو</p>
                </Link>
                </div>
            </li>
            <li>
                <Link to="/workSamples/Premiere"  className="flex items-center justify-start py-2">
                <p className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">نمونه کار پریمیر</p>
                </Link>
            </li>
            <li
                className="flex items-center justify-between py-2 relative"
                onMouseEnter={clickEntershowslide12}
                onMouseLeave={clickoutshowslide12}
                >
                <span className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">نمونه کار طراحی سایت</span>
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
                    <p className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">PHP (Laravel)</p>
                    </Link>
                </div>
            </li>
            <li>
                <Link to="/workSamples/Aplication" className="flex items-center justify-between py-2">
                <p className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">نمونه کار اپلیکیشن</p>
                </Link>
            </li>
            <li>
                <Link to="/workSamples/Seo" className="flex items-center justify-between py-2">
                <p className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">نمونه کار سئو</p>
                </Link>
            </li>
            <li>
                <Link to="/workSamples/Voicing" className="flex items-center justify-between py-2">
                <p className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">نمونه کار تدوین و صدا گذاری</p>
                </Link>
            </li>
            </ul>
        </div>
        </li>
        <li>
        <Link to="/LoginLearn" className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">آموزش ورود</Link>
        </li>
        <li>
        <Link to="/recruitment" className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">استخدام</Link>
        </li>
        <li
        className="flex items-center gap-x-1 relative"
        onMouseEnter={clickEntershowslide3}
        onMouseLeave={clickoutshowslide3}
        >
        <span className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">خدمات ما</span>
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
                <span className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">فروش سایت اختصاصی و اقتصادی</span>
            </Link>
            </li>
            <li className="flex items-center justify-start py-1">
            <Link to="/services/فروش-قالب-سایت">
                <span className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">فروش قالب سایت</span>
            </Link>
            </li>
            <li className="flex items-center justify-start py-1">
            <Link to="/services/طراحی-سایت-اختصاصی">
                <span className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">طراحی سایت اختصاصی</span>
            </Link>
            </li>
            <li className="flex items-center justify-start py-1">
            <Link to="/services/خدمات-سئو-وب-سایت">
                <span className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">خدمات وب سایت و سئو وب سایت</span>
            </Link>
            </li>
            <li className="flex items-center justify-start py-1">
            <Link to="/services/خدمات-کسب-و-کار">
                <span className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">خدمات کسب و کار</span>
            </Link>
            </li>
            <li className="flex items-center justify-start py-1">
            <Link to="/services/خدمات-شبکه-های-اجتماعی">
                <span className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">خدمات شبکه های اجتماعی</span>
            </Link>
            </li>
            <li className="flex items-center justify-start py-1">
            <Link to="/services/موشن-گرافیک">
                <span className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">موشن گرافیک</span>
            </Link>
            </li>
            <li className="flex items-center justify-start py-1">
            <Link to="/services/تدوین-پروپوزال">
                <span className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">تدوین پروپوزال</span>
            </Link>
            </li>
            <li className="flex items-center justify-start py-1">
            <Link to="/services/اپلیکیشن-موبایل">
                <span className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">اپلیکیشن موبایل</span>
            </Link>
            </li>
            <li className="flex items-center justify-start py-1">
            <Link to="/services/خدمات-پریمیر-و-تدوین-فیلم">
                <span className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">خدمات پریمیر و تدوین فیلم</span>
            </Link>
            </li>
            <li className="flex items-center justify-start py-1">
            <Link to='/services/خدمات-گرافیک'>
                <span className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">خدمات گرافیک</span>
            </Link>
            </li>
            <li className="flex items-center justify-start py-1">
            <Link to='/services/خدمات-تدوین-صدا-و-صدا-گذاری'>
                <span className="text-[#171717] font-[shabnamMedium] text-sm cursor-pointer">خدمات تدوین صدا و صدا گذاری</span>
            </Link>
            </li>
            </ul>
        </div>
        </li>
  </ul>
  )
}

export default HeaderNavbar