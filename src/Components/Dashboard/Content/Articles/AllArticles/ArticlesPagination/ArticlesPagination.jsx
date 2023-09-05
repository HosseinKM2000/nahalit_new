import { React, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import loading from '../../../../../../assets/img/Ripple-0.8s-200px.svg';
import { getBlogs } from '../../../../../../features/dashboard/action';
import { setScrollUp } from '../../../../../../features/dashboard/dashboardSlice';
import AllArticles from '../AllArticles';

function ArticlesPagination() {
    const [itemOffset, setItemOffset] = useState(0);
    const articles = useSelector(state => state.dashboard.blogs) || [];
    const Loading = useSelector(state => state.dashboard.blogsLoading);
    const ListArticles = articles !== null ? articles.slice(0,100) : [{url:'url',title:'',id:1}];
    const mobile = window.innerWidth <= 425 ? true : false;
    const itemsPerPage = 11;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = ListArticles.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(ListArticles.length / itemsPerPage);
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getBlogs())
    },[]);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % ListArticles.length;
      dispatch(setScrollUp());
      setItemOffset(newOffset);
    };


  return (
    <>
    {
      Loading
      ?
      <div className='h-[10rem] w-[full] flex items-center justify-center'>
      <img src={loading} alt="loading" className='w-[30%]'/>
     </div>
     :
     <>
      <AllArticles currentItems={currentItems} />
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

export default ArticlesPagination;