import React from 'react';
import { useRef } from 'react';
import {TbDiscount2} from 'react-icons/tb';
import {MdLocalGroceryStore} from 'react-icons/md';
import {RiRestartFill} from 'react-icons/ri';
import { keyWord } from '../../../../API/data';
import {SlMagnifier} from 'react-icons/sl';

function CategoriesP() {

  const searchRef = useRef();
  const searchHandler = (e,value) => {
    if(e.key === 'Enter' || value === 'search')
    {
      
    }
  }

  return (
    <div className='flex flex-col w-full mt-5 gap-3'>
       <span className='px-3 py-3 text-sm font-[vasirbold] text-stone-700' style={{borderRight:'solid 5px #02AAF1'}}>دسته بندی محصولات</span>
       <div style={{border:'solid 1px #AAAAC8'}} className='flex px-2 justify-between items-center w-[80%]'>
       <input onKeyDown={(e)=>searchHandler(e)} ref={searchRef} type="search" name="" id="" placeholder='جستجو...' className='p-1 text-sm font-bold text-stone-600 outline-none w-[90%]'/>
       <SlMagnifier onClick={(e)=>searchHandler(e,'search')} className='rounded-sm font-bold p-1 hover:bg-[#57C053] transition-all hover:text-white scale-150'/>
       </div>
       <div>
        <fieldset className='text-xs font-bold flex flex-col gap-5'>
          <div className='flex flex-col items-start  gap-2'>
            <div className='flex items-center gap-1'>
            <input type="radio" name="cate" id="mobileApp" />
            <label htmlFor="mobileApp">اپلیکیشن موبایل</label>
            </div>
            <div className='flex flex-col gap-1 pr-3'>
              <div className='flex items-center gap-1 text-stone-600'>
                <input type="radio" name="cate" id="andriodApp" />
                <label htmlFor="andriodApp">اپلیکیشن اندروید</label>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-start  gap-2'>
          <div className='flex items-center gap-1'>
            <input type="radio" name="cate" id="scrypts"/>
            <label htmlFor="scrypts">اسکریپت ها</label>
          </div>
          <div className='flex flex-col gap-1 pr-3'>
              <div className='flex items-center gap-1 text-stone-600'>
                <input type="radio" name="cate" id="ExScrypt" />
                <label htmlFor="ExScrypt">اسکریپت اختصاصی سیستم</label>
              </div>
              <div className='flex items-center gap-1 text-stone-600'>
                <input type="radio" name="cate" id="laravelScrypt" />
                <label htmlFor="laravelScrypt">اسکریپت لاراول</label>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-start  gap-2'>
          <div className='flex items-center gap-1'>
            <input type="radio" name="cate" id=""/>
            <label htmlFor="">سایت های آماده</label>
          </div>
          <div className='flex flex-col gap-1 pr-3'>
              <div className='flex items-center gap-1 text-stone-600'>
                <input type="radio" name="cate" id="readyLaravel" />
                <label htmlFor="readyLaravel">سایت آماده لاراول</label>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-start  gap-2'>
          <div className='flex items-center gap-1'>
            <input type="radio" name="cate" id=""/>
            <label htmlFor="">قالب HTML</label>
          </div>
          <div className='flex flex-col gap-1 pr-3'>
              <div className='flex items-center gap-1 text-stone-600'>
                <input type="radio" name="cate" id="packForm" />
                <label htmlFor="packForm">پک فرم</label>
              </div>
              <div className='flex items-center gap-1 text-stone-600'>
                <input type="radio" name="cate" id="userPanel" />
                <label htmlFor="userPanel">پنل کاربری</label>
              </div>
              <div className='flex items-center gap-1 text-stone-600'>
                <input type="radio" name="cate" id="newsTemplate" />
                <label htmlFor="newsTemplate">قالب خبری</label>
              </div>
              <div className='flex items-center gap-1 text-stone-600'>
                <input type="radio" name="cate" id="personTemplate" />
                <label htmlFor="personTemplate">قالب شخصی</label>
              </div>
              <div className='flex items-center gap-1 text-stone-600'>
                <input type="radio" name="cate" id="corporate" />
                <label htmlFor="corporate">قالب شرکتی</label>
              </div>
              <div className='flex items-center gap-1 text-stone-600'>
                <input type="radio" name="cate" id="storeTemplate" />
                <label htmlFor="storeTemplate">قالب فروشگاهی</label>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-start  gap-2'>
          <div className='flex items-center gap-1'>
            <input type="radio" name="cate" id=""/>
            <label htmlFor="">قالب و پلاگین</label>
          </div>
          <div className='flex flex-col gap-1 pr-3'>
              <div className='flex items-center gap-1 text-stone-600'>
                <input type="radio" name="cate" id="wordpressPlugin" />
                <label htmlFor="wordpressPlugin">پلاگین های وردپرس</label>
              </div>
              <div className='flex flex-col pr-3 gap-1'>
              <div className='flex items-center gap-1 text-stone-500'>
                <input type="radio" name="cate" id="securityPlugin" />
                <label htmlFor="securityPlugin">پلاگین امنیتی</label>
              </div>
              <div className='flex items-center gap-1 text-stone-500'>
                <input type="radio" name="cate" id="practicalPlugin" />
                <label htmlFor="practicalPlugin">پلاگین کاربردی</label>
              </div>
              </div>
            </div>
            <div className='flex flex-col gap-1 pr-3'>
              <div className='flex items-center gap-1 text-stone-600'>
                <input type="radio" name="cate" id="newsWordpressPlugin" />
                <label htmlFor="newsWordpressPlugin">قالب خبری</label>
              </div>
              <div className='flex flex-col'>
              </div>
              </div>
          </div>
        </fieldset>
        <section className='flex flex-col gap-5 my-10'>
          <div className='flex items-center gap-2 cursor-default text-stone-600  hover:text-red-600 transition-all'>
            <TbDiscount2 className='scale-150'/>
            <span className='text-xs font-bold'>فقط نمایش محصولات حراجی</span>
          </div>
          <div className='flex items-center gap-2 cursor-default text-stone-600  hover:text-red-600 transition-all'>
            <MdLocalGroceryStore className='scale-150'/>
            <span className='text-xs font-bold'>فقط موجود</span>
          </div>
          <div className='flex items-center gap-2 cursor-default text-stone-600  hover:text-red-600 transition-all'>
            <RiRestartFill className='scale-150'/>
            <span className='text-xs font-bold'>پاکسازی فیلتر</span>
          </div>
        </section>
        <div className='flex flex-col items-end text-sm'>
            <span style={{border:'solid 1px #DBDCDD'}} className='py-2 px-4 border-2 border-gray-white 2xl:text-5xl rounded-t-md font-[vasirbold]'>کلمات کلیدی بلاگ</span>
            <div style={{border:'solid 1px #DBDCDD'}} className='py-2 px-6 border-2 border-for-border'>
              {
                keyWord.map(item => (
                  <span className='text-base 2xl:text-5xl 2xl:leading-normal text-gray-66 px-1 cursor-pointer hover:text-sky-blue'>{item}</span>
                ))
              }
            </div>
          </div>
       </div>
    </div>
  )
}

export default CategoriesP;