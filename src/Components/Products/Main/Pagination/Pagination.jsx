import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ProductsPage from '../ProductsPage/ProductsPage';
import { getBaskets } from '../../../../features/cart/action';
import { ToastContainer } from 'react-toastify';
import './Pagination.css';
import axios from 'axios';

function Pagination() {

    const [itemOffset, setItemOffset] = useState(0);
    const [params] = useSearchParams()
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const mobile = window.innerWidth <= 425 ? true : false;
    const itemsPerPage = 12;
    const products = useSelector(state => state.products.products);
    const baskets = useSelector(state => state.cart.baskets);
    const LoadingStatus = useSelector(state => state.cart.loading);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);
  
    useEffect(() => {
      dispatch(getBaskets());
    },[LoadingStatus])

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % products.length;
      window.scrollTo({top:0,behavior:'instant'})
      navigate(`/shop?page=${event.selected+1}`)
      setItemOffset(newOffset);
    };


  return (
    <>
      {/* toaster */}
    <ToastContainer 
    position='top-center'
    theme='colored'
    autoClose={2500}
    className='Toast_info'
    />
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