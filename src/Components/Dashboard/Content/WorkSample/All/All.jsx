import React from 'react';
import { CgDetailsMore } from 'react-icons/cg';
import { useDispatch } from 'react-redux';
import { TbNumbers , TbCategory2 } from 'react-icons/tb';
import { MdOutlineSupervisorAccount, MdOutlineDateRange , MdOutlineDescription } from 'react-icons/md';
import { BsTicketDetailedFill } from 'react-icons/bs';
import { setSwitch } from '../../../../../features/dashboard/dashboardSlice';

function All({ currentItems , setShowDetails }) {
    const dispatch = useDispatch();
  return (
    <div className='w-full flex flex-col gap-5'>
        <div className='flex items-center bg-[#ffffff69] w-full p-5 text-white text-2xl justify-between'>
            <TbNumbers/>
            <MdOutlineSupervisorAccount/>
            <MdOutlineDescription/>
            <MdOutlineDateRange/>
            <TbCategory2/>
            <BsTicketDetailedFill/>
        </div>
        <div className='flex flex-col items-center gap-5'>
            {
                currentItems.map((item,index) => (
                    <div key={index} className='w-[100%] p-3 flex items-center justify-between' style={{background:'linear-gradient(10deg, rgba(86,179,132,1) 0%, rgba(216,233,144,1) 100%)'}}>
                        <span className='bg-white font-bold text-xl w-10 h-10 flex items-center justify-center shadow-[0px_0px_5px_1px_rgba(0,0,0,0.5)]'>{index+1}</span>
                        <div className='flex flex-col gap-1'>
                        <span className='text-lg font-bold'>{item.title}</span>
                        <span className='text-sm font-bold text-stone-600'>{item.manager}</span>
                        </div>
                        <p className='w-[30%] line-clamp-2 text-sm'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                        <span className='text-sm font-[shabnambold]'>1401/05/09</span>
                        <span className='text-sm font-[shabnambold] text-stone-600'>نرم افزار موبایل</span>
                        <button className='px-3 py-1 bg-[#025458] text-sm text-white shadow-md transition-all hover:bg-[#067378]' onClick={()=>setShowDetails({status:true,value:item})}>بیشتر</button>
                    </div>
                ))
            }
        </div>
     </div>
  )
}

export default All;