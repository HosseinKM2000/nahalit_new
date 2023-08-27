import React, { useRef } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { RiShoppingCartLine } from "react-icons/ri";
import { products } from "../../API/data";

const CustomSlider = () => {
  
  const sliderRef = useRef();
  const swiperCustome = (data) => {
    if (sliderRef.current) {
      const width = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo(sliderRef.current.scrollLeft + width * data, 0);
    }
  };

  const addSignToMoney = (number) => {
    const options = {style: 'decimal'};
    return number.toLocaleString('fa-IR', options) + ' تومان';
  }

  return (
    <div className="mx-auto w-[90%] sm:w-[95%] 2xl:w-[80%]  py-5 bg-[#f3f3f5] rounded-xl p-3">
      <div className="flex items-center sm:gap-0 justify-between">
        <div className="border-r-4 text-[#868686] border-[#07B235] font-bold border-solid">
          <span className="py-2 pr-2 text-xl font-[shabnambold]">قالب های ویژه HTML</span>
        </div>
        <div className="flex justify-end items-center w-fit sm:w-[15rem]">
          <div className="flex gap-x-4 text-2xl">
            <HiOutlineChevronRight
              onClick={() => swiperCustome(1)}
              className="bg-white text-[#868686] hover:bg-[#2ac954] rounded-lg w-8 h-8 hover:text-white transition-all duration-500 cursor-pointer"
            />
            <HiOutlineChevronLeft
              onClick={() => swiperCustome(-1)}
              className="bg-white text-[#868686] hover:bg-[#2ac954] rounded-lg w-8 h-8 hover:text-white transition-all duration-500 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div ref={sliderRef} className="sliderContainer overflow-x-scroll">
        <div className="flex items-center justify-start gap-5 py-8">
          {
            products.map((product,index) => (
              <div key={`product-slide${index}`} className="sliderItem">
              <div className="sm:w-[43vw] md:w-[28vw] w-[85vw]  2xl:w-[17.5vw] flex flex-col bg-white justify-around  overflow-hidden   h-fit rounded-2xl   hover:-translate-y-2 transition-all duration-500 hover:shadow-[4px_4px_17px_-10px_rgba(0,0,0,1)] shadow-[0px_2px_8px_rgba(0,0,0,0.15)]">
                <div className="flex items-start justify-center h-full">
                  <img
                    className="rounded-tl-2xl rounded-tr-2xl w-full h-[80%]"
                    alt="product_Slide_Image"
                    src={product.img}
                  />
                </div>
                <div className="flex flex-col items-start justify-center h-full gap-5 py-3">
                  <div className="mr-3">
                    <div className="flex items-center gap-2">
                      {
                        product.tags.map((tag,index) => (
                          <p key={`product-tag-${index}`} className="2xl:py-2 py-1 my-2 px-1 text-sm bg-[#F4F4F5] rounded-lg">{tag}</p>
                        ))
                      }
                    </div>
                    <span className="text-[#656666] font-[shabnambold] line-clamp-1 2xl:text-[1rem] text-[1.1rem] mb-6">{product.title}</span>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center justify-end w-full gap-x-2">
                      <div className="flex items-center p-1 md:p-2 rounded-lg bg-[#FB923C]">
                        <RiShoppingCartLine className="w-5 h-5  text-white" />
                      </div>
                      <p className="bg-[#888888] px-5 py-1 rounded-tr-lg rounded-br-lg text-white font-[shabnamBold]">{addSignToMoney(product.price)}</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;


