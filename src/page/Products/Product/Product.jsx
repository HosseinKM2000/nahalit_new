import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import desImg from '../../../assets/img/IMG_20221129_173915_800-600x837.png';
import { foundProduct } from '../../../features/products/productSlice';
// import Icons
import { AiTwotoneFolder } from 'react-icons/ai';
import { BsArrowBarUp, BsBagFill, BsPinterest, BsTags, BsTelegram, BsTwitter } from 'react-icons/bs';
import { FaEye, FaFacebookF, FaStar } from 'react-icons/fa';
import { GiBasket } from 'react-icons/gi';
import { HiCurrencyDollar } from 'react-icons/hi';
import { MdDateRange, MdModeComment, MdOutlineComputer, MdShoppingCart } from 'react-icons/md';
import wonderIMG from '../../../assets/img/product/info.svg';
import gearIMG from '../../../assets/img/product/license.svg';
import cardsIMG from '../../../assets/img/product/shopping-carts.png';
// import modules
import { A11y, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import styles
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./Product.css";
// import Components
import FixedIcon from '../../../Components/FixedIcon/FixedIcon';
import Footer from '../../../Components/Footer/Footer';
import Header from '../../../Components/Header/Header';
import ResponseHeader from '../../../Components/ResponseHeader/ResponseHeader';
import Comments from './Comments/Comments';

function Product() {
    const params = useParams();
    const [Switch,setSwitch] = useState(false)
    const [inform,setInform] = useState(false);
    const products = useSelector(state => state.products.products);
    const goalProduct = useSelector(state => state.products.goalProduct);
    const mobile = window.innerWidth <= 425 ? true : false;
    const dispatch = useDispatch();
    dispatch(foundProduct(params.id))
    useEffect(()=>{
     
    },[])
    const mouseMoveHandler = (e) => {
      e.target.style.backgroundSize = '140%';
      const targ = e.target
      if(targ.style.backgroundSize ==='140%'){
        targ.addEventListener('mousemove',function(e){
            let dimentions = this.getBoundingClientRect()
      
            let x = e.clientX - dimentions.left;
            let y = e.clientY - dimentions.top
      
           x = Math.round(100/(dimentions.width/x));
           y = Math.round(100/(dimentions.height/y));

           targ.style.backgroundPosition = `${x}% ${y}%`
        })}else{
            console.log('not zoom')
        }
    }
    const mouseOutHandler = (e) => {
      e.target.style.backgroundSize = '100%';
    }

    

  return (
    <main >
      <header>
        <div className="max-lg:hidden">
            <Header />
        </div>
        <div className="lg:hidden">
            <ResponseHeader />
        </div>
      </header>
      <div className='flex flex-col lg:flex-row mt-5 w-full justify-between overflow-x-hidden text-right px-5'>
                     {/* right side */}
      <div className='flex flex-col w-full lg:w-[70%] p-0 sm:pr-5'>
        <div className='flex flex-col w-full'>
            <ul className='flex flex-row flex-wrap border-y-2 text-xs border-for-border gap-x-2 sm:gap-x-5 py-3 justify-start'>
                <li><Link to='/' className='hover:text-sky-blue text-stone-800'>صفحه اصلی</Link></li>
                <li><Link to='/shop' className='hover:text-sky-blue text-stone-800'>سایت های آماده</Link></li>
                <li><Link to='/shop' className='hover:text-sky-blue text-stone-800'>سایت آماده لاراول</Link></li>
                <li className='text-gray-88'>{goalProduct.title}</li>
            </ul>
            <div  className='flex flex-col mt-10 2xl:gap-20 items-start'>
              <h1 className='text-lg font-bold text-stone-700 mb-5'>{goalProduct.title}</h1>
              <div className='w-full h-[30rem] bg-no-repeat sm:h-[40rem] xl:w-[70rem] xl:h-[70rem] max-w-full overflow-hidden cursor-zoom-in' onMouseOut={(e)=>mouseOutHandler(e)} onMouseMove={(e)=>mouseMoveHandler(e)} style={{backgroundImage:`url(${goalProduct.img})`,backgroundSize:'cover'}}></div>
              <div className='flex gap-5 text-white text-sm  font-bold my-5 '>
                <span onClick={()=>setSwitch(false)} className='bg-slate-600 rounded-md py-1 px-3 2xl:p-3 cursor-default hover:bg-slate-500 transition-all'>توضیحات</span>
                <div onClick={()=>setSwitch(true)} className='flex gap-1 items-center bg-slate-600 rounded-md py-1 px-3 2xl:p-3 cursor-default hover:bg-slate-500 transition-all'>
                  <span>نظرات</span>
                  <span>0</span>
                </div>
              </div>
              {
                  !Switch
                  ? 
                  <div className='flex flex-col my-5 gap-5 w-full'>
                    <span className='text-[1.2rem] font-bold text-stone-700 m-0 p-0 w-full text-start'>توضیحات</span>
                    <p className='text-[0.9rem]  text-justify mb-5 leading-8 text-stone-600'>{goalProduct.explain}</p>
                    <div className='w-full flex flex-col items-center gap-5'>
                      <img className='w-[25rem] xl:w-[40rem]' src={desImg} alt="property" />
                      <div className='flex flex-col w-full mt-5 gap-3 2xl:gap-5'>
                      <span className='font-bold text-xs text-stone-600'>جهت مشاهده سایت و توضیحات بیشتر ، فیلم زیر را مشاهده کنید :</span>
                      <iframe
                title="movie"
                className="w-[100%] flex Iframe justify-center items-center h-[15rem] 2xl:h-[40rem] sm:h-[25rem] scroll_None"
                src='https://www.aparat.com/v/Vg8LE'
                allowFullScreen={true}
                webkitallowfullscreen={true}
                mozallowfullscreen={true}
              ></iframe>
                      </div>
                    </div>
                    <div className='flex flex-col items-start mt-10 2xl:gap-20 gap-5 w-full'>
                <BsTags className='scale-150 tagsIcon text-gray-66 mr-5 sm:m-0 2xl:m-12'/>
                <div className='flex flex-col sm:flex-row text-white w-full'>
                  <Link to='https://twitter.com/intent/tweet?text=https://nahalit.com/%d8%af%d9%88%d9%86%d8%af%d8%b1%d8%b2-%da%86%db%8c%d8%b3%d8%aa%d8%9f/' className='flex flex-col justify-center items-center w-full sm:w-1/4 cursor-pointer hover:brightness-125 transition-all bg-light-blue py-3 px-5 gap-5 '>
                    <BsTwitter className='scale-125 2xl:w-12 2xl:h-12'/>
                    <span className='text-xs text-center  sm:text-sm  '>اشتراک در توییتر</span> 
                  </Link>
                  <Link className='flex flex-col justify-center items-center w-full sm:w-1/4 cursor-pointer hover:brightness-125 transition-all bg-dark-blue py-3 px-5 gap-5'  to="https://www.facebook.com/sharer/sharer.php?u=https://nahalit.com/%d8%af%d9%88%d9%86%d8%af%d8%b1%d8%b2-%da%86%db%8c%d8%b3%d8%aa%d8%9f/">
                    <FaFacebookF className='scale-125 2xl:w-12 2xl:h-12'/>
                   <span className='text-xs text-center  sm:text-sm '> اشتراک در فیسبوک</span>
                  </Link>
                  <Link to="https://telegram.me/share/url?url=https://nahalit.com/%d8%af%d9%88%d9%86%d8%af%d8%b1%d8%b2-%da%86%db%8c%d8%b3%d8%aa%d8%9f/" className='flex flex-col justify-center items-center w-full sm:w-1/4 cursor-pointer hover:brightness-125 transition-all bg-light-blue py-3 px-5 gap-5 '>
                    <BsTelegram className='scale-125 2xl:w-12 2xl:h-12'/>
                   <span className='text-xs text-center  sm:text-sm '> اشتراک در تلگرام</span>
                  </Link>
                  <Link to="https://pinterest.com/pin/create/button/?url=https://nahalit.com/%d8%af%d9%88%d9%86%d8%af%d8%b1%d8%b2-%da%86%db%8c%d8%b3%d8%aa%d8%9f/" className='flex flex-col justify-center 2xl:py-12 items-center w-full sm:w-1/4 cursor-pointer hover:brightness-125 transition-all bg-soft-red py-3 px-5 gap-5 '>
                    <BsPinterest className='scale-125 2xl:w-12 2xl:h-12'/>
                    <span  className='text-xs text-center sm:text-sm '>اشتراک در پینترست</span>
                  </Link>
                </div>
              </div>
                            {/* junction-path */}
              <div className='flex flex-col sm:flex-row w-full sm:w-auto  items-center 2xl:p-12 justify-between gap-y-3 py-5 px-4 my-10 text-white bg-light-blue'>
               <span className='text-xs sm:text-sm flex items-center text-center sm:text-start '>راه آسان تری برای ارتباط با کاربرانمان پیدا کرده ایم :)</span>
               <button className='border-2  2xl:py-4 2xl:px-4 border-white px-2 py-1  btn-telegram transition-all'><Link to='https://telegram.me/nahal_it'>عضویت در کانال </Link></button>
              </div>
                            {/* Suggested-contents */}
                <div className='flex flex-col gap-2 items-center w-full'>
                <div className='flex justify-start w-full border-r-4 2xl: 2xl:py-8 border-light-orang py-2  my-5' style={{borderRight:'solid 5px #00BDAF'}}>
                  <span className='font-bold text-gray-77 text-lg m-0 pr-3'>محصولات مرتبط</span>
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
                      products.map(product => (
                        <SwiperSlide className='SwiperSlide'>
                          <div className='flex flex-col 2xl:mb-10 mb-8 gap-1 2xl:gap-1 rounded-md border-2 border-for-border' style={{border:'solid 1px #DFDFDF'}}>
                            <Link to={{pathname:`/shop/product`,search:`?name=${product.title}`}} className='z-10'><img src={product.img} alt={product.title} className='hover:brightness-125 z-10 2xl:w-full cursor-pointer transition-all'/></Link>
                            <span className='pt-2 cursor-pointer hover:text-gray-88 pr-2 text-sm suggest-title font-bold'><Link to={{pathname:`/articles/article`,search:`?name=${product.title}`}}>{product.title}</Link></span>
                            <div className='flex flex-col py-2 text-sm '>
                              <p className='line-clamp-4  text-gray-66 leading-5 px-2 suggest-text text-justify mb-1'>{product.explain}</p>
                            </div>
                            <div className='flex flex-col'>
                            <HiCurrencyDollar className='text-yellow-600 scale-[1.5] mr-3'/>
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
                            <div className='flex text-sm p-2 2xl:text-4xl 2xl:justify-between flex-row gap-10 sm:gap-1'>
                              <AiTwotoneFolder className='text-stone-600'/>
                              <div className='line-clamp-1 text-xs 2xl:text-xl text-stone-600 font-bold'>
                                {
                                  product.tags.map(tag => (
                                    <span className='hover:text-sky-500 mx-1 cursor-default'>{tag}</span>
                                  ))
                                }
                              </div>
                            </div>
                            <Link>
                              <button className='flex gap-1 w-full bg-sky-600 text-white py-2 justify-center hover:bg-sky-500 transition-all'>
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
              </div>
                  </div>
                  : <Comments/>
                }
            </div>
        </div>
      </div>
              {/* left side */}
      <div className='flex gap-10 flex-col mt-10 w-full lg:w-[30%] sm:px-12 px-5'>
        <div className='w-full flex flex-col gap-3 2xl:gap-5 items-center'>
          <img src={gearIMG} alt="gear" className='w-[4rem]'/>
          <span className='text-base font-[shabnambold] font-bold mb-1 w-full text-center text-stone-600'>قوانین استفاده از محصول</span>
          <p className='text-center lg:text-start leading-5  2xl:leading-9 text-[0.9rem] text-stone-500'>در این سایت امکان تعریف نقش کاربران، خدمات، مقالات، تعرفه های انجام خدمات، دسته بندی ها، درخواست پشتیبانی ارائه مشاوره رایگان وجود دارد. همچنین امکان نمایش نظرات کاربران و تماس با افراد پشتیبان وجود دارد. در ادمین امکان ویرایش، حذف همه قسمت های مختلف وجود دارد. این سایت مناسب شرکت هایی می باشد که در […]</p>
        </div>
        <div className='w-full flex flex-col gap-3 2xl:gap-5 items-center'>
          <img src={wonderIMG} alt="wonder" className='w-[4rem]'/>
          <span className='text-base font-[shabnambold] font-bold mb-1 w-full text-center text-stone-600'>قوانین استفاده از محصول</span>
          <ul className='flex flex-col gap-2 2xl:gap-0 list-disc'>
            <li><span className='text-[0.8rem]  font-bold'>بسته نصبی + راهنمای نصب فارسی</span></li>
            <li><span className='text-[0.8rem]  font-bold'>درگاه های پرداخت واسط و مستقیم</span></li>
            <li><span className='text-[0.8rem]  font-bold'>پشتیبانی 24 ساعته محصولات</span></li>
            <li><span className='text-[0.8rem]  font-bold'>محصول اورجینال با آپدیت رایگان</span></li>
            <li><span className='text-[0.8rem]  font-bold'>بازگشت وجه بدون قید وشرط</span></li>
          </ul>
        </div>
        <div className='w-full flex flex-col items-center'>
        <div className='w-full flex items-center font-bold text-sm my-3 gap-3'>
                        <del className='flex gap-1 items-center text-red-600'>
                          <span>8,800,000</span>
                          <span>تومان</span>
                        </del>
                    <div className='flex gap-1 items-center text-stone-500'>
                        <span>8,000,000</span>
                        <span>تومان</span>
                    </div>
            </div>
            <input type="number" name="" id="" className='outline-none border-2 w-full 2xl-px-3 border-stone-300 px-1 font-bold'/>
            <Link className='w-full'>
            <button className='text-white my-5 font-bold rounded-sm gap-2 text-sm transition-all hover:bg-sky-400 py-2 2xl:py-2 w-full bg-sky-500 border-b-2 border-sky-800 flex justify-center items-center'>
              <BsBagFill/>
              <span>افزودن به سبد خرید</span>
            </button>
            </Link>
            <div className='flex flex-col w-full gap-1 2xl:gap-5'>
              <input type="text" placeholder='شماره موبایل' className='outline-none 2xl-px-3 border-2 border-stone-300 px-1 text-left font-bold text-sm' readOnly/>
              <Link className='w-full'>
            <button className='text-white font-bold my-5 2xl:py-2 rounded-sm gap-2 text-sm transition-all hover:bg-lime-500 py-2 w-full bg-lime-600 border-b-2 border-lime-800 flex justify-center items-center'>
              <BsBagFill/>
              <span>پیشنمایش محصول</span>
            </button>
            </Link>
            </div>
            <div className='flex w-full flex-col gap-5 p-3 text-sm font-bold text-stone-700' style={{border:'2px dotted #BABCBE'}}>
              <div className='flex items-center w-full justify-between'>
                <div className='flex gap-1 items-center'>
                  <MdDateRange/>
                  <span>تاریخ:</span>
                </div>
                <span>۱۴۰۱/۰۹/۲۹</span>
              </div>
              <div className='flex items-center w-full justify-between'>
                <div className='flex gap-1 items-center'>
                  <FaEye/>
                  <span>بازدید:</span>
                </div>
                <span>244</span>
              </div>
              <div className='flex items-center w-full justify-between'>
                <div className='flex gap-1 items-center'>
                  <FaStar/>
                  <span>میانگین امتیاز:</span>
                </div>
                <span>{0} از {10}</span>
              </div>
              <div className='flex items-center w-full justify-between'>
                <div className='flex gap-1 items-center'>
                  <MdOutlineComputer/>
                  <span>نسخه محصول:</span>
                </div>
                <span>0.1</span>
              </div>
              <div className='flex items-center w-full justify-between'>
                <div className='flex gap-1 items-center'>
                  <BsArrowBarUp/>
                  <span>بروزرسانی:</span>
                </div>
                <span>1401/10/07</span>
              </div>
                            <div className='flex items-center w-full justify-between'>
                            <div className='flex gap-1 items-center'>
                              <MdShoppingCart/>
                              <span> کل فروش:</span>
                            </div>
                            <span>0</span>
                          </div>
                          <div className='flex items-center w-full justify-between'>
                          <div className='flex gap-1 items-center'>
                            <MdModeComment/>
                            <span>تعداد دیدگاه:</span>
                          </div>
                          <span>0</span>
                        </div>
            </div>
            <div className='flex flex-col items-center gap-3 my-5 w-full 2xl:my-20'>
              <span className='text-sm  text-center text-stone-600 font-bold'>پرداخت امن با کلیه کارت های عضو شتاب</span>
              <img src={cardsIMG} alt="cards" className='w-full 2xl:w-[80%]'/>
            </div>
          <div className='flex flex-col items-start w-full my-10'>
            <div className='w-full py-3 2xl:py-1 pr-2 font-bold text-sm font-[shabnambold] text-stone-700' style={{borderRight:'solid 5px #03A9F4'}}>
              <span>برچسب ها:</span>
            </div>
            <ul className='flex flex-col gap-1 font-bold  2xl:pr-10 text-sm pr-5 mt-2'>
              {
                goalProduct.tags.map(tag => (
                  <Link><span className='text-stone-600 cursor-default hover:text-sky-600 transition-all'>{tag}</span></Link>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
      </div>
      <div>
      <FixedIcon />
      </div>
      <footer>
          <Footer/>
      </footer>
      <button className='fixed bottom-0 w-full text-white font-bold px-3 py-3 transition-all hover:bg-green-500  2xl:py-5 flex justify-center gap-2 bg-green-600 z-[49]]'>
        <GiBasket/>
        <span>افزودن به سبد خرید</span>
      </button>
    </main>
  )
}

export default Product;

// shabnamMedium