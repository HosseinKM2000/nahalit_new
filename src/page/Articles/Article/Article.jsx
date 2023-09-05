import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { copyLink } from '../../../features/article/articleSlice';
// import Icons
import { AiOutlineBarChart } from 'react-icons/ai';
import { BsPinterest, BsTags, BsTelegram, BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaLink } from 'react-icons/fa';
import { HiOutlineDocument } from 'react-icons/hi';
import { MdDateRange } from 'react-icons/md';
import { TfiMenuAlt } from 'react-icons/tfi';
import messageIMG from '../../../assets/img/2900821_25540.png';
// import modules
import { keyWord } from '../../../API/data';
// import styles
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Article.css';
// import Components
import { Helmet } from 'react-helmet';
import HTMLRenderer from 'react-html-renderer';
import FixedIcon from '../../../Components/FixedIcon/FixedIcon';
import Footer from '../../../Components/Footer/Footer';
import Header from '../../../Components/Header/Header';
import ResponseHeader from '../../../Components/ResponseHeader/ResponseHeader';
import { getArticles } from '../../../features/article/action';

const Article = () => {

  const [params,setParams] = useSearchParams();
  const goalId = JSON.parse(params.get('id'));
  const location = useLocation();
  const articles = useSelector(state => state.articles.articles);
  const goalArticle = articles.find(article => article.id === goalId);
  const shortLink = useSelector(state => state.articles.shortLink);
  const mobile = window.innerWidth <= 768 ? true : false;
  const dispatch = useDispatch();
  const helmetTitle = goalArticle?.title || ""
  useEffect(()=> {
    dispatch(getArticles())
  },[])

  return (
    <main>
        <Helmet>
          <title>مقالات | {helmetTitle}</title>
        </Helmet>
        <header>
            <div className="max-lg:hidden">
              <Header />
            </div>
            <div className="lg:hidden">
              <ResponseHeader />
            </div>
        </header>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center md:items-start lg:flex-row mt-5 w-full overflow-x-hidden text-right gap-2 sm:pr-3'>
                {/* right side */}
                <div className='flex flex-col items-center w-full md:items-start lg:w-[80%]'>
                    <ul className='flex flex-row border-y-2 font-[shabnamMedium] text-xs justify-center md:justify-start border-for-border gap-2 sm:gap-20 py-3'>
                        <li><Link to='/' className='hover:text-sky-blue font-[shabnamLight]'>صفحه اصلی</Link></li>
                        <li><Link to='/news' className='hover:text-sky-blue font-[shabnamLight]'>اخبار سایت</Link></li>
                        <li className='text-gray-88 font-[shabnamLight]'>{goalArticle?.title}</li>
                    </ul>
                    {/* article-content */}
                    <div className='flex flex-col mt-10 2xl:gap-20 w-[90%] md:w-full items-start overflow-x-hidden'>
                      <h1 className='text-[1.1rem] mr-2 font-extrabold text-gray-77 font-[shabnamMedium] tracking-wide'>{goalArticle?.title}</h1>
                      {/* article-information */}
                      <div className='flex flex-col mr-2 md:flex-row mt-3 gap-5 md:gap-10 text-gray-88'>
                        <div className='flex flex-row items-center gap-2'>
                          <TfiMenuAlt/>
                          <div className='flex flex-row text-[0.9rem] font-[shabnambold] gap-1'>
                            <span className='text-gray-500'>دسته بندی:</span>
                            <span className='hover:text-sky-blue cursor-pointer'>اخبار سایت </span>
                          </div>
                        </div>
                        <div className='flex flex-row items-center gap-2 text-[0.9rem]'>
                          <MdDateRange/>
                          <span className='flex gap-1'><bdi>24</bdi>بهمن<bdi>1401</bdi></span>
                        </div>
                        <div className='flex flex-row text-[0.9rem] items-center gap-1.5 sm:gap-5'>
                          <AiOutlineBarChart/>
                          <span>27</span>
                        </div>
                      </div>
                      {/* article-poster and article-text */}
                      <div className='mt-7 flex flex-col items-center md:inline-block'>
                        <img src={goalArticle?.img} alt="postIMg" className='w-[300px] bg-gray-77 h-[300px] float-right ml-0 mb-4 md:ml-4'/>
                        <p className='text-gray-66 font-[shabnamMedium] text-justify font-thin text-sm leading-7 px-3'>
                          <HTMLRenderer html={goalArticle?.body}/>
                        </p>
                      </div>
                      {/* socalMedia */}
                      <div className='flex flex-col pl-2 items-center 2xl:items-start  mt-10  gap-5 w-full'>
                        <div className='flex items-center w-full justify-start px-5'><BsTags className='scale-150 text-gray-66 mr-5 sm:m-0'/></div>
                        <div className='flex flex-col sm:flex-row text-white w-[80%] md:w-full 2xl:w-[70%]'>
                          <Link to='https://twitter.com/intent/tweet?text=https://nahalit.com/%d8%af%d9%88%d9%86%d8%af%d8%b1%d8%b2-%da%86%db%8c%d8%b3%d8%aa%d8%9f/' className='flex flex-col justify-center items-center w-full sm:w-1/4 cursor-pointer hover:brightness-125 transition-all bg-light-blue py-5 px-5 gap-2 '>
                            <BsTwitter className='scale-125'/>
                            <span className='text-xs text-center'>اشتراک در توییتر</span> 
                          </Link>
                          <Link className='flex flex-col justify-center items-center w-full sm:w-1/4 cursor-pointer hover:brightness-125 transition-all bg-dark-blue py-5 px-5 gap-2'  to="https://www.facebook.com/sharer/sharer.php?u=https://nahalit.com/%d8%af%d9%88%d9%86%d8%af%d8%b1%d8%b2-%da%86%db%8c%d8%b3%d8%aa%d8%9f/">
                            <FaFacebookF className='scale-125'/>
                          <span className='text-xs text-center'> اشتراک در فیسبوک</span>
                          </Link>
                          <Link to="https://telegram.me/share/url?url=https://nahalit.com/%d8%af%d9%88%d9%86%d8%af%d8%b1%d8%b2-%da%86%db%8c%d8%b3%d8%aa%d8%9f/" className='flex flex-col justify-center items-center w-full sm:w-1/4 cursor-pointer hover:brightness-125 transition-all bg-light-blue py-5 px-5 gap-2 '>
                            <BsTelegram className='scale-125'/>
                          <span className='text-xs text-center'> اشتراک در تلگرام</span>
                          </Link>
                          <Link to="https://pinterest.com/pin/create/button/?url=https://nahalit.com/%d8%af%d9%88%d9%86%d8%af%d8%b1%d8%b2-%da%86%db%8c%d8%b3%d8%aa%d8%9f/" className='flex flex-col justify-center 2xl:py-5 items-center w-full sm:w-1/4 cursor-pointer hover:brightness-125 transition-all bg-soft-red py-5 px-5 gap-2 '>
                            <BsPinterest className='scale-125'/>
                            <span  className='text-xs text-center'>اشتراک در پینترست</span>
                          </Link>
                        </div>
                      </div>
                      {/* comment-ruls */}
                      <div className='mt-20 text-gray-66 relative'>
                        <span className='font-[shabnambold] px-5 text-[1.1rem] w-fit'>قوانین ارسال دیگاه در سایت</span>
                        <ul className='mt-5 2xl:mt-5 pr-5 text-sm text-gray-88 2xl:gap-3 gap-5 flex flex-col font-bold rulls px-5 justify-center'>
                          <li className='font-[shabnamLight]'>چنانچه دیدگاهی توهین آمیز باشد تایید نخواهد شد</li>
                          <li className='font-[shabnamLight]'>چنانچه دیدگاه شما جنبه ی تبلیغاتی داشته باشد تایید نخواهد شد</li>
                          <li className='font-[shabnamLight]'>چنانچه از لینک سایر وبسایت ها و یا وبسایت خود در دیدگاه استفاده کرده باشید تایید نخواهد شد</li>
                          <li className='font-[shabnamLight]'>چنانچه در دیدگاه خود از شماره تماس، ایمیل و آیدی تلگرام استفاده کرده باشید تایید نخواهد شد</li>
                          <li className='font-[shabnamLight]'>چنانچه دیدگاهی بی ارتباط با موضوع آموزش مطرح شود تایید نخواهد شد</li>
                        </ul>
                        <img src={messageIMG} alt="comment"  className='absolute w-60 opacity-20'/>
                      </div>
                      {/* Suggested-contents */}
                      {/* <div className='flex flex-col gap-3 items-center w-full md:items-start'>
                        <div className='flex justify-start w-full border-r-4 2xl:py-8 border-light-orang px-5 py-2  mt-16'>
                          <span className='font-[shabnambold] text-gray-77 text-[1.1rem] m-0'>مطالب زیر را حتما بخوانید:</span>
                        </div>
                        <div className='flex w-[20rem] sm:w-[30rem] md:w-[40rem] lg:w-[50rem]'> 
                            <Swiper
                            modules={[Navigation, Pagination, A11y]}
                            spaceBetween={mobile ? 0 : 15 }
                            slidesPerView={mobile ? 1 : 3}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            // onSlideChange={() => console.log('slide change')}
                            // onSwiper={(swiper) => console.log(swiper)}
                            initialSlide={0}
                          >
                            {
                              articles.map(article => (
                                <SwiperSlide className='SwiperSlide'>
                                  <div className='flex flex-col mb-10 sm:mb-3 2xl:mb-10 gap-2 2xl:gap-5 rounded-md overflow-hidden' style={{border:'1px solid #CCCCCC'}}>
                                    <Link to={{pathname:`/articles/article`,search:`?name=${article.title}`}} ><img src={article.img} alt={article.title} className='hover:brightness-125 2xl:w-full cursor-pointer transition-all'/></Link>
                                    <span className='py-2 cursor-pointer hover:text-gray-88 pr-2 text-[1rem] suggest-title line-clamp-1 font-bold'><Link to={{pathname:`/articles/article`,search:`?name=${article.title}`}}>{article.title}</Link></span>
                                    <div className='flex flex-col'>
                                      <p className='line-clamp-3 leading-4 text-[0.8rem] text-gray-66 px-4 text-justify'>{article.explain}</p>
                                      <Link className='text-pink hover:text-light-pink mr-2 cursor-pointer font-bold 2xl:py-1 text-[0.8rem] shadow-sm w-fit py-1 px-2 my-1' to={{pathname:`/articles/article`,search:`?name=${article.title}`}}>جزئیات بیشتر</Link>
                                    </div>
                                    <div className='flex text-[0.7rem] py-2 2xl:justify-between justify-around flex-row gap-10 sm:gap-2' style={{borderTop:'1px solid #E9E9E9'}}>
                                      <span className='text-gray-77'>شنبه 20 مهر 1401</span>
                                      <span className='cursor-pointer hover:text-gray-white'>بدون دیدگاه</span>
                                    </div>
                                  </div>
                                </SwiperSlide>
                              ))
                            }
                            ...
                          </Swiper>
                        </div>
                      </div> */}
                      {/* junction-path */}
                      <div className='flex flex-col sm:flex-row w-full 2xl:w-[80%] 2xl:justify-between 2xl:py-5 sm:w-auto  items-center 2xl:p-12 gap-4 sm:gap-32 py-5 px-4 my-10 text-white bg-light-blue'>
                      <span className='text-[0.9rem] flex text-center'>راه آسان تری برای ارتباط با کاربرانمان پیدا کرده ایم :)</span>
                      <button className='border-2  text-[0.9rem] border-white p-1  btn-telegram transition-all'><Link to='https://telegram.me/nahal_it'>عضویت در کانال </Link></button>
                      </div>
                      {/* comments */}
                      {/* <Comments/> */}
                    </div>
                </div>
                {/* left side */}
                <div className='flex gap-10 w-[90%] my-5 flex-col mt-10 lg:w-[20%]'>
                  <div className='flex gap-2 flex-col 2xl:gap-12'>
                    <div className='flex flex-row items-center gap-2 2xl:gap-12 text-sm text-gray-66'>
                      <FaLink className='linkImg'/>
                      <span className='text-[0.9rem] font-bold'>لینک مطلب:</span>
                    </div>
                    <div className='flex flex-row gap-2'>
                      <div className='bg-gray-88 cursor-pointer 2xl:w-fit 2xl:h-fit hover:bg-gray-white transition-all w-9 justify-center items-center flex p-2 rounded-full' onClick={(e)=> dispatch(copyLink())}>
                      <HiOutlineDocument className='text-white documentImg'/>
                      </div>
                      <input className='border-2 text-gray-66 rounded border-for-border p-1 outline-none text-xs' type="url" name="" id="" value={shortLink}/>
                    </div>
                  </div>
                  <div className='flex flex-col items-end text-sm'>
                    <span className='py-2 px-4 rounded-t-md font-bold' style={{border:'1px solid #D2D2D2'}}>کلمات کلیدی بلاگ</span>
                    <div className='py-2 px-6' style={{border:'1px solid #E9E9E9'}}>
                      {
                        keyWord.map(item => (
                          <span className='text-[0.8rem] text-gray-66 px-1 cursor-pointer hover:text-sky-blue'>{item}</span>
                        ))
                      }
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <div>
            <FixedIcon />
        </div>
        <footer>
            <Footer />
        </footer>
    </main>
  )
}

export default Article




 







  