import React, { useState } from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFillBriefcaseFill, BsHeart, BsYoutube } from "react-icons/bs";
import { FaSeedling, FaServer, FaTelegramPlane } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import { RiSendBackward } from "react-icons/ri";
import { SiAparat } from "react-icons/si";
import { Link } from "react-router-dom";
import trustLogo from '../../assets/img/trustlogo.png';

const Footer = () => {
  const [Footer, setFooter] = useState(false);
  const SiteCreateOnEnterMouse = () => {
    setFooter(true);
  };
  const SiteCreateOnOutMouse = () => {
    setFooter(false);
  };
  return (
    <div className="text-[#ccc] footer-border border-black 2xl:justify-center left-0 bg-[#223621] whitespace-nowrap px-48 max-xl:px-0 mx-auto pt-5 -z-10 pb-8">
      <div className="container flex-wrap gap-12 mb-10 mx-auto 2xl:gap-11 2xl:justify-between 2xl:w-full flex items-start justify-center 2xl:text-2xl text-sm mt-24 max-xl:gap-y-12 tracking-tight">
        <div className="flex flex-col justify-center items-start gap-y-4">
          <RiSendBackward className="text-5xl text-white" />
          <Link className="font-[shabnamMedium] text-base" to="/">
            لینک های کمکی
          </Link>
          <div className="w-full h-[2px] bg-white"></div>
          <Link className="mt-5 tracking-tighter" to="/order">
            ثبت سفارش
          </Link>
          <Link to="/">فروشنده باشید</Link>
          <Link to="/">استخدام</Link>
          <Link to="/">حساب کاربری من</Link>
          <Link to="/">اخبار سایت نهال آی تی</Link>
        </div>
        <div className="flex flex-col justify-center gap-y-4">
          <BsFillBriefcaseFill className="text-5xl text-white" />
          <Link className="font-[shabnamMedium] text-base word-spa" to="/">
             خدمات اداری
          </Link>
          <div className="w-[70%] h-[2px] bg-white"></div>
          <Link className="mt-5 tracking-tighter" to="/">
            ایمیل مارکتینگ
          </Link>
          <Link to="/">پیامک انبوه</Link>
          <Link to="/">تولید محتوا</Link>
          <Link to="/">ربات شبکه های اجتماعی</Link>
        </div>
        <div className="flex flex-col justify-center gap-y-4">
          <FaSeedling className="text-5xl text-white" />
          <Link className="font-[shabnamMedium] text-base" to="/">
            خدمات تیم نهال آی تی
          </Link>
          <div className="w-full h-[2px] bg-white"></div>
          <Link className="mt-5 tracking-tighter" to="/">
            فروش سایت اختصاصی و اقتصادی
          </Link>
          <Link to="/">فروش قالب سایت</Link>
          <Link to="/">طراحی سایت اختصاصی</Link>
          <Link to="/">خدمات وبسایت و سئو وب سایت</Link>
          <Link to="/">خدمات کسب و کار</Link>
          <Link to="/">خدمات شبکه های اجتماعی</Link>
          <Link to="/">خدمات موشن گرافیک</Link>
        </div>
        <div className="flex flex-col justify-center gap-y-4">
          <FaSeedling className="text-5xl text-white" />
          <Link className="font-[shabnamMedium] text-base" to="/">
            خدمات تیم نهال آی تی
          </Link>
          <div className="w-[100%] h-[2px] bg-white"></div>
          <Link className="mt-5 tracking-tighter" to="/">
            خدمات گرافیک
          </Link>
          <Link to="/">تدوین پروپوزال و بیزنس پلن</Link>
          <Link to="/">خدمات اپلیکیشن موبایل</Link>
          <Link to="/">خدمات پریمیر و تدوین فیلم</Link>
          <Link to="/">خدمات تدوین صدا و صدا گذاری</Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-4">
          <BsHeart className="text-5xl text-white" />
          <p className="font-[shabnamBold] text-base">نماد اعتماد الکترونیکی</p>
          <div className="w-36 bg-transparent border_ border-2 border-white py-[0.5px]"></div>
          <span className="font-bold">جزو اتحادیه کسب و کار های مجازی</span>
          <img src={trustLogo} alt="trustLogo"/>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-6">
        <div className="flex items-center justify-center gap-x-5 mt-8">
          <Link>
            <FaTelegramPlane className="text-2xl hover:text-blue-500 transition-all duration-200 text-[#ccc]" title="telegram" />
          </Link>
          <Link>
            <AiOutlineInstagram className="text-2xl hover:text-rose-500 transition-all duration-200 text-[#ccc]" title="instagram" />
          </Link>
          <Link>
            <AiOutlineTwitter className="text-2xl hover:text-sky-500 transition-all duration-200 text-[#ccc]" title="twitter" />
          </Link>
          <Link>
            <BsYoutube className="text-2xl hover:text-red-500 transition-all duration-200 text-[#ccc]" title="youtube" />
          </Link>
          <Link>
            <SiAparat className="text-2xl hover:text-red-700 transition-all duration-200 text-[#ccc]" title="aparat" />
          </Link>
        </div>
        <div className="flex items-center justify-center gap-x-2">
          <FaServer className="text-[#57C053]" />
          <Link className="tracking-tighter">توسعه و پشتیبانی : بهینه سازان سرزمین هوشمند</Link>
        </div>
      </div>
      <div className="w-[80%] h-[1px] bg-[#949494] mx-auto mt-10"></div>
      <div className="container mx-auto mt-10 tracking-tighter flex justify-around flex-wrap items-center">
        <ul className="flex items-center justify-start flex-wrap px-3">
          <li>
            <Link className="hover:bg-[#4CA449] px-3 py-2 rounded-md transition-all duration-300 text-[#c5c3c3]">درباره ما</Link>
          </li>
          <li>
            <Link to="/ContactUs" className="hover:bg-[#4CA449] px-3 py-2 rounded-md transition-all duration-300 text-[#c5c3c3]">
              تماس با ما
            </Link>
          </li>
          <li>
            <Link className="hover:bg-[#4CA449] px-3 py-2 rounded-md transition-all duration-300 text-[#c5c3c3]">وبلاگ</Link>
          </li>
          <li>
            <Link className="hover:bg-[#4CA449] px-3 py-2 rounded-md transition-all duration-300 text-[#c5c3c3]">
              حساب کاربری من
            </Link>
          </li>
          <li>
            <Link className="hover:bg-[#4CA449] px-3 py-2 rounded-md transition-all duration-300 text-[#c5c3c3]">فروشگاه</Link>
          </li>
        </ul>
        <div className="flex items-center justify-center mt-3 sm:mt-0 gap-x-1 mr-10">
          <HiCode
            onMouseEnter={SiteCreateOnEnterMouse}
            onMouseLeave={SiteCreateOnOutMouse}
            className={
              Footer
                ? "bg-[#57C053] text-white w-8 h-8 p-1 rounded-lg translate-x-12 transition-all duration-500"
                : "bg-[#57C053] text-white w-8 h-8 p-1 rounded-lg transition-all duration-500"
            }
          />
          <p
            onMouseEnter={SiteCreateOnEnterMouse}
            onMouseLeave={SiteCreateOnOutMouse}
            className={Footer ? "translate-x-12 transition-all duration-500" : "opacity-0  transition-all duration-500"}
          >
            توسعه : سرزمین هوشمند
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
