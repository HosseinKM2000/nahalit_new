import React, { useEffect, useRef } from 'react';
import { RiRestartFill } from 'react-icons/ri';
import { SlMagnifier } from 'react-icons/sl';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../../../features/dashboard/action';
import { deleteAllFilters, sortByCategory, sortByName } from '../../../../features/products/productSlice';
import { useSearchParams } from 'react-router-dom';

function CategoriesP() {
  const categories = useSelector(state => state.dashboard.categories);
  const isBeProducts = categories.find(cate => cate.title === "محصولات") === undefined ? false : true;
  const dispatch = useDispatch();
  const [searchParams,setSearchParams] = useSearchParams();
  let params = searchParams.get('category');
  let paramsKey = categories.find(cate => cate.title === params)?.id || "";
  const searchRef = useRef();

  useEffect(()=>{
    if(params !== null) {
      filterHandler(paramsKey)
    }
  },[paramsKey,categories])

  useEffect(()=> {
    dispatch(getCategories())
  },[])

  const searchHandler = (e,value) => {
    let searchValue = searchRef.current.value;
    if(e.key === 'Enter' || value === 'search')
    {
      dispatch(sortByName(searchValue))
    }
  }

  const filterHandler = (value) => {
    dispatch(sortByCategory(value))
  } 
  
  return (
    <div className='flex flex-col w-full mt-5 gap-3 2xl:gap-8'>
       <span className='px-3 py-3 text-sm font-[shabnamBold] text-stone-700' style={{borderRight:'solid 5px #02AAF1'}}>دسته بندی محصولات</span>
       <div style={{border:'solid 1px #AAAAC8'}} className='flex bg-[#ffffff] px-2 justify-between items-center w-full sm:w-[50%] lg:w-full 2xl:w-[70%]'>
       <input onKeyDown={(e)=>searchHandler(e)} onChange={(e)=>e.target.value === '' ? dispatch(sortByName('')) : null} ref={searchRef}  type="search" name="" id="" placeholder='جستجو...' className='p-1 text-sm font-[shabnamBold] text-stone-600 outline-none w-[90%]'/>
       <SlMagnifier onClick={(e)=>searchHandler(e,'search')} className='rounded-sm font-bold p-1 hover:bg-[#57C053] transition-all hover:text-white scale-150'/>
       </div>
       <div>
        {
          isBeProducts
          ?
          <fieldset className='text-xs  font-bold flex flex-col gap-5' onChange={(e)=>filterHandler(e.target.id)}>
          {
            categories.filter(cate => cate.category_id ===  categories.find(cate => cate.title === "محصولات").id).map(item => (
              <div key={item.id} className='flex flex-col items-start  gap-2'>
                <div className='flex items-center gap-1 text-stone-600 text-sm'>
                  <span className='font-[shabnamBold]'>{ item.title }</span>
                </div>
                <div className='flex flex-col gap-1 pr-3'>
                  {
                    categories.filter(Case => Case.category_id === item.id).map(Instance => (
                      <div className='flex items-center gap-1 text-stone-600'>
                        <input type="radio" name="cate" id={Instance.id} />
                        <label htmlFor={Instance.title} className='font-[shabnamBold]'>{Instance.title}</label>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
          </fieldset>
          :
          <></>
        }
        <section className='flex flex-col gap-5 my-5'>
          <div className='flex items-center gap-2 cursor-default text-stone-600  hover:text-red-600 transition-all'>
            <RiRestartFill className='scale-150'/>
            <span className='text-xs  font-[shabnamBold]' onClick={(e)=>dispatch(deleteAllFilters())}>پاکسازی فیلتر</span>
          </div>
        </section>
        {/* <div className='flex flex-col items-start text-sm w-full sm:w-[50%] lg:w-[100%] 2xl:w-[70%]'>
            <span style={{border:'solid 1px #DBDCDD'}} className='py-2 px-4 border-2 border-gray-white rounded-t-md font-[vasirbold]'>کلمات کلیدی بلاگ</span>
            <div style={{border:'solid 1px #DBDCDD'}} className='py-2 px-6 border-2 border-for-border'>
              {
                keyWord.map(item => (
                  <span className='text-sm text-gray-66 px-1 cursor-pointer hover:text-sky-blue'>{item}</span>
                ))
              }
            </div>
        </div> */}
       </div>
    </div>
  )
}

export default CategoriesP;