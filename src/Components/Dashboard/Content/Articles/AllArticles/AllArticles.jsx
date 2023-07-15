import { React , useState } from 'react';
import { useDispatch } from 'react-redux';
import { IoIosArrowBack } from 'react-icons/io';
import { setSwitch } from '../../../../../features/dashboard/dashboardSlice';

function AllArticles({currentItems}) {
  const dispatch = useDispatch();
  return (
    <div className='w-full flex flex-col gap-5 items-center'>
        <span className='w-full text-white font-bold mx-5 md:m-0'> همه مقالات ( {currentItems !== null ? currentItems.length : 'NaN'} )</span>
        <div className='w-full flex flex-col items-center gap-y-5 2xl:w-[70%]'>
          {
            currentItems.map((article,index) => (
              <div key={index} className='md:w-full gap-5 md:gap-0 w-[80%] sm:w-[60%] cursor-default text-[#1b243e] flex flex-col md:flex-row h-fit hover:bg-[#464e64] duration-300 hover:text-white transition-all shadow-[0px_5px_8px_1px_rgba(0,0,0,0.5)] items-center justify-between md:h-[10rem] py-3 px-3 md:pl-3 md:pr-8   bg-[#f0f6f0] rounded-xl'>
                <img src={article.url} alt={article.title} className='w-full h-[17rem] md:w-[8rem] md:h-[8rem]'/>
                <div className='flex flex-col gap-1 w-full md:w-[60%]'>
                  <span className='text-xl line-clamp-1  font-[shabnambold]'>{article.title}</span>
                  <p className='line-clamp-3 leading-5 font-[shabnammedium] text-sm opacity-60 text-justify'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                  <span className='text-sm mt-3 font-[shabnambold] opacity-90'>1401/04/15</span>   
                </div>
                <div className='w-full h-fit md:h-full md:w-fit flex flex-row items-center md:flex-col justify-between py-3'>
                  <span className='rounded-[50%] bg-green-500 p-3'></span>
                  <button className='cursor-default hover:scale-110 transition-all  rounded-[50%] text-center bg-[#529b9f] text-white p-1 text-xl' onClick={()=>dispatch(setSwitch({key:'articles',value:'edite',id:index}))}>
                    <IoIosArrowBack/>
                  </button>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default AllArticles;