import React from "react";

const AboutSite = () => {
  return (
    <div className="flex-col w-[50%] sm:w-[80%] lg:w-full sm:flex-row flex-wrap flex lg:gap-1 gap-10   items-center justify-between max-lg:flex-wrap max-lg:gap-12 max-lg:whitespace-nowrap max-lg:justify-center bg-[#f3f3f5] py-4 container  mx-auto rounded-lg">
        <div className="flex w-fit sm:w-[40%] 2xl:text-2xl lg:w-[24%] justify-between sm:justify-center items-center gap-2">
        <img alt="aboutSite" src="https://nahalit.com/wp-content/themes/Sigma/assets/img/s1.png" />
        <div className="flex flex-col items-start gap-1 justify-center">
          <p className="tracking-tighter">طراحی استاندارد</p>
          <p className="tracking-tighter">طرح ارسالی</p>
        </div>
        </div>
        <div className="flex w-fit sm:w-[40%] 2xl:text-2xl lg:w-[24%] justify-between sm:justify-center items-center gap-2">
          <img alt="aboutSite" src="https://nahalit.com/wp-content/themes/Sigma/assets/img/s2.png" />
          <div className="flex flex-col items-start gap-1 justify-center">
            <p className="tracking-tighter">پرداخت اقساطی</p>
            <p className="tracking-tighter">به صورت آنلاین</p>
          </div>
        </div>
        <div className="flex justify-between w-fit 2xl:text-2xl sm:w-[40%] lg:w-[24%] sm:justify-center items-center gap-2">
          <img alt="aboutSite" src="https://nahalit.com/wp-content/themes/Sigma/assets/img/s3.png" />
          <div className="flex flex-col items-start gap-1 justify-center">
            <p className="tracking-tighter">تحویل فوری</p>
            <p className="tracking-tighter">با بالاترین کیفیت</p>
          </div>
        </div>
        <div className="flex w-fit sm:w-[40%] lg:w-[24%] 2xl:text-2xl justify-between sm:justify-center items-center gap-2">
          <img alt="aboutSite" src="https://nahalit.com/wp-content/themes/Sigma/assets/img/s4.png" />
          <div className="flex flex-col items-start gap-1 justify-center">
            <p className="tracking-tighter">پشتیبانی قوی</p>
            <p className="tracking-tighter">به صورت آنی</p>
          </div>
        </div>
    </div>
  );
};

export default AboutSite;
