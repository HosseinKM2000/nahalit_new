import React from 'react';
import { Pagination , EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './style.css';

function ProductGallerySlider() {
    const widthScreen = window.innerWidth;
  return (
    <div className='gallery_box'>
        <span className='text-[1.2rem] font-bold text-stone-700 m-0 w-full text-start'>تصاویر محصول</span>
        <Swiper
        initialSlide={widthScreen < 425 ? 0 : 1}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={widthScreen < 425 ? 1 : widthScreen < 2000 ? 3 : 4}
        coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        >
        <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default ProductGallerySlider;