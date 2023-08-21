import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsBag, BsCalendar4, BsFillBagFill } from 'react-icons/bs';
import { FaEye, FaShoppingBag } from 'react-icons/fa';
import { HiCurrencyDollar } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import loadingSvg from '../../../../assets/img/Pulse-1.2s-229px.svg';
import { addBasket } from '../../../../features/cart/action';
import HTMLRenderer from 'react-html-renderer';


function ProductsPage({currentItems}) {
    const [criterion,setCriterion] = useState(true);
    const [favorites,setFavorites] = useState([]);
    const [keyLoading,setKeyLoading] = useState();
    const userId = JSON.parse(Cookies.get('user')).id;
    const dispatch = useDispatch();
    const baskets = useSelector(state => state.cart.baskets);
    const LoadingStatus = useSelector(state => state.cart.loading);
    const userBasketItems = baskets.length !== 0 ? baskets.filter(item => item.user_id === userId ) : []
    const goalIds = userBasketItems.map(item => item.product_id);

    useEffect(() => {
        const list = JSON.parse(localStorage.getItem('favProducts'));
        if(list) {
          setFavorites(list); 
        }
      },[])

    useEffect(() => {
        if(criterion) {
            setCriterion(false);
            return;
        }
        localStorage.setItem('favProducts', JSON.stringify(favorites))
    },[favorites])

    const addToFavorite = (id) => {
        setFavorites(favorites.concat(id));
    }

    const deleteFromFavorites = (id) => {
        setFavorites(favorites.filter(key => key !== id));
    }

    const addToBasket = (id) => {
        dispatch(addBasket({user_id:userId,product_id:id}))
    }

  return (
    <>
      {/* toaster */}
      <ToastContainer 
        position='top-center'
        theme='colored'
        autoClose={2500}
        className='Toast_info'
      />
      <div className='w-full flex flex-wrap gap-5 justify-center py-5 px-3'>
        {
            currentItems.length === 0 
            ? 
             <div className='h-[100dvh] flex justify-content items-center text-xl'>
                <h1 className='font-[shabnamBold] text-stone-600'>محصولی یافت نشد!</h1>
             </div>
            :
            <>
            {
            currentItems?.map((product,index) => (
                <>
                <div key={product.id} className='w-[20rem] z-0 3xl:w-[23%] sm:w-[45%] md:w-[30%] lg:w-[31%] flex justify-between flex-col sm:gap-1  relative bg-stone-200 rounded-md overflow-hidden' style={{boxShadow: '0px 0px 5px 0px #919191'}}>
                    <div className='absolute flex items-center gap-1 bg-[#F19B1E] text-white text-xs font-bold py-1 px-3 rounded-2xl left-1 top-3'>
                        <span>{17}%</span>
                        <span>تخفیف</span>
                    </div>
                    <FaEye className='absolute 2xl:text-2xl right-1 top-3  rounded-full bg-lime-600 px-1 text-xl text-white font-bold'/>
                    <img src={product.image} alt={product.title} className='hover:brightness-125 transition-all'/>
                    <div className='px-1 py-1'>
                        <h1 className='text-[0.9rem] leading-5 font-bold text-stone-600'>{product.title}</h1>
                    </div>
                    {/* <div className='px-1 py-2 flex items-center gap-3'>
                        {
                            product.tags.map((tag,index) => (
                                <Link to={''} key={index} className='text-[0.7rem] bg-stone-400 font-bold text-white p-1 rounded-lg'>{tag}</Link>
                            ))
                        }
                    </div> */}
                    <div className='line-clamp-3 text-[0.8rem] leading-5 text-stone-500 w-full px-1 font-[shabnamMedium] my-2'>
                        <HTMLRenderer html={product.description}/>
                    </div>
                    <div className='w-full flex items-center justify-between text-stone-500 text-xs p-1'>
                        <div className='flex items-center gap-1'>
                            <BsCalendar4/>
                            <span className='font-[shabnambold]'>{product.created_at}</span>
                        </div>
                        <div className='flex items-center gap-5 font-[shabnamMedium] px-1'>
                            <AiOutlineHeart className={ favorites.includes(product.id) ? 'hidden' : 'block scale-[1.5]' } onClick={()=>{
                            addToFavorite(product.id)
                            }}/>
                            <AiFillHeart className={ favorites.includes(product.id) ? 'block text-red-600 scale-[1.5] hover:text-red-500 transition-all' : 'hidden' } onClick={()=>{
                            deleteFromFavorites(product.id)
                            }}/>
                            {
                                LoadingStatus && keyLoading === product.id
                                ?
                                <img src={loadingSvg} alt="loading" className='w-[1rem]'/>
                                :
                                <>
                                <BsBag className={ goalIds.length !== 0 && goalIds.includes(product.id) ? 'hidden' : 'text-lime-500 scale-150 block' } onClick={()=>{
                                    addToBasket(product.id)
                                    setKeyLoading(product.id)
                                }}/>
                                <BsFillBagFill className={ goalIds.length !== 0 && goalIds.includes(product.id) ? 'text-lime-500 scale-150 block' : 'hidden' } onClick={()=>toast.info("برای مدیریت محصولات به سبد خرید بروید")}/>
                                </>
                            }
                        </div>
                    </div>
                    <div className='w-full flex items-center font-bold px-2 text-xs my-3 gap-1'>
                        <HiCurrencyDollar className='text-yellow-600 scale-150'/>
                        <del className='flex gap-1 items-center text-red-600'>
                        <span>{product.price}</span>
                        <span>تومان</span>
                        </del>
                        <span>-</span>
                    <div className='flex gap-1 items-center text-stone-500'>
                        <span>{product.price}</span>
                        <span>تومان</span>
                    </div>
                    </div>
                    <Link to={`/shop/product/${product.title}`} className='flex items-center mx-3 mb-3 bg-lime-600 hover:bg-lime-500 transition-all duration-300 justify-center gap-1 text-white py-1 text-sm font-bold rounded-md'>
                        <FaShoppingBag/>
                        <span>خرید محصول</span>
                    </Link>
                </div>              
                </>
            ))
            }
            </>
        }
      </div>
    </>
  )
}

export default ProductsPage