import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DatePicker } from "zaman";
import FixedIcon from "../../Components/FixedIcon/FixedIcon";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import NotLogined from "../../Components/NotLogined/NotLogined";
import ResponseHeader from "../../Components/ResponseHeader/ResponseHeader";

const Recruitment = () => {
  const [birthDate,setBirthDate] = useState('');
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
        <div className="bg-[#f5f5f9] pb-32">
        <div className="px-8 max-lg:px-16 max-md:px-5 max-sm:px-2 mx-auto pt-12 flex max-xl:flex-wrap max-lg:justify-center justify-between items-start gap-x-12">
          <div className="flex flex-col max-xl:mb-8">
            <h3 className="font-[shabnamBold]">شرایط استخدام :</h3>
            <p className="text-[1rem] leading-7 text-center sm:text-justify">
              اولین سایت فریلنسری به نام <span className="font-[shabnamBold]">نهال آی تی</span> که به صورت پکیجی می باشد و از تمام
              متخصصان در حوزه آی تی دعوت به عمل می آورد. خواهشمند است از تمام متخصصان در حوزه آی تی اگر نمونه کار در زمینه وب
              سایت،اپلیکیشن و فتوشاپ،بنر،پوستر و موشن گرافیک… دارند می توانند پروژه های خود را به صورت رایگان در سایت نهال آی تی
              دمو نمایند.
            </p>
            <p className="text-[1rem] leading-7 text-center sm:text-justify">
              به این صورت که شرح پروژه ی خود را به صورت داکیومنت،عکس و فیلم و خروجی کار خود را به صورت فیلم و کامل ارسال نمایند؛
              در صورتی که محصول شما قابل اراِئه بود در سایت نهال آی تی بارگذاری می شود و بعد از اولین سفارش محصولتان با شما در
              تماس خواهیم بود.
            </p>
            <p className="text-[1rem] leading-7 text-center sm:text-justify">
              لازم به ذکر است که شما وظیفه دارید در یک سال اول محصول خود را پشتیبانی نمایید و هزینه ی پشتیبانی هم به شما داده
              خواهد شد؛ همچنین بعد از سفارش محصول شما تمامی سورس کد یا فرمت های استانداردی کار شما در اختیار ما قرار خواهند گرفت.
            </p>
            <p className="text-[1rem] leading-7 text-center sm:text-justify">
              همچنین شما می توانید قیمت پیشنهادی محصول خود را و پشتیبانی تخصص خود را بصورت اشتراکی و تعداد بالا اعلام نمایید که
              بتوانیم با توضیحات و هزینه ی دلخواه شما در سایت نهال آی تی دمو نماییم.
            </p>
            <p className="text-[1rem] leading-7 text-center sm:text-justify">
              لازم به ذکر است که ممکن است محصولی که شما دارید را شخص دیگری سایت دمو کرده باشد و قیمت پیشنهادی آن شخص کمتر از شما
              باشد و ما محصول آن شخص را دمو می نماییم.
            </p>
            <p className="text-[1rem] leading-7 text-center sm:text-justify">
              همچنین شما می توانید بصورت (برنامه نویس، فتوشاپ و گرافیک کار یا موشن…) در سایت نهال آی تی ثبت نام نمایید و به شما
              پروژه می دهیم و به صورت پروژه ای فعالیت نمایید.
            </p>
            <p className="text-[1rem] leading-7 text-center sm:text-justify">
              لطفا ابتدا نمونه قرارداد ها را مشاهده نموده سپس در صورت تمایل فرم را پر نمایید .
            </p>
            <Link className="text-[1rem] leading-6 text-center sm:text-start mt-10 font-[shabnamBold] underline hover:text-[#0056b3] transition-all duration-200">
              نمونه قرارداد برنامه نویسی
            </Link>
            <Link className="text-[1rem] leading-6 text-center sm:text-start mt-7 font-[shabnamBold] underline hover:text-[#0056b3] transition-all duration-200">
              نمونه قرارداد گرافیک و موشن گرافیک و ..
            </Link>
          </div>
          <div>
            <form className="flex flex-col px-3 justify-center w-[35rem] max-xl:w-[25rem] max-lg:w-[20rem] gap-y-2">
              <label htmlFor="NameRecruitment" className="font-[shabnamBold]">
                نام شما <span className="text-red-500">*</span>
              </label>
              <input required={true} id="NameRecruitment" className="py-2 border border-solid border-[#c7c7c7] outline-none px-2" type="text" />
              <label htmlFor="FamilyRecruitment" className="font-[shabnamBold]">
                نام خانوادگی <span className="text-red-500">*</span>
              </label>
              <input required={true} id="FamilyRecruitment" className="py-2 border border-solid border-[#c7c7c7] outline-none px-2" type="text" />
              <label htmlFor="EmailRecruitment" className="font-[shabnamBold]">
                ایمیل شما <span className="text-red-500">*</span>
              </label>
              <input 
              required={true} 
              pattern="test@gmail.com"
              id="EmailRecruitment" 
              className="py-2 border border-solid border-[#c7c7c7] outline-none px-2" 
              type="email" />
              <label htmlFor="birthdateRecruitment" className="font-[shabnamBold]">
                تاریخ تولد <span className="text-red-500">*</span>
              </label>
                <DatePicker onChange={(e) => console.log(e.value.toISOString().split('T')[0])}/>
              <label htmlFor="martial_statusRecruitment" className="font-[shabnamBold]">
                وضعیت تاهل <span className="text-red-500">*</span>
              </label>
              <select required={true} name="martial_statusRecruitment" className="py-2 border border-solid border-[#c7c7c7] outline-none px-2" id="martial_statusRecruitment">
                <option className="font-[shabnam]" value={false}>مجرد</option>
                <option className="font-[shabnam]" value={true}>متاهل</option>
              </select>
              <label htmlFor="AddressRecruitment" className="font-[shabnamBold]">
                آدرس <span className="text-red-500">*</span>
              </label>
              <input
                required={true}
                placeholder=""
                id="AddressRecruitment"
                className="py-2 border border-solid border-[#c7c7c7] outline-none px-2"
                type="text"
              />
              <label htmlFor="NumRecruitment" className="font-[shabnamBold]">
                شماره تلفن <span className="text-red-500">*</span>
              </label>
              <input 
              required={true} 
              id="NumRecruitment" 
              placeholder="09123456789" 
              className="py-2 border border-solid border-[#c7c7c7] outline-none px-2" 
              type="number"/>
              <div className="mt-7 px-1">
              <label htmlFor="checkBoxRecruitment" className="font-[shabnamBold]">
                فعالیت ها <span className="text-red-500">*</span>
              </label>
                <textarea cols={50} rows={10} placeholder="سایر فعالیت ها..." className="m-3 placeholder:text-sm outline-none p-3 text-sm font-[shabnam]"/>
            </div>
            <div className="mt-10 px-3 flex flex-col gap-y-5">
                <label className="font-[shabnamBold]">
                  وضعیت تحصیل <span className="text-red-500">*</span>
                </label>
                <input type="text" className="py-2 border border-solid border-[#c7c7c7] outline-none px-2" required={true} />
                <label className="font-[shabnamBold]">شرح توانایی شما (اختیاری)</label>
                <textarea className="min-h-[7rem] text-sm outline-none font-[shabnamMedium] p-2" required={true}></textarea>
                <label className="font-[shabnamBold]">
                  شماره شبای کارت بانکی <span className="text-red-500">*</span>
                </label>
                <input
                  required={true}
                  type="text"
                  placeholder="شماره شبا بانکی خود را بدون IR وارد کنید"
                  className="py-2 border border-solid font-[shabnamMedium] border-[#cecece] outline-none px-2"
                />
                <button
                  type="submit"
                  className="bg-[#38BDF8] w-full self-start px-4 py-1 border border-solid text-white  border-[#cccccc] hover:bg-[#53ccff] transition-all duration-200"
                >
                  ثبت
                </button>
            </div>
            </form>
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

export default Recruitment;
