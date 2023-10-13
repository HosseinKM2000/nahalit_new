import React from "react";
import { A11y, Autoplay, EffectCards, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const SliderSwiper = () => {
  return (
    <div className="relative -z-50 max-w-full overflow-hidden">
      <Swiper
        className="mt-[3rem] w-[80%] 2xl:w-[70%]"
        modules={[Navigation, A11y, Autoplay, Pagination, EffectCards]}
        effect="cards"
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <img
            className="hover:opacity-80 transition-all duration-300"
            src={"/img/sliderSwiper1.jpg"}
            alt="slider_image"
            width={2000}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="hover:opacity-80 transition-all duration-300"
            src={"/img/sliderSwiper2.jpg"}
            alt="slider_image_2"
            width={2000}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="hover:opacity-80 transition-all duration-300"
            src={"/img/sliderSwiper3.jpg"}
            alt="slider_image_3"
            width={2000}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderSwiper;
