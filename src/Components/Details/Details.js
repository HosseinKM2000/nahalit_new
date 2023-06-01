import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineFile } from "react-icons/ai";
import { BsEyeFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import IMG_1 from '../../assets/img/1.jpg';
// import IMG_2 from '../../assets/img/2.jpg';
// import IMG_3 from '../../assets/img/3.jpg';

const Details = () => {
  return (
    <div className="w-full flex justify-center gap-10 flex-col sm:flex-row flex-wrap px-3">
      <div className="relative flex flex-col justify-between h-[35rem] 2xl:w-[25%] 2xl:h-[60rem] w-full sm:w-[45%] lg:w-[30%] bg-for-border shadow-[0px_0px_5px_1px_rgba(0,0,0,0.3)]">
        <img src={IMG_1} alt="" className="w-full h-[40%] transition-all hover:brightness-105"/>
        <div className="absolute w-full flex justify-center h-full items-center">
         <div className="flex flex-col bg-white justify-between rounded-sm gap-2 p-3 w-[90%] h-[50%] overflow-hidden">
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 items-center text-sm 2xl:text-2xl">
              <BiTimeFive/>
              <span>3 اسفند</span>
            </div>
            <Link href='./'><h3 className="text-base m-0 2xl:text-3xl">چیزی برای بازگشت اینجا نیست در پایتون</h3></Link>
          </div>
          <p className="line-clamp-4 2xl:text-2xl text-justify leading-5 text-sm px-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
          <div className="w-full flex justify-center mt-2">
           <Link to="./"><button type="button" className="text-white px-3 py-2 rounded-md 2xl:text-2xl font-bold transition-all duration-500 hover:bg-green-600 bg-green-500">بیشتر بخوانید...</button></Link>
          </div>
         </div>
        </div>
        <div className="flex w-full px-3 pb-3 gap-3 z-10 text-stone-700 2xl:text-2xl">
          <div className="flex gap-1 items-center">
            <BsEyeFill/>
            <span>4</span>
          </div>
          <div className="flex gap-1 items-center">
            <AiOutlineFile/>
            <Link to={'/'}>اخبار سایت</Link>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col justify-between h-[35rem] 2xl:w-[25%] 2xl:h-[60rem] w-full sm:w-[45%] lg:w-[30%] bg-for-border shadow-[0px_0px_5px_1px_rgba(0,0,0,0.3)]">
        <img src={IMG_1} alt="" className="w-full h-[40%] transition-all hover:brightness-105"/>
        <div className="absolute w-full flex justify-center h-full items-center">
         <div className="flex flex-col bg-white justify-between rounded-sm gap-2 p-3 w-[90%] h-[50%] overflow-hidden">
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 items-center text-sm 2xl:text-2xl">
              <BiTimeFive/>
              <span>3 اسفند</span>
            </div>
            <Link href='./'><h3 className="text-base m-0 2xl:text-3xl">چیزی برای بازگشت اینجا نیست در پایتون</h3></Link>
          </div>
          <p className="line-clamp-4 2xl:text-2xl text-justify leading-5 text-sm px-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
          <div className="w-full flex justify-center mt-2">
           <Link to="./"><button type="button" className="text-white px-3 py-2 rounded-md 2xl:text-2xl font-bold transition-all duration-500 hover:bg-green-600 bg-green-500">بیشتر بخوانید...</button></Link>
          </div>
         </div>
        </div>
        <div className="flex w-full px-3 pb-3 gap-3 z-10 text-stone-700 2xl:text-2xl">
          <div className="flex gap-1 items-center">
            <BsEyeFill/>
            <span>4</span>
          </div>
          <div className="flex gap-1 items-center">
            <AiOutlineFile/>
            <Link to={'/'}>اخبار سایت</Link>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col justify-between h-[35rem] 2xl:w-[25%] 2xl:h-[60rem] w-full sm:w-[45%] lg:w-[30%] bg-for-border shadow-[0px_0px_5px_1px_rgba(0,0,0,0.3)]">
        <img src={IMG_1} alt="" className="w-full h-[40%] transition-all hover:brightness-105"/>
        <div className="absolute w-full flex justify-center h-full items-center">
         <div className="flex flex-col bg-white justify-between rounded-sm gap-2 p-3 w-[90%] h-[50%] overflow-hidden">
          <div className="flex flex-col gap-1">
            <div className="flex gap-1 items-center text-sm 2xl:text-2xl">
              <BiTimeFive/>
              <span>3 اسفند</span>
            </div>
            <Link href='./'><h3 className="text-base m-0 2xl:text-3xl">چیزی برای بازگشت اینجا نیست در پایتون</h3></Link>
          </div>
          <p className="line-clamp-4 2xl:text-2xl text-justify leading-5 text-sm px-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
          <div className="w-full flex justify-center mt-2">
           <Link to="./"><button type="button" className="text-white px-3 py-2 rounded-md 2xl:text-2xl font-bold transition-all duration-500 hover:bg-green-600 bg-green-500">بیشتر بخوانید...</button></Link>
          </div>
         </div>
        </div>
        <div className="flex w-full px-3 pb-3 gap-3 z-10 text-stone-700 2xl:text-2xl">
          <div className="flex gap-1 items-center">
            <BsEyeFill/>
            <span>4</span>
          </div>
          <div className="flex gap-1 items-center">
            <AiOutlineFile/>
            <Link to={'/'}>اخبار سایت</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
