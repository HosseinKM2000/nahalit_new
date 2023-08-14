import React, { useRef, useState } from 'react';
import CategoriesP from './CategoriesP/CategoriesP';
import PriceRange from './components/PriceRange';

function Side() {
    const [minPrice,setMinPrice] = useState(0);
    const [maxPrice,setMaxPrice] = useState(5000);
    const [minValue,setMinValue] = useState(0);
    const [maxValue,setMaxValue] = useState(5000);
    const filterSelectRef = useRef();
    const selectHandle = (e) => {
    }
   const changeMinValue = (value) => { setMinValue(value) }
   const changeMaxValue = (value) => { setMaxValue(value) }

  return (
    <div className='flex w-full pb-5 px-3 2xl:px-10 bg-[#f2f2f2] lg:w-[25%] flex-col pt-5 gap-5 2xl:gap-10'>
        <select onChange={(e)=>selectHandle(e)} id="select" ref={filterSelectRef} className='text-sm font-[shabnamMedium] text-stone-600 lg:w-[100%] w-full sm:w-[50%] outline-none mt-3 p-1 2xl:w-[70%]' style={{border:'solid 1px #DBDCDD'}}>
             <option value="" className='font-[shabnamMedium]'>مرتب سازی پیش فرض</option>
             <option value="latest" className='font-[shabnamMedium]'>مرتب سازی بر اساس آخرین</option>
             <option value="cheap" className='font-[shabnamMedium]'>مرتب سازی بر اساس ارزان ترین</option>
             <option value="expensive" className='font-[shabnamMedium]'>مرتب سازی بر اساس گرانترین</option>
        </select>
        <PriceRange minPoint={minPrice} maxPoint={maxPrice} minValue={minValue} maxValue={maxValue} steps={500} setMin={changeMinValue} setMax={changeMaxValue} />
        <CategoriesP/>
    </div>
  )
}

export default Side;