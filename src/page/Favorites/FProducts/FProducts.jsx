import React, { useState , useEffect } from 'react';
import EmptyFavorite from '../../../Components/EmptyFavorite/EmptyFavorite';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../features/products/action';

function FProducts() {
    const [favoritePro,setFavoritePro] = useState([]);
    const products = useSelector(state => state.products.products);
    const [favProductsID,setFavProductsID] = useState(localStorage.getItem('favProducts') === null ? [] : JSON.parse(localStorage.getItem('favProducts')));
    const location = useLocation();
    const dispatch = useDispatch();
    const urlPath = location.pathname;

    useEffect(() => {
        dispatch(getProducts())
    },[])

    const filterProductsById = (ids, products) => {
        const filteredProducts = []; 
        for (let i = 0; i < products.length; i++) {
          const product = products[i];
      
          if (ids.includes(product.id)) {
            filteredProducts.push(product);
          }
        }
        return filteredProducts;
    }

    const deleteFromFavorites = (id) => {
        setFavoritePro(favoritePro.filter(item => item.id !== id));
        let list = JSON.stringify(favProductsID.filter(item => item !== id))
        setFavProductsID(favProductsID.filter(item => item !== id));
        localStorage.setItem('favProducts',list);
    }

    useEffect(() => {
        if(favProductsID.length !== 0) setFavoritePro(filterProductsById(favProductsID,products))
    },[])

  return (
    <div>
        {
            favProductsID.length === 0
            ?
            <EmptyFavorite title={'محصولات'}/>
            :
            <div className='flex flex-col gap-y-5 md:gap-y-3 bg-gray-100 p-5'>
                {
                    favoritePro.map((item,index) => (
                        <div key={index} className='flex flex-col gap-y-3 sm:gap-y-5 md:flex-row items-center bg-gray-200 px-3 py-2 justify-between rounded-sm shadow-[0px_0px_10px_-6.5px_#010101]'>
                            <img src="" alt="img"  className={urlPath === '/userPage/favorites' ? 'w-[3rem] h-[3rem] bg-gray-600' : 'md:w-[3rem] md:h-[3rem] w-[5rem] h-[5rem] bg-gray-600'}/>
                            <span className='text-[1rem] font-[shabnambold] text-stone-500 w-[5rem] line-clamp-1'>{item.title}</span>
                            <p className={urlPath === '/userPage/favorites' ? 'w-[10rem] 2xl:w-[15rem] line-clamp-1 text-sm' : 'w-[10rem] md:w-[15rem] line-clamp-3 md:line-clamp-1 text-sm text-center'}>متن آزمایشی برای تست پروژه ها  شسیسبسیبس سیزسیبیسبسیبیسبی کوچک</p>
                            <span className='text-sm font-[shabnambold]'>1401/03/15</span>
                            <Link to={`/shop/product/${item.id}`} className='bg-[#E7B10A] shadow-base text-white rounded-md px-0 w-1/2 md:w-fit md:px-2 lg:px-5 text-xs transition-all hover:brightness-105 py-1'>نمایش</Link>
                            <button className='bg-red-500 text-white rounded-md px-0 w-1/2 md:w-fit md:px-2 lg:px-5 text-xs transition-all hover:bg-red-400 py-1' onClick={()=>deleteFromFavorites(item.id)}>حذف</button>
                        </div>
                    ))
                }
            </div>
        }
    </div>
  )
}

export default FProducts;