import React from 'react';
import './Pagination.css';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { useSearchParams  , useNavigate} from 'react-router-dom';
import ProductsPage from '../ProductsPage/ProductsPage';

function Pagination() {

    const [itemOffset, setItemOffset] = useState(0);
    const [params] = useSearchParams()
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const mobile = window.innerWidth <= 425 ? true : false;
    const itemsPerPage = 12;
    const products = useSelector(state => state.products.products);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);
  

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % products.length;
      window.scrollTo({top:0,behavior:'instant'})
      navigate(`/shop?page=${event.selected+1}`)
      setItemOffset(newOffset);
    };


  return (
    <>
    <ProductsPage currentItems={currentItems} />
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