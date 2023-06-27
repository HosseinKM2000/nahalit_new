import { React , useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import AllProducts from '../AllProducts';
import { setScrollUp } from '../../../../../../features/dashboard/dashboardSlice';
import { getProducts } from '../../../../../../features/dashboard/action';
import loading from '../../../../../../assets/img/Ripple-0.8s-200px.svg';

function ProductsPagination() {

    const [itemOffset, setItemOffset] = useState(0);
    const products = useSelector(state => state.dashboard.products);
    const getLoading = useSelector(state => state.dashboard.productsLoading);
    const ListProducts = products !== null ? products.slice(0,100) : [{url:'url',title:'',id:1}];
    const dispatch = useDispatch();
    const mobile = window.innerWidth <= 425 ? true : false;
    const itemsPerPage = 11;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = ListProducts.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(ListProducts.length / itemsPerPage);
    useEffect(()=>{
      dispatch(getProducts())
      console.log(products)
    },[]);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % ListProducts.length;
      dispatch(setScrollUp());
      setItemOffset(newOffset);
    };


  return (
    <>
    {
      getLoading
      ?
      <div className='h-[10rem] w-[full] flex items-center justify-center'>
      <img src={loading} alt="loading" className='w-[10%]'/>
     </div>
     :
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
    }
  </>
  )
}

export default ProductsPagination;