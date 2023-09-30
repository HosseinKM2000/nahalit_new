import React, { useState } from 'react';
// import Icons
import { BsPinterest, BsTags, BsTelegram, BsTwitter } from 'react-icons/bs';
import HTMLRenderer from 'react-html-renderer';
import { FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ProductGallerySlider from '../../ProductGallerySlider/ProductGallerySlider';

function RightSide({ goalProduct }) {
    const [Switch,setSwitch] = useState(false);

    // const mouseMoveHandler = (e) => {
    //     e.target.style.backgroundSize = '140%';
    //     const targ = e.target
    //     if(targ.style.backgroundSize ==='140%'){
    //       targ.addEventListener('mousemove',function(e){
    //           let dimentions = this.getBoundingClientRect()
        
    //           let x = e.clientX - dimentions.left;
    //           let y = e.clientY - dimentions.top
        
    //          x = Math.round(100/(dimentions.width/x));
    //          y = Math.round(100/(dimentions.height/y));
  
    //          targ.style.backgroundPosition = `${x}% ${y}%`
    //       })}else{
    //           console.log('not zoom')
    //       }
    //   };
  
    //   const mouseOutHandler = (e) => {
    //     e.target.style.backgroundSize = 'cover';
    //   };
  
  return (
    <div className='flex flex-col w-full lg:w-[70%] p-0 sm:pr-5'>
    <div className='flex flex-col w-full'>
        <div  className='flex flex-col mt-10 items-start'>
          <h1 className='text-lg font-[shabnamBold] text-stone-700 mb-5'>{goalProduct?.title}</h1>
          <img src={goalProduct?.image} alt={goalProduct?.title} className='w-full'/>
          {/* <div className='flex gap-5 text-white text-sm  font-bold my-5 '>
            <span onClick={()=>setSwitch(false)} className='bg-slate-600 rounded-md py-1 px-3 2xl:p-3 cursor-default hover:bg-slate-500 transition-all'>توضیحات</span>
            <div onClick={()=>setSwitch(true)} className='flex gap-1 items-center bg-slate-600 rounded-md py-1 px-3 2xl:p-3 cursor-default hover:bg-slate-500 transition-all'>
              <span>نظرات</span>
              <span>0</span>
            </div>
            </div> */}
          {
              !Switch
              ? 
                <div className='flex flex-col my-5 gap-5 w-full'>
                    <span className='text-[1.2rem] font-bold text-stone-700 m-0 p-0 w-full text-start'>توضیحات</span>
                    <div className='text-[1rem]  text-justify mb-5 font-[shabnamLight] leading-8 text-stone-600'>
                     <HTMLRenderer html={goalProduct?.description}/>
                    </div>
                    <ProductGallerySlider Id={goalProduct?.id}/>
                    <div className='flex flex-col items-start mt-10 gap-5 w-full'>
                    <BsTags className='scale-150 tagsIcon text-gray-66 mr-5 sm:m-0'/>
                    <div className='flex flex-col sm:flex-row text-white w-full'>
                    <Link to='https://twitter.com/intent/tweet' className='flex flex-col justify-center items-center w-full sm:w-1/4 cursor-pointer hover:brightness-125 transition-all bg-light-blue py-3 px-5 gap-5 '>
                        <BsTwitter className='scale-150'/>
                        <span className='text-xs text-center  sm:text-sm  font-[vasirBold]'>اشتراک در توییتر</span> 
                    </Link>
                    <Link className='flex flex-col justify-center items-center w-full sm:w-1/4 cursor-pointer hover:brightness-125 transition-all bg-dark-blue py-3 px-5 gap-5'  to="https://www.facebook.com/sharer/sharer.php">
                        <FaFacebookF className='scale-150'/>
                    <span className='text-xs text-center  sm:text-sm font-[vasirBold]'> اشتراک در فیسبوک</span>
                    </Link>
                    <Link to="https://telegram.me/share/url" className='flex flex-col justify-center items-center w-full sm:w-1/4 cursor-pointer hover:brightness-125 transition-all bg-light-blue py-3 px-5 gap-5 '>
                        <BsTelegram className='scale-150'/>
                    <span className='text-xs text-center  sm:text-sm font-[vasirBold]'> اشتراک در تلگرام</span>
                    </Link>
                    <Link to="https://pinterest.com/pin/create/button" className='flex flex-col justify-center 2xl:py-5 items-center w-full sm:w-1/4 cursor-pointer hover:brightness-125 transition-all bg-soft-red py-3 px-5 gap-5 '>
                        <BsPinterest className='scale-150'/>
                        <span  className='text-xs text-center sm:text-sm font-[vasirBold]'>اشتراک در پینترست</span>
                    </Link>
                    </div>
                    </div>
                        {/* junction-path */}
                    <div className='flex flex-col sm:flex-row w-full sm:w-auto  items-center justify-between gap-y-3 py-8 px-4 my-10 text-white bg-light-blue'>
                        <span className='text-xs sm:text-sm flex items-center text-center sm:text-start '>راه آسان تری برای ارتباط با کاربرانمان پیدا کرده ایم :)</span>
                        <button className='border-2  2xl:py-1 2xl:px-4 border-white px-2 py-1  btn-telegram transition-all'><Link to='https://telegram.me/nahal_it'>عضویت در کانال </Link></button>
                    </div>
                        {/* Suggested-contents */}
                    {/* <div className='flex flex-col gap-2 items-center w-full'>
                        <div className='flex justify-start w-full border-r-4 2xl: 2xl:py-3 border-light-orang py-1  my-5' style={{borderRight:'solid 5px #00BDAF'}}>
                            <span className='font-[shabnamBold] text-gray-77 text-lg m-0 pr-2'>محصولات مرتبط</span>
                        </div>
                        <div className='flex carsoule-parent z-0'> 
                            <Swiper
                            modules={[Navigation, Pagination, A11y]}
                            spaceBetween={mobile ? 0 : 20 }
                            slidesPerView={mobile ? 1 : 3}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            // onSlideChange={() => console.log('slide change')}
                            // onSwiper={(swiper) => console.log(swiper)}
                            initialSlide={0}
                            >
                            {
                                products?.map((product,index) => (
                                <SwiperSlide className='SwiperSlide'>
                                    <div className='flex flex-col bg-[#f8f8f8] 2xl:mb-10 mb-8 gap-1 2xl:gap-1 rounded-md border-2 border-for-border' style={{border:'solid 1px #DFDFDF'}}>
                                    <Link to={{pathname:`/shop/product`,search:`?id=${product.id}`}} className='z-10'><img src={product.image.replace('public','/storage')} alt={product.title} className='hover:brightness-125 z-10 2xl:w-full cursor-pointer transition-all'/></Link>
                                    <span className='pt-2 cursor-pointer hover:text-gray-88 pr-2 text-sm suggest-title font-bold'><Link to={{pathname:`/articles/article`,search:`?name=${product.title}`}}>{product.title}</Link></span>
                                    <div className='flex flex-col py-2 text-sm '>
                                        <p className='line-clamp-4  text-gray-66 leading-5 px-2 suggest-text text-justify mb-1'>{product.explain}</p>
                                    </div>
                                    <div className='flex flex-col'>
                                    <div className='flex items-center justify-between px-3'>
                                    <HiCurrencyDollar className='text-yellow-600 scale-[1.5]'/>
                                    <AiOutlineHeart className={ favorites.includes(index) ? 'hidden' : 'block' } onClick={()=>{
                                        addToFavorite(index)
                                    }}/>
                                    <AiFillHeart className={ favorites.includes(index) ? 'block text-red-600 hover:text-red-500 transition-all' : 'hidden' } onClick={()=>{
                                        deleteFromFavorites(index)
                                    }}/>
                                    </div>
                                    <div className='w-full flex items-center 2xl:text-lg font-bold px-2 text-xs my-3 gap-1'>
                                        <del className='flex gap-1 items-center text-red-600'>
                                            <span>8,800,000</span>
                                            <span>تومان</span>
                                        </del>
                                        <span>-</span>
                                        <div className='flex gap-1 items-center text-stone-500'>
                                            <span>8,000,000</span>
                                            <span>تومان</span>
                                        </div>
                                    </div>
                                    </div>
                                    <Link>
                                        <button className='flex gap-1 w-full items-center bg-sky-600 text-white py-2 justify-center hover:bg-sky-500 transition-all'>
                                        <BsBagFill/>
                                        <span>خرید محصول</span>
                                        </button>
                                    </Link>
                                    </div>
                                </SwiperSlide>
                                ))
                            }
                            ...
                            </Swiper>
                        </div>
                    </div> */}
              </div>
              : <Comments/>
            }
        </div>
    </div>
    </div>
  )
}

export default RightSide;