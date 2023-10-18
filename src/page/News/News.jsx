import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { Link , useSearchParams , useNavigate} from 'react-router-dom';
import Pagination from './Pagination/Pagination';
import { useEffect } from 'react';
import {getAllNews} from '../../features/news/action';
import Loading from '../Loading/Loading';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import ResponseHeader from '../../Components/ResponseHeader/ResponseHeader';
import FixedIcon from '../../Components/FixedIcon/FixedIcon';

function News() {

  const loading = useSelector(state => state.news.loading);
  const dispatch = useDispatch();
  const [params,setSearchParams] = useSearchParams();
  const pageNumber = params.get('page');
  const navigate = useNavigate();
  const query = useSelector(state => state.news.number)
  useEffect(() => { 
    if(query === null)
    {
      navigate(`/news`)
    }
   },[])
 
  

  return (
      <div className='w-[100vw] flex flex-col'>
      <header className='max-lg:hidden'>
        <Header/>
      </header>
      <div className="lg:hidden">
          <ResponseHeader />
      </div>
      <div className='flex flex-col w-full px-5 sm:px-14 py-5'>
        <div className='flex flex-row justify-start gap-10 text-sm'>
          <Link to='/' className='text-gray-66 hover:text-sky-blue transition-all'>صفحه اصلی</Link>
          <Link to='/news' className='text-gray-88 hover:text-sky-blue transition-all'>اخبار سایت</Link>
          {
            query !== null ?
            <span className='text-gray-88 font-thin'>برگه{pageNumber}</span>
            : <></>
          }
        </div>
        <div className='flex flex-row py-10 text-sm  gap-1 text-gray-66'>
          <span>دسته:</span>
          <span>اخبارسایت</span>
        </div>
        <Pagination/>
      </div>
      <div>
        <FixedIcon />
      </div>
      <footer>
        <Footer/> 
      </footer>
      </div>
  )
}

export default News;



