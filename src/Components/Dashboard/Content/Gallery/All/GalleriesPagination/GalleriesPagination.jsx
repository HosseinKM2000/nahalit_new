import { React , useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import All from '../All';
import { setScrollUp } from '../../../../../../features/dashboard/dashboardSlice';
import { getProducts } from '../../../../../../features/dashboard/action';
import loading from '../../../../../../assets/img/Ripple-0.8s-200px.svg';

function GalleriesPagination() {

    const [itemOffset, setItemOffset] = useState(0);
    const getLoading = useSelector(state => state.dashboard.productsLoading);
    const list = useSelector(state => state.dashboard.products);
    const photos = list !== null ? list.slice(0,100) : [{url:'',title:'title'}];
    const dispatch = useDispatch();
    const mobile = window.innerWidth <= 425 ? true : false;
    const itemsPerPage = 30;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = photos.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(photos.length / itemsPerPage);
    useEffect(()=>{
        dispatch(getProducts())
    },[]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % photos.length;
        dispatch(setScrollUp());
        setItemOffset(newOffset)
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
    <All currentItems={currentItems} />
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

export default GalleriesPagination;