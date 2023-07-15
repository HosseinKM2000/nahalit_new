import { React } from 'react';
import { FaImages } from 'react-icons/fa';
import { useDispatch , useSelector } from 'react-redux';
import { MdOutlineFormatListNumberedRtl , MdTitle } from 'react-icons/md';
import { BsCardImage } from 'react-icons/bs';
import { IoMdPricetags } from 'react-icons/io';
import { GrMoreVertical } from 'react-icons/gr';
import { TbBrandCashapp , TbCategory2 } from 'react-icons/tb';
import { setSwitch } from '../../../../../features/dashboard/dashboardSlice';

function AllProducts({currentItems}) {
  const dispatch = useDispatch();
  const products = useSelector(state => state.dashboard.products);

  return (
    <div className='flex flex-col w-full 2xl:w-[70%]'>
        <span className='w-full text-white font-bold'>تعداد محصولات ( {products !== null ? products.length : 'NaN'} )</span>
        {
        products !== null
        ?
        <>
        {
          products.length !== 0
          ?
          <div className='flex flex-row md:flex-col my-8 gap-5'>
          <div className='hidden md:flex  items-center bg-[#ffffff69] w-full p-5 text-white text-2xl justify-between'>
            <MdOutlineFormatListNumberedRtl/>
            <BsCardImage/>
            <MdTitle/>
            <TbBrandCashapp/>
            <TbCategory2/>
            <IoMdPricetags/>
            <GrMoreVertical className='rotate-90'/>
          </div>
          <div className='flex flex-row flex-wrap justify-center md:flex-col w-full gap-5'>
            {
              currentItems.map((product,index) => (
                <div key={index} className='flex w-[80%] sm:w-[45%] md:w-full flex-col gap-y-3 md:flex-row shadow-[1px_1px_5px_1px_rgba(0,0,0,0.5)] justify-between font-bold items-start md:items-center transition-all duration-300 hover:bg-[#fefefed6] bg-[#fefefeb5] pe-2 ps-3 py-3 rounded-sm'>
                <span className='text-lg text-stone-600 hidden md:block' style={{textDecoration:'solid underline #575366'}}>{product.id}</span>
                <img src={product.url} alt={'h'}  className='w-full md:w-[5rem] md:h-[5rem] bg-red-600'/>
                <span className='w-full md:w-[20%] line-clamp-2 text-sm leading-5 font-[shabnambold] text-start text-slate-700  text-wrap'>{'محصول پیش فرض نهال آی تی'}</span>
                <div className='flex items-center gap-1 text-[#2956e7] font-[shabnambold]'>
                  <span>200000</span>
                  <span>تومان</span>
                </div>
                <span className='text-stone-600 font-[shabnambold] text-sm'>لباس مردانه</span>
                <span className='text-[#724cc4] font-[shabnambold] text-sm'>50%</span>
                <div className='flex w-full items-center md:w-fit flex-col gap-y-2'>
                <div className='flex w-full items-center gap-x-1 text-sm'>
                  <button className='text-white w-[50%] md:w-fit p-1 bg-orange-600 rounded-sm transition-all hover:bg-orange-500' type="button" onClick={(e)=>dispatch(setSwitch({key:'products',value:'edite',id:product.id}))}>ویرایش</button>
                  <button className='text-white w-[50%] md:w-fit p-1 bg-red-600 rounded-sm transition-all hover:bg-red-500' type="button">حذف</button>
                </div>
                <button className='w-full transition-all hover:bg-[#5cc7c0] py-1 text-xl text-white flex items-center justify-center bg-[#47a9a3] rounded-sm' onClick={(e)=>dispatch(setSwitch({key:'products',value:'gallery',id:product.id}))}><FaImages/></button>
                </div>
              </div>
              ))
            }
        </div>
        </div>
          :
          <span>محصولی وجود ندارد</span>
        }
        </>
        :
        <span>didnt resived produtcs</span>
      }
    </div>
  )
}

export default AllProducts;