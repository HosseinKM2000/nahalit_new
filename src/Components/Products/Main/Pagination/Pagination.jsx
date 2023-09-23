import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { getBaskets, getBasketsByUserId } from '../../../../features/cart/action';
import { Active, deActive } from '../../../../features/loading/loadingSlice';
import { getProducts } from '../../../../features/products/action';
import ProductsPage from '../ProductsPage/ProductsPage';
import './Pagination.css';
import Cookies from 'js-cookie';

function Pagination() {

    const [itemOffset, setItemOffset] = useState(0);
    const loginStatus = useSelector(state => state.authentication.loginStatus);
    const dispatch = useDispatch();
    const mobile = window.innerWidth <= 425 ? true : false;
    const itemsPerPage = 12;
    const products = useSelector(state => state.products.FilteredProducts);
    const isLoading = useSelector(state => state.products.isLoading);
    const baskets = useSelector(state => state.cart.baskets);
    const LoadingStatus = useSelector(state => state.cart.loading);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);
    const userId = loginStatus ? JSON.parse(Cookies.get("user"))?.id  : '';
  
    useEffect(() => {
      dispatch(getBasketsByUserId(userId));
      dispatch(getProducts());
    },[LoadingStatus])

    useEffect(()=>{
      isLoading ? dispatch(Active()) : dispatch(deActive());
    },[isLoading])
    
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % products.length;
      window.scrollTo({top:0,behavior:'instant'})
      setItemOffset(newOffset);
    };

  return (
    <>
    <ProductsPage currentItems={currentItems}/>
    <ReactPaginate
      breakLabel="..."
      nextLabel={mobile ? '>>' : "برگه بعدی >>"}
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel={mobile ? '<<' : "<< برگه قبلی"}
      renderOnZeroPageCount={null}
      className='pagination'
      activeClassName='active'
      previousClassName='preBtn'
      nextClassName='nextBtn'
    />
  </>
  )
}

export default Pagination;