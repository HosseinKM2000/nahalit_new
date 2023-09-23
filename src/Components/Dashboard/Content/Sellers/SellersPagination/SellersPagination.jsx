import React from 'react'
import ReactPaginate from 'react-paginate'
import Sellers from '../Sellers'
import { useDispatch, useSelector } from 'react-redux';
import { getSellers } from '../../../../../features/dashboard/action';
import { useState } from 'react';
import { useEffect } from 'react';

function SellersPagination() {
  const [itemOffset, setItemOffset] = useState(0);
  const isLoading = useSelector(state => state.dashboard.sellerLoading);
  const sellers = useSelector(state => state.dashboard.sellers) || [];

  const dispatch = useDispatch();
  const mobile = window.innerWidth <= 425 ? true : false;
  const itemsPerPage = 20;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = sellers?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(sellers?.length / itemsPerPage);
  const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % sellers?.length;
      dispatch(setScrollUp());
      setItemOffset(newOffset)
    };     
  useEffect(()=> {
      dispatch(getSellers())
  },[])
console.log(sellers)
  return (
    <>
    {
      isLoading
      ?
     <div className='h-[4rem] w-full lg:w-[27%] flex items-center justify-center'>
      <img src={"/img/Ripple-0.8s-200px.svg"} alt="loading" className='w-[30%]'/>
     </div>
    :
    <div>
      <Sellers currentItems={currentItems} />
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
    </div>
    }
    </>
  )
}

export default SellersPagination