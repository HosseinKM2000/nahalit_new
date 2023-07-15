import { React , useEffect , useState  } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector , useDispatch } from 'react-redux';
import AllArticles from '../AllArticles';
import { setScrollUp } from '../../../../../../features/dashboard/dashboardSlice';
import { getProducts } from '../../../../../../features/dashboard/action';
import loading from '../../../../../../assets/img/Ripple-0.8s-200px.svg';

function ArticlesPagination() {
    const [itemOffset, setItemOffset] = useState(0);
    const articles = useSelector(state => state.dashboard.products);
    const getLoading = useSelector(state => state.dashboard.productsLoading);
    const ListArticles = articles !== null ? articles.slice(0,100) : [{url:'url',title:'',id:1}];
    const mobile = window.innerWidth <= 425 ? true : false;
    const itemsPerPage = 11;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = ListArticles.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(ListArticles.length / itemsPerPage);
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getProducts())
    },[]);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % ListArticles.length;
      dispatch(setScrollUp());
      setItemOffset(newOffset);
    };


  return (
    <>
    {
      getLoading
      ?
      <div className='h-[10rem] w-[full] flex items-center justify-center'>
      <img src={loading} alt="loading" className='w-[30%] md:w-[10%]'/>
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