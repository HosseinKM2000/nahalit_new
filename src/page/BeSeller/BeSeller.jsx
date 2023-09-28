import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import NotLogined from "../../Components/NotLogined/NotLogined";
import ResponseHeader from "../../Components/ResponseHeader/ResponseHeader";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { addSeller } from "../../features/dashboard/action";

const BeSeller = () => {
  const loginStatus = useSelector(state => state.authentication.loginStatus);
  const loading = useSelector(state => state.dashboard.sellerLoading);
  const userInfo = JSON.parse(Cookies.get("user"));
  const dispatch = useDispatch();

  const sendForm = e => {
    e.preventDefault();
    let dataObj = {
      code_meli:e.target.elements[0].value,
      card_number:e.target.elements[1].value,
      user_id:userInfo.id
    }
    switch(true){
      case dataObj.code_meli.length === 0 : toast.warn("کد ملی را وارد کنید");
      break;
      case dataObj.code_meli.length !== 10 : toast.warn("کد ملی صحیح نیست");
      break;
      case dataObj.card_number.length === 0 : toast.warn("شماره کارت را وارد کنید");
      break;
      case dataObj.card_number.length !== 16 : toast.warn("شماره کارت صحیح نیست");
      break;
      default : dispatch(addSeller(dataObj))
    }
  }

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
              <form className="flex flex-col justify-center w-full gap-y-3" onSubmit={e => sendForm(e)}>
                {/* <label htmlFor="FamilyRecruitment" className="font-[shabnamBold]">
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
                /> */}
                <label htmlFor="code_meli" className="font-[shabnamBold]">
                  کد ملی <span className="text-red-500">*</span>
                </label>
                <input id="card_number" className="py-2 border border-solid border-[#c7c7c7] outline-none px-2" type="number" placeholder="490****054" defaultValue={userInfo?.code_meli}/>
                <label htmlFor="card_number" className="font-[shabnamBold]">
                   شماره کارت <span className="text-red-500">*</span>
                </label>
                <input id="code_meli" className="py-2 border border-solid border-[#c7c7c7] outline-none px-2" type="number" placeholder="6037*********547" defaultValue={userInfo?.card_number}/>
                  <button
                    type="submit"
                    className="bg-[#37B6EF] text-white mt-5 font-[shabnamBold] self-start px-4 w-full py-1 border border-solid border-[#cccccc] hover:bg-[#4ac1f8] transition-all duration-200"
                  >
                    {
                      loading
                      ?
                      <img src="/img/Rolling-0.8s-200px.svg" alt="loading..." className="w-[30px] mx-auto"/>
                      :
                      <span>ارسال</span>
                    }
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
