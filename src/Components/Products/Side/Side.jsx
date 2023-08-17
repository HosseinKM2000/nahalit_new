import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortByAll, sortByCheapest, sortByExpensive, sortByLatest, sortByPriceRange } from '../../../features/products/productSlice';
import CategoriesP from './CategoriesP/CategoriesP';
import PriceRange from './PriceRange/PriceRange';

function Side() {
    const [minPrice,setMinPrice] = useState(0);
    const [maxPrice,setMaxPrice] = useState(1000000);
    const [minValue,setMinValue] = useState(0);
    const [maxValue,setMaxValue] = useState(1000000);
    const filterSelectRef = useRef();
    const dispatch = useDispatch();

    const selectHandle = (e) => {
        switch(filterSelectRef.current.value) {
          case "latest" : dispatch(sortByLatest())
          break;
          case "cheapest" : dispatch(sortByCheapest())
          break;
          case "expensive" : dispatch(sortByExpensive())
          break;
          case "all" : dispatch(sortByAll())
          break;
          default : console.log()
        }
    }

    const changeMinValue = (value) => { 
      setMinValue(value)
      dispatch(sortByPriceRange({minValue,maxValue})) 
    }

    const changeMaxValue = (value) => { 
      setMaxValue(value)
      dispatch(sortByPriceRange({minValue,maxValue})) 
    }

  return (
    <div className='flex w-full pb-5 px-3 2xl:px-10 bg-[#f2f2f2] lg:w-[25%] flex-col pt-5 gap-5 2xl:gap-10'>
        <select onChange={(e)=>selectHandle(e)} id="select" ref={filterSelectRef} className='text-sm font-[shabnamMedium] text-stone-600 lg:w-[100%] w-full sm:w-[50%] outline-none mt-3 p-1 2xl:w-[70%]' style={{border:'solid 1px #DBDCDD'}}>
             <option value="" className='font-[shabnamMedium]'>مرتب سازی پیش فرض</option>
             <option value="all" className='font-[shabnamMedium]'>همه محصولات</option>
             <option value="latest" className='font-[shabnamMedium]'>مرتب سازی بر اساس آخرین</option>
             <option value="cheapest" className='font-[shabnamMedium]'>مرتب سازی بر اساس ارزان ترین</option>
             <option value="expensive" className='font-[shabnamMedium]'>مرتب سازی بر اساس گرانترین</option>
        </select>
        <PriceRange minPoint={minPrice} maxPoint={maxPrice} minValue={minValue} maxValue={maxValue} steps={500} setMin={changeMinValue} setMax={changeMaxValue} />
        <CategoriesP/>
    </div>
  )
}

export default Side;