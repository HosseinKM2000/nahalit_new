import React, { useState } from "react";
import { BsWordpress } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import { FaWordpressSimple } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import { FaSpa } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
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
  const [showSlide13, setShowSlide13] = useState(false);
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
  const clickEntershowslide13 = () => {
    setShowSlide13(true);
  };
  const clickoutshowslide13 = () => {
    setShowSlide13(false);
  };
  return (
    <>
      <div className="bg-[#07B235] h-1"></div>
      <div className="min-w-full">
        <div className="flex justify-center mt-3 text-center mx-auto gap-x-12 2xl:text-[1.5rem]">
          <p className="font-[shabnamLight]  leading-10 text-zinc-400">
            آدرس : تهران میدان فردوسی خیابان ایرانشهر بین سمیه و طالقانی مجتمع تجاری میلاد واحد 9
          </p>
          <p className="font-[shabnamLight] leading-10 text-zinc-400">پشتیبانی 24 ساعته : 02188867940 – 09927674217</p>
        </div>
        <div className="flex justify-center mt-10">
          <Link>
            <div className="border-l-2 gap-1 border-dotted border-[#d7f0d6] px-4 py-3 flex flex-col items-center justify-center">
              <BsWordpress className="text-[2.5rem] text-[#57C053] hover:text-[#6ade66] transition-all duration-300" />
              <p className="text-stone-400 2xl:text-[1.5rem] font-[shabnamthin] tracking-tighter">قالب وردپرس</p>
            </div>
          </Link>
          <Link>
            <div className="border-l-2 gap-1 border-dotted border-[#d7f0d6] px-4 py-3 flex flex-col items-center justify-center">
              <AiFillHtml5 className="text-[2.5rem] text-[#57C053] hover:text-[#6ade66] transition-all duration-300" />
              <p className="text-stone-400 2xl:text-[1.5rem] font-[shabnamThin] tracking-tighter">قالب html</p>
            </div>
          </Link>
          <Link>
            <div className="border-l-2 gap-1 border-dotted border-[#d7f0d6] px-4 py-3 flex flex-col items-center justify-center">
              <FaWordpressSimple className="text-[2.5rem] text-[#57C053] hover:text-[#6ade66] transition-all duration-300" />
              <p className="text-stone-400 2xl:text-[1.5rem] font-[shabnamThin] tracking-tighter">پلاگین وردپرس</p>
            </div>
          </Link>
          <Link>
            <div className="px-4 py-3 flex gap-1 flex-col items-center justify-center">
              <FaAndroid className="text-[2.7rem] text-[#57C053]  hover:text-[#6ade66] transition-all duration-300" />
              <p className="text-stone-400 2xl:text-[1.5rem] font-[shabnamThin] tracking-tighter">محصولات اپلیکیشن</p>
            </div>
          </Link>
        </div>
        <div className="bg-[#eee] h-[1px] text-center mt-8"></div>
        <div className="flex justify-center mt-1 font-[shabnamMedium]">
          <div className="text-[#7c7c7c] 2xl:text-2l text-sm flex 2xl:gap-x-[1rem] gap-x-[1rem] px-2 2xl:gap-16">
            <ul className="flex justify-start items-center gap-x-4 2xl:gap-x-10 lg:whitespace-nowrap">
              <li className="2xl:text-2xl text-stone-500 text-sm">
                <Link to="/">صفحه اصلی</Link>
              </li>
              <li
                className="flex items-center gap-x-1 relative"
                onMouseEnter={clickEntershowslide}
                onMouseLeave={clickoutshowslide}
              >
                <li className="2xl:text-2xl text-stone-500 text-sm"><Link>محصولات</Link></li>
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
                          <p className="2xl:text-2xl text-stone-500 text-sm font-[shabnamMedium]">سایت های آماده</p>
                        </Link>
                        <div
                          onMouseEnter={clickEntershowslide6}
                          className={
                            showSlide6
                              ? "absolute bg-white -left-[19rem] -top-4 px-7 py-4 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex items-center justify-center transition-all duration-500"
                              : "absolute bg-white -left-[19rem] -top-4 px-7 py-4 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex items-center justify-center opacity-0 -translate-y-[50rem] transition-all duration-500"
                          }
                        >
                          <Link className="2xl:text-2xl text-stone-500 text-sm">سایت آماده لاراول</Link>
                        </div>
                      </div>
                      <MdKeyboardArrowLeft />
                    </li>
                    <li
                      className="flex relative items-center justify-between py-3"
                      onMouseEnter={clickEntershowslide7}
                      onMouseLeave={clickoutshowslide7}
                    >
                      <Link className="2xl:text-2xl text-stone-500 text-sm">پلاگین وردپرس</Link>
                      <MdKeyboardArrowLeft />
                      <div
                        onMouseEnter={clickEntershowslide7}
                        className={
                          showSlide7
                            ? "absolute bg-white -left-[12.5rem] -top-2 px-7 py-4 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex flex-col gap-y-2 items-center justify-center transition-all duration-500"
                            : "absolute bg-white -left-[12.5rem] -top-2 px-7 py-4 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex flex-col gap-y-2 items-center justify-center opacity-0 -translate-y-[50rem] transition-all duration-500"
                        }
                      >
                        <Link className="px-4 py-1">
                          <p className="2xl:text-2xl text-stone-500 font-[shabnamMedium] text-sm">پلاگین امنیتی</p>
                        </Link>
                        <Link className="px-4 py-1">
                          <p className="2xl:text-2xl text-stone-500 font-[shabnamMedium] text-sm">پلاگین مدیریتی</p>
                        </Link>
                        <Link className="px-4 py-1">
                          <p className="2xl:text-2xl text-stone-500 font-[shabnamMedium] text-sm">پلاگین کاربردی</p>
                        </Link>
                      </div>
                    </li>
                    <li
                      className="flex items-center justify-between py-3 relative"
                      onMouseEnter={clickEntershowslide8}
                      onMouseLeave={clickoutshowslide8}
                    >
                      <Link className="2xl:text-2xl text-stone-500 text-sm">قالب html</Link>
                      <MdKeyboardArrowLeft />
                      <div
                        onMouseEnter={clickEntershowslide8}
                        className={
                          showSlide8
                            ? "absolute bg-white -left-[12.7rem] -top-2 px-7 py-4 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex flex-col gap-y-2 items-center justify-center transition-all duration-500"
                            : "absolute bg-white -left-[12.7rem] -top-2 px-7 py-4 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex flex-col gap-y-2 items-center justify-center opacity-0 -translate-y-[50rem] transition-all duration-500"
                        }
                      >
                        <Link className="px-4 py-1">
                          <p className="2xl:text-2xl text-stone-500 font-[shabnamMedium] text-sm">قالب شخصی</p>
                        </Link>
                        <Link className="px-4 py-1">
                          <p className="2xl:text-2xl text-stone-500 font-[shabnamMedium] text-sm">قالب شرکتی</p>
                        </Link>
                        <Link className="px-4 py-1">
                          <p className="2xl:text-2xl text-stone-500 font-[shabnamMedium] text-sm">قالب فروشگاهی</p>
                        </Link>
                        <Link className="px-4 py-1">
                          <p className="2xl:text-2xl text-stone-500 font-[shabnamMedium] text-sm">قالب خبری</p>
                        </Link>
                      </div>
                    </li>
                    <li
                      className="flex items-center justify-between py-3 relative"
                      onMouseEnter={clickEntershowslide9}
                      onMouseLeave={clickoutshowslide9}
                    >
                      <Link className="2xl:text-2xl text-stone-500 text-sm">اپلیکیشن موبایل</Link>
                      <MdKeyboardArrowLeft />
                      <div
                        onMouseEnter={clickEntershowslide9}
                        className={
                          showSlide9
                            ? "absolute bg-white -left-[13.3rem] -top-2 px-7 py-4 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex flex-col gap-y-2 items-center justify-center transition-all duration-500"
                            : "absolute bg-white -left-[13.3rem] -top-2 px-7 py-4 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex flex-col gap-y-2 items-center justify-center opacity-0 -translate-y-[50rem] transition-all duration-500"
                        }
                      >
                        <Link className="px-4 py-1">
                          <p className="2xl:text-2xl text-stone-500 font-[shabnamMedium] text-sm">اپلیکیشن اندروید</p>
                        </Link>
                      </div>
                    </li>
                    <li
                      className="flex items-center justify-between py-3 relative"
                      onMouseEnter={clickEntershowslide10}
                      onMouseLeave={clickoutshowslide10}
                    >
                      <Link className="2xl:text-2xl text-stone-500 text-sm">اسکریپت ها</Link>
                      <MdKeyboardArrowLeft />
                      <div
                        onMouseEnter={clickEntershowslide10}
                        className={
                          showSlide10
                            ? "absolute bg-white -left-[12.5rem] -top-2 px-7 py-4 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex flex-col gap-y-2 items-center justify-center transition-all duration-500"
                            : "absolute bg-white -left-[12.5rem] -top-2 px-7 py-4 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex flex-col gap-y-2 items-center justify-center opacity-0 -translate-y-[50rem] transition-all duration-500"
                        }
                      >
                        <Link className="px-4 py-1">
                          <p className="2xl:text-2xl font-[shabnamMedium] text-stone-500 text-sm">اسکریپت لاراول</p>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/order" className="2xl:text-2xl text-stone-500 text-sm">ثبت سفارش</Link>
              </li>
              <li>
                <Link className="2xl:text-2xl text-stone-500 text-sm">بلاگ</Link>
              </li>

              <li
                className="flex items-center gap-x-1 relative"
                onMouseEnter={clickEntershowslide2}
                onMouseLeave={clickoutshowslide2}
              >
                <Link to="/" className="2xl:text-2xl text-stone-500 text-sm">نمونه کارها</Link>
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
                  <ul className="p-5 bg-white">
                    <li
                      className="flex items-center justify-between py-3 relative"
                      onMouseEnter={clickEntershowslide11}
                      onMouseLeave={clickoutshowslide11}
                    >
                      <Link to="/" className="2xl:text-xl text-stone-500 text-sm">نمونه کار گرافیک</Link>
                      <MdKeyboardArrowLeft />
                      <div
                        onMouseEnter={clickEntershowslide11}
                        className={
                          showSlide11
                            ? "absolute bg-white 2xl:-left-[25rem] -left-[16rem] -top-2 px-7 py-4 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex flex-col gap-y-2 items-center justify-center transition-all duration-500"
                            : "absolute bg-white 2xl:-left-[25rem] -left-[16rem] -top-2 px-7 py-4 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex flex-col gap-y-2 items-center justify-center opacity-0 -translate-y-[50rem] transition-all duration-500"
                        }
                      >
                        <Link to="/MotionGraphics" className="px-4 py-1">
                          <p className="2xl:text-xl text-stone-500 font-[shabnamMedium] text-sm">نمونه کار موشن گرافیک</p>
                        </Link>
                        <Link to="/UI_UX" className="px-4 py-1">
                          <p className="2xl:text-xl font-[shabnamMedium] text-stone-500 text-sm">نمونه کار UI/UX</p>
                        </Link>
                        <Link to="/Brochure" className="px-4 py-1">
                          <p className="2xl:text-xl text-stone-500 font-[shabnamMedium] text-sm">نمونه کار بروشور</p>
                        </Link>
                        <Link to="/Poster" className="px-4 py-1">
                          <p className="2xl:text-xl text-stone-500 font-[shabnamMedium] text-sm">نمونه کار پوستر</p>
                        </Link>
                        <Link to="/Catalog" className="px-4 py-1">
                          <p className="2xl:text-xl text-stone-500 font-[shabnamMedium] text-sm">نمونه کار کاتالوگ</p>
                        </Link>
                        <Link to="/BusinessCard" className="px-4 py-1">
                          <p className="2xl:text-xl text-stone-500 font-[shabnamMedium] text-sm">نمونه کار کارت ویزیت</p>
                        </Link>
                        <Link to="/Logo" className="px-4 py-1">
                          <p className="2xl:text-xl text-stone-500 font-[shabnamMedium] text-sm">نمونه کار لوگو</p>
                        </Link>
                      </div>
                    </li>
                    <Link to="/Premiere">
                      <li className="flex items-center justify-start py-3">
                        <p className="2xl:text-xl text-stone-500 font-[shabnamMedium] text-sm">نمونه کار پریمیر</p>
                      </li>
                    </Link>
                    <Link>
                      <li
                        className="flex items-center justify-between py-3 relative"
                        onMouseEnter={clickEntershowslide12}
                        onMouseLeave={clickoutshowslide12}
                      >
                        <p className="2xl:text-xl text-stone-500 font-[shabnamMedium] text-sm">نمونه کار طراحی سایت</p>
                        <MdKeyboardArrowLeft />
                        <div
                          onMouseEnter={clickEntershowslide12}
                          className={
                            showSlide12
                              ? "absolute bg-white -left-[12.2rem] -top-2 px-7 py-4 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex flex-col gap-y-2 items-center justify-center transition-all duration-500"
                              : "absolute bg-white -left-[12.2rem] -top-2 px-7 py-4 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex flex-col gap-y-2 items-center justify-center opacity-0 -translate-y-[50rem] transition-all duration-500"
                          }
                        >
                          <Link className="px-4 py-1" to="/WebsiteDesignPortfolio">
                            <p className="2xl:text-2xl text-stone-500 font-[shabnamMedium] text-sm">PHP (Laravel)</p>
                          </Link>
                        </div>
                      </li>
                    </Link>
                    <Link to="/Aplication">
                      <li className="flex items-center justify-between py-3">
                        <p className="2xl:text-xl text-stone-500 font-[shabnamMedium] text-sm">نمونه کار اپلیکیشن</p>
                      </li>
                    </Link>
                    <Link to="/Seo">
                      <li className="flex items-center justify-between py-3">
                        <p className="2xl:text-xl text-stone-500 font-[shabnamMedium] text-sm">نمونه کار سئو</p>
                      </li>
                    </Link>
                    <Link to="/Voicing">
                      <li className="flex items-center justify-between py-3">
                        <p className="2xl:text-xl text-stone-500 font-[shabnamMedium] text-sm">نمونه کار تدوین و صدا گذاری</p>
                      </li>
                    </Link>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/LoginLearn" className="2xl:text-2xl text-stone-500 text-sm">آموزش ورود</Link>
              </li>
              <li>
                <Link to="/recruitment" className="2xl:text-2xl text-stone-500 text-sm">استخدام</Link>
              </li>
              <li
                className="flex items-center gap-x-1 relative"
                onMouseEnter={clickEntershowslide3}
                onMouseLeave={clickoutshowslide3}
              >
                <Link className="2xl:text-2xl text-stone-500 text-sm">خدمات ما</Link>
                <RiArrowDownSLine />
                <div
                  onMouseEnter={clickEntershowslide3}
                  className={
                    showSlide3
                      ? "w-64 2xl:w-fit z-50 absolute top-9 shadow-[1px_1px_10px_rgba(0,0,0,.25)] transition-all duration-500"
                      : "w-64 2xl:w-fit z-50 absolute top-9 shadow-[1px_1px_10px_rgba(0,0,0,.25)] opacity-0 -translate-y-[50rem] transition-all duration-500"
                  }
                >
                  <div className="bg-[#07B235] h-[2px] 2xl:h-[5px] w-full absolute top-0 right-0 left-0 text-center"></div>
                  <ul className="px-5 py-3 bg-white  w-fit flex flex-col items-start 2xl:gap-3">
                    <Link to="/EecoSaleWeb">
                      <li className="flex items-center justify-start py-1">
                        <p className="2xl:text-xl text-stone-500 font-[shabnamMedium] text-sm">فروش سایت اختصاصی و اقتصادی</p>
                      </li>
                    </Link>
                    <Link to="/SsaleWeb">
                      <li className="flex items-center justify-start py-1">
                        <p className="2xl:text-xl text-stone-500 font-[shabnamMedium] text-sm">فروش قالب سایت</p>
                      </li>
                    </Link>
                    <Link to="/SsaleWebExclusive">
                      <li className="flex items-center justify-start py-1">
                        <p className="2xl:text-xl text-stone-500 font-[shabnamMedium] text-sm">طراحی سایت اختصاصی</p>
                      </li>
                    </Link>
                    <Link to="/Sseo">
                      <li className="flex items-center justify-start py-1">
                        <p className="2xl:text-xl text-stone-500 font-[shabnamMedium] text-sm">خدمات وبسایت و سئو وب سایت</p>
                      </li>
                    </Link>
                    <Link to="/SworkService">
                      <li className="flex items-center justify-start py-1">
                        <p className="2xl:text-xl text-stone-500 font-[shabnamMedium] text-sm">خدمات کسب و کار</p>
                      </li>
                    </Link>
                    <Link to="/SsocialMedia">
                      <li className="flex items-center justify-start py-1">
                        <p className="2xl:text-xl text-stone-500 font-[shabnamMedium] text-sm">خدمات شبکه های اجتماعی</p>
                      </li>
                    </Link>
                    <Link to="/SmotionGhraphic">
                      <li className="flex items-center justify-start py-1">
                        <p className="2xl:text-xl text-stone-500 font-[shabnamMedium] text-sm">موشن گرافیک</p>
                      </li>
                    </Link>
                    <Link to="/Sproposal">
                      <li className="flex items-center justify-start py-1">
                        <p className="2xl:text-xl text-stone-500 font-[shabnamMedium] text-sm">تدوین پروپوزال</p>
                      </li>
                    </Link>
                    <Link to="/S_Aplication">
                      <li className="flex items-center justify-start py-1">
                        <p className="2xl:text-xl text-stone-500 font-[shabnamMedium] text-sm">اپلیکیشن موبایل</p>
                      </li>
                    </Link>
                    <Link to="/Spremier">
                      <li className="flex items-center justify-start py-1">
                        <p className="2xl:text-xl text-stone-500 font-[shabnamMedium] text-sm">خدمات پریمیر، تدوین فیلم</p>
                      </li>
                    </Link>
                    <div>
                      <li
                        className="flex items-center justify-between py-1 relative"
                        onMouseEnter={clickEntershowslide13}
                        onMouseLeave={clickoutshowslide13}
                      >
                        <Link to="/SsoundEditing" className="2xl:text-2xl text-stone-500 text-sm">خدمات تدوین صدا و صداگذاری</Link>
                        <MdKeyboardArrowLeft />
                        <div
                          onMouseEnter={clickEntershowslide13}
                          className={
                            showSlide13
                              ? "absolute bg-white -left-[12.5rem] -top-2 px-7 py-1 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex flex-col gap-y-2 items-center justify-center transition-all duration-500"
                              : "absolute bg-white -left-[12.5rem] -top-2 px-7 py-1 shadow-[1px_1px_10px_rgba(0,0,0,.25)] flex flex-col gap-y-2 items-center justify-center opacity-0 -translate-y-[50rem] transition-all duration-500"
                          }
                        >
                          <Link to="/Sgraphic" className="px-4 py-1">
                            <p className="2xl:text-2xl font-[shabnamMedium] text-stone-500 text-sm">خدمات گرافیکی</p>
                          </Link>
                        </div>
                      </li>
                    </div>
                  </ul>
                </div>
              </li>
            </ul>
            <div className="flex items-center justify-center xl:gap-x-3 lg:gap-x-3">
              <div className="bg-[#57C053] hover:bg-[#62d15e] transition-all duration-300 text-white flex flex-row-reverse px-1 py-3 rounded-md items-center justify-center gap-x-2">
                <Link>
                  <p className="text-md font-[shabnamMedium] tracking-tight">فروشنده باشید</p>
                </Link>
                <FaSpa className="text-xl" />
              </div>
              <div className="flex flex-row-reverse items-center justify-center py-3 px-1 rounded-md bg-[#57C053] hover:bg-[#62d15e] text-white gap-x-2">
                <Link>
                  <p className="text-md font-[shabnamMedium] tracking-tight">ورود و عضویت</p>
                </Link>
                <BsPerson className="text-xl" />
              </div>
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
                  <p className="pb-3 text-center">برای مشاهده لیست علاقه مندی ها وارد شوید</p>
                  <Link>
                    <p className="bg-[#50BCB1] text-white tracking-tighter font-semibold px-3 py-2 text-center rounded-md">
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
                      <p className="bg-[#57C053] text-white tracking-tighter font-semibold px-3 py-1 text-center rounded-md">
                        مشاهده سبد خرید
                      </p>
                    </Link>
                  </div>
                  <div className="text-center pb-1 font-bold">هیچ محصولی در سبد خرید نیست.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-slate-200 mt-8 h-[2px]"/>
      </div>
    </>
  );
};

export default Header;
