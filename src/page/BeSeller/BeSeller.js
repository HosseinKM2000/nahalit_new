import React from "react";
import { Link } from "react-router-dom";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ResponseHeader from "../../Components/ResponseHeader/ResponseHeader";
import { useSelector } from "react-redux";
import NotLogined from "../../Components/NotLogined/NotLogined";

const BeSeller = () => {
  const loginStatus = useSelector(state => state.authentication.loginStatus);
  return (
    <div>
      <header>
        <div className="max-lg:hidden">
          <Header />
        </div>
        <div className="lg:hidden">
          <ResponseHeader />
        </div>
      </header>
      {
        loginStatus
        ?
        <div className="bg-[#f5f5f9] w-full">
        <div className="container mx-auto">
          <div className="flex-col py-12 flex w-full 2xl:px-48">
            <div className="flex flex-col gap-2 items-center md:items-start">
              <h3 className="font-[shabnamBold]">در نهال آیتی فروشنده شوید :</h3>
              <span className="font-[shabnamLight] text-center">شما می توانید با عضویت در بخش فروشندگان سایت نهال آیتی شروع به کسب در آمد کنید .</span>
            </div>
            <div className="w-full px-3 mt-10">
              <form className="flex flex-col justify-center w-full gap-y-3">
                <label htmlFor="FamilyRecruitment" className="font-[shabnamBold]">
                  نام  <span className="text-red-500">*</span>
                </label>
                <input id="NameRecruitment" className="py-2 border border-solid border-[#c7c7c7] outline-none px-2" type="text" />
                <label htmlFor="FamilyRecruitment" className="font-[shabnamBold]">
                  نام خانوادگی <span className="text-red-500">*</span>
                </label>
                <input id="NameRecruitment" className="py-2 border border-solid border-[#c7c7c7] outline-none px-2" type="text" />
                <label htmlFor="EmailRecruitment" className="font-[shabnamBold]">
                  ایمیل  <span className="text-red-500">*</span>
                </label>
                <input id="EmailRecruitment" className="py-2 border border-solid border-[#c7c7c7] outline-none px-2" type="email" />
                <label htmlFor="NumRecruitment" className="font-[shabnamBold]">
                  شماره تلفن <span className="text-red-500">*</span>
                </label>
                <input id="NumRecruitment" className="py-2 border border-solid border-[#c7c7c7] outline-none px-2" type="text" />
                <label htmlFor="AgeRecruitment" className="font-[shabnamBold]">
                  رمز عبور <span className="text-red-500">*</span>
                </label>
                <input id="AgeRecruitment" className="py-2 border border-solid border-[#c7c7c7] outline-none px-2" type="number" />
                <label htmlFor="storeNameRecruitment" className="font-[shabnamBold]">
                  نام فروشگاه <span className="text-red-500">*</span>
                </label>
                <input
                  id="storeNameRecruitment"
                  className="py-2 border border-solid border-[#c7c7c7] outline-none px-2"
                  type="text"
                />
                <label htmlFor="storeAddressRecruitment" className="font-[shabnamBold]">
                  آدرس فروشگاه <span className="text-red-500">*</span>
                </label>
                <input
                  id="storeAddressRecruitment"
                  placeholder="https://nahalit.com/store/"
                  className="py-2 border border-solid border-[#c7c7c7] outline-none px-2"
                  type="text"
                />
                  <button
                    type="button"
                    className="bg-[#37B6EF] text-white mt-5 font-[shabnamBold] self-start px-4 w-full py-1 border border-solid border-[#cccccc] hover:bg-[#4ac1f8] transition-all duration-200"
                  >
                    ثبت
                  </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      :
      <NotLogined/>
      }
      <div>
        <FixedIcon />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default BeSeller;
