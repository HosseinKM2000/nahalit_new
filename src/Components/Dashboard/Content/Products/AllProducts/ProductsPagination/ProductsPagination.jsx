import React from 'react';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import AllProducts from '../AllProducts';
import { setScrollUp } from '../../../../../../features/dashboard/dashboardSlice';

function ProductsPagination() {

    const [itemOffset, setItemOffset] = useState(0);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const mobile = window.innerWidth <= 425 ? true : false;
    const itemsPerPage = 11;
    const products = useSelector(state => state.dashboard.products);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);
  

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % products.length;
      dispatch(setScrollUp());
      setItemOffset(newOffset);
    };


  return (
    <>
    <AllProducts currentItems={currentItems} />
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

export default ProductsPagination;