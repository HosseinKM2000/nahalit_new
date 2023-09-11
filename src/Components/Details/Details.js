import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineFile } from "react-icons/ai";
import { BsEyeFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import moment from "moment-jalaali";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addBasket } from "../../features/cart/action";

const Details = ({ blogs }) => {

  return (
    <div className="w-full flex justify-center gap-10 flex-col sm:flex-row flex-wrap px-5">
      {
        blogs?.map(blog => (
          <div className="relative flex flex-col justify-between h-[25rem] 2xl:w-[25%] 2xl:h-[35rem] w-full sm:w-[45%] lg:w-[30%] bg-for-border shadow-[0px_0px_5px_1px_rgba(0,0,0,0.3)]">
              <img src={blog.image} alt="" className="w-full h-[60%] transition-all hover:brightness-105"/>
              <div className="absolute w-full flex justify-center h-full items-center">
              <div className="flex flex-col bg-white justify-between rounded-sm gap-2 px-3 py-3  2xl:py-8 w-[90%] h-[80%] lg:h-[75%] lg:w-[80%] overflow-hidden">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-1 items-center text-sm text-stone-500">
                    <BiTimeFive/>
                    <span className="font-[shabnamBold]">{moment(blog.created_at).format('jYYYY/jMM/jDD')}</span>
                  </div>
                  <Link href='./'><span className="text-base font-[shabnambold] leading-8 m-0 2xl:text-[1.3rem]">{blog.title}</span></Link>
                </div>
                <p className="line-clamp-4 2xl:text-[1rem] font-[shabnamLight] text-[#4e4e4e] text-justify leading-7 text-sm px-3">{blog.body}</p>
                <div className="w-full flex justify-center mt-2">
                <Link to={`/articles/article?id=${blog.id}`}><button type="button" className="text-white px-3 py-1 flex rounded-md text-base font-bold transition-all duration-500 hover:bg-green-600 bg-green-500">بیشتر بخوانید...</button></Link>
                </div>
              </div>
              </div>
              <div className="flex w-full px-3 pb-3 gap-3 z-10 text-stone-700 text-[0.8rem]">
                <div className="flex gap-1 items-center">
                  <BsEyeFill/>
                  <span>0</span>
                </div>
                <div className="flex gap-1 items-center hover:text-green-600">
                  <AiOutlineFile/>
                  <Link to={'/'}>اخبار سایت</Link>
                </div>
              </div>
          </div>
        ))
      }
    </div>
  );
};

export default Details;
