import React from 'react';
import { BsTicketDetailedFill } from 'react-icons/bs';
import { MdOutlineDateRange, MdOutlineDescription, MdOutlineSupervisorAccount } from 'react-icons/md';
import { TbCategory2, TbNumbers } from 'react-icons/tb';
import { useDispatch } from 'react-redux';

function All({ currentItems , setShowDetails }) {
    const dispatch = useDispatch();
  return (
    <div className='w-full 2xl:w-[70%] flex flex-col gap-5'>
         <span className='w-full text-white font-bold'>نمونه کارها ( {currentItems !== null ? currentItems.length : 'NaN'} )</span>
        <div className='md:flex hidden items-center bg-[#ffffff69] w-full p-5 text-white text-2xl justify-between'>
            <TbNumbers/>
            <MdOutlineSupervisorAccount/>
            <MdOutlineDescription/>
            <MdOutlineDateRange/>
            <TbCategory2/>
            <BsTicketDetailedFill/>
        </div>
        <div className='flex flex-row flex-wrap md:flex-col items-center gap-5'>
            {
            currentItems.map((item,index) => (
                <div key={index} className='w-full items-center gap-y-1 sm:w-[45%] md:w-[100%] p-3 flex md:flex-row flex-col md:items-center justify-between bg-white'>
                    <span className='bg-white font-bold text-xl w-8 h-8  md:w-10 md:h-10 flex items-center justify-center shadow-[0px_0px_5px_1px_rgba(0,0,0,0.5)]'>{index+1}</span>
                    <div className='flex flex-col gap-1 items-center md:items-start'>
                    <span className='text-lg font-bold'>{item.title}</span>
                    <span className='text-sm font-bold text-stone-600'>{item.manager}</span>
                    </div>
                    <p className='w-full md:w-[30%] line-clamp-2 text-sm'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                    <span className='text-sm font-[shabnambold]'>1401/05/09</span>
                    <span className='text-sm font-[shabnambold] text-stone-600'>نرم افزار موبایل</span>
                    <button className='px-3 py-1 bg-[#025458] text-xs rounded-sm font-[shabnam] text-white shadow-md transition-all hover:bg-[#067378]' onClick={()=>setShowDetails({status:true,value:item})}>بیشتر</button>
                </div>
            ))
            }
        </div>
     </div>
  )
}

export default All;