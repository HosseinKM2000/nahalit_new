import { React, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import loading from '../../../../../../assets/img/Ripple-0.8s-200px.svg';
import { getProducts } from '../../../../../../features/dashboard/action';
import { setScrollUp } from '../../../../../../features/dashboard/dashboardSlice';
import AllProducts from '../AllProducts';
import EditProduct from '../../EditProduct/EditProduct';

function ProductsPagination() {
    const [isEdit,setIsEdit] = useState({status:false,value:""});
    const [itemOffset, setItemOffset] = useState(0);
    const products = useSelector(state => state.dashboard.products);
    const productsLoading = useSelector(state => state.dashboard.productsLoading);
    const deleteProductSuccess = useSelector(state => state.dashboard.deleteProductSuccess);
    const mobile = window.innerWidth <= 425 ? true : false;
    const itemsPerPage = 10;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(getProducts())
    },[deleteProductSuccess]);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % products.length;
      dispatch(setScrollUp());
      setItemOffset(newOffset);
    };


  return (
    <>
     {
      isEdit.status
      ?
      <EditProduct isEdit={isEdit} setIsEdit={setIsEdit}/>
      :
      <>
        {
          productsLoading
          ?
          <div className='h-[10rem] w-[full] flex items-center justify-center'>
            <img src={loading} alt="loading" className='w-[30%]'/>
          </div>
        :
        <>
          <AllProducts currentItems={currentItems} setIsEdit={setIsEdit} productsLoading={productsLoading}/>
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
     }
    </>
  )
}

export default ProductsPagination;