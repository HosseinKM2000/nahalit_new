import { React , useState } from 'react';
import { useDispatch } from 'react-redux';
import { IoIosArrowBack } from 'react-icons/io';
import { setSwitch } from '../../../../../features/dashboard/dashboardSlice';

function AllArticles({currentItems}) {
  const dispatch = useDispatch();
  return (
    <div className='w-full flex flex-col gap-5'>
        <span className='w-full text-white font-bold'> همه مقالات ( {currentItems !== null ? currentItems.length : 'NaN'} )</span>
        <div className='w-full flex flex-col gap-y-5'>
          {
            currentItems.map((article,index) => (
              <div key={index} className='w-full cursor-default text-[#1b243e] flex hover:bg-[#464e64] duration-300 hover:text-white transition-all shadow-[0px_5px_8px_1px_rgba(0,0,0,0.5)] items-center justify-between h-[10rem] py-3 pl-3 pr-8  bg-[#f0f6f0] rounded-xl'>
                <img src={article.url} alt={article.title} className='w-[8rem] h-[8rem]'/>
                <div className='flex flex-col gap-1 w-[60%]'>
                  <span className='text-xl line-clamp-1  font-[shabnambold]'>{article.title}</span>
                  <p className='line-clamp-3 leading-5 font-[shabnammedium] text-sm opacity-60 text-justify'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                  <span className='text-sm mt-3 font-[shabnambold] opacity-90'>1401/04/15</span>   
                </div>
                <div className='h-full flex flex-col justify-between py-3'>
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