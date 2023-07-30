import React from 'react';
import { BsBag, BsCalendar4 } from 'react-icons/bs';
import { FaEye, FaShoppingBag } from 'react-icons/fa';
import { HiCurrencyDollar } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function ProductsPage({currentItems}) {
  return (
    <div className='w-full flex flex-wrap gap-5 justify-center py-5 px-3'>
                {
            currentItems.map((product,index) => (
                <>
                <div key={index} className='w-full 2xl:w-[23%] z-0 2xl:h-[50rem] sm:w-[45%] md:w-[30%] lg:w-[31%] flex justify-between flex-col sm:gap-1 xl:h-[45rem] h-fit relative sm:h-[40rem] lg:h-[35rem] bg-stone-200 rounded-md overflow-hidden'>
                    <div className='absolute flex items-center gap-1 bg-[#F19B1E] text-white text-xs 2xl:text-lg font-bold py-1 px-3 rounded-2xl left-1 top-3'>
                     <span>{17}%</span>
                     <span>تخفیف</span>
                    </div>
                    <FaEye className='absolute 2xl:text-2xl right-1 top-3  rounded-full bg-lime-600 px-1 text-xl text-white font-bold'/>
                    <img src={product.img} alt={product.title} className='hover:brightness-125 transition-all'/>
                    <div className='px-1 py-1'>
                        <h1 className='text-[0.9rem] 2xl:text-xl leading-5 font-bold text-stone-600'>{product.title}</h1>
                    </div>
                    <div className='px-1 py-2 flex items-center gap-3'>
                        {
                            product.tags.map((tag,index) => (
                                <Link to={''} key={index} className='text-[0.7rem] bg-stone-400 font-bold text-white p-1 rounded-lg'>{tag}</Link>
                            ))
                        }
                    </div>
                    <p className='line-clamp-3 2xl:text-lg text-[0.8rem] leading-5 text-stone-500 w-full px-1 font-[shabnamMedium] my-2 xl-line-clamp-2'>{product.explain}</p>
                    <div className='w-full flex items-center justify-between text-stone-500 2xl:text-lg text-xs p-1'>
                        <div className='flex items-center gap-1'>
                          <BsCalendar4/>
                          <span>{product.date}</span>
                        </div>
                        <div className='flex items-center gap-2 font-[shabnamMedium]'>
                            <BsBag className='text-lime-500 scale-150'/>
                            <span>0</span>
                        </div>
                    </div>
                    <div className='w-full flex items-center 2xl:text-lg font-bold px-2 text-xs my-3 gap-1'>
                        <HiCurrencyDollar className='text-yellow-600 scale-150'/>
                        <del className='flex gap-1 items-center text-red-600'>
                          <span>8,800,000</span>
                          <span>تومان</span>
                        </del>
                        <span>-</span>
                    <div className='flex gap-1 items-center text-stone-500'>
                        <span>8,000,000</span>
                        <span>تومان</span>
                    </div>
                    </div>
                    <Link to={`/shop/product/${product.title}`} className='flex items-center mx-3 mb-3 bg-lime-600 hover:bg-lime-500 transition-all duration-300 justify-center gap-1 text-white py-1 text-sm 2xl:text-lg font-bold rounded-md'>
                        <FaShoppingBag/>
                        <span>خرید محصول</span>
                    </Link>
                </div>              
                </>
            ))
        }
    </div>
  )
}

export default ProductsPage