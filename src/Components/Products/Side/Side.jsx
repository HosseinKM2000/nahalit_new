import React from 'react';
import { useState } from 'react';
import {MdArrowLeft} from 'react-icons/md';
import PriceRange  from './components/PriceRange';
import CategoriesP from './CategoriesP/CategoriesP';
import { useRef } from 'react';

function Side() {

    const [fRotate,setFRotate] = useState(false);
    const [minPrice,setMinPrice] = useState(0);
    const [maxPrice,setMaxPrice] = useState(5000);
    const [minValue,setMinValue] = useState(20);
    const [maxValue,setMaxValue] = useState(300);
    const filterSelectRef = useRef();
    const selectHandle = (e) => {
    }
   const changeMinValue = (value) => { setMinValue(value) }
   const changeMaxValue = (value) => { setMaxValue(value) }

  return (
    <div className='flex w-full md:w-[50%] lg:w-[25%] flex-col pt-5 gap-5 2xl:gap-10'>
        <div className='flex flex-col gap-8  w-full items-start relative'>
        <div onClick={()=>setFRotate(!fRotate)} className='flex text-lg z-10 text-rose-950 bg-white items-center font-bold cursor-pointer hover:text-blue-500 transition-all'>
            <MdArrowLeft className='transition-all duration-300' style={{rotate:fRotate?'-90deg':''}}/>
            <span className='font-[vasirbold]'>فیلتر محصول</span>
            <div className='flex text-gray-600 text-base gap-1 mr-1'>
              <span>/نتایج:</span>
              <span>22</span>
              <span>محصول</span>
            </div>
        </div>
        <div className='flex items-center transition-all duration-300 z-0 gap-1 text-gray-600 absolute' style={{top:!fRotate?'0px':'2rem'}}>
            <span className='hover:text-blue-500 transition-all cursor-default 2xl:scale-150'>&#10006;</span>
            <span className='text-sm 2xl:text-xl font-extrabold'>پلاگین کاربردی</span>
        </div>
        </div>
        <select onChange={(e)=>selectHandle(e)} id="select" ref={filterSelectRef} className='text-sm font-[shabnamMedium] text-stone-600 outline-none mt-3 p-1' style={{border:'solid 1px #DBDCDD'}}>
             <option value="">مرتب سازی پیش فرض</option>
             <option value="popular">مرتب سازی بر اساس محبوبیت</option>
             <option value="rate">مرتب سازی بر اساس امتیاز</option>
             <option value="latest">مرتب سازی بر اساس آخرین</option>
             <option value="cheap">مرتب سازی بر اساس ارزان ترین</option>
             <option value="expensive">مرتب سازی بر اساس گرانترین</option>
        </select>
        <PriceRange minPoint={minPrice} maxPoint={maxPrice} minValue={minValue} maxValue={maxValue} steps={1} setMin={changeMinValue} setMax={changeMaxValue} />
        <CategoriesP/>
    </div>
  )
}

export default Side;