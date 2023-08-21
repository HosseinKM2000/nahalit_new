import classNames from 'classnames';
import React, { useState } from 'react';
import { BiMessageDetail } from 'react-icons/bi';

function Comments({ setShowDetails , currentItems }) {
  const [hover,setHover] = useState({status:false,key:''});
  
  return (
    <div className='flex flex-col gap-8 w-full p-10'>
      <span className='w-full text-white font-bold'>نظرات ( {currentItems !== null ? currentItems.length : 'NaN'} )</span>
      <div className='w-full flex flex-wrap justify-center gap-x-5 gap-y-10'>
      {
        currentItems.map((item,index) => (
          <div onMouseEnter={()=>setHover({status:true,key:index})} onMouseLeave={()=>setHover({status:false,key:''})} key={index} className='flex cursor-default relative w-[15rem] gap-3 transition-all duration-500 bg-white flex-col items-center rounded-lg p-2 shadow-[0px_3px_10px_1px_rgba(0,0,0,0.5)]'>
            <div className='relative transition-all duration-300 overflow-hidden rounded-lg shadow-[0px_3px_5px_1px_rgba(0,0,0,0.3)] bg-[#000]' style={{bottom:hover.status && hover.key === index?'0rem':'2rem'}}>
                <div className='text-[#ffff]  text-2xl p-2' style={{backgroundColor:`#${item.colorCode}`}}>
                <BiMessageDetail/>
                </div>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <span className='font-[shabnamBold]'>کاربر {item.name}</span>
              <p className='line-clamp-3 text-justify text-sm font-[shabnammedium] text-[#3c5a74] 2xl:py-5'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
              <div className='text-sm w-full justify-between flex mt-3 font-[shabnamBold] text-[#3a3a3a]'>
                <span className='text-white bg-green-700 rounded-full px-3 text-xs flex items-center'>تایید شده</span>
                <span  style={{color:`#${item.colorCode}`,textShadow:'0px 0px 1px #000'}}>1401/11/15</span>
              </div>
            </div>
            <div onClick={()=>{
              console.log('details')
              setShowDetails({status:true,item})
            }} style={{backgroundColor:`#${item.colorCode}`}} className={classNames('absolute top-0 right-0 w-full h-full rounded-lg flex items-center justify-center text-xl font-bold text-white opacity-0 transition-all duration-500',{
              'opacity-90':hover.status && hover.key === index
            })}>
              <span>نمایش</span>
            </div>
          </div>
        ))
      }
     </div>
    </div>
  )
}

export default Comments;