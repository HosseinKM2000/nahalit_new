import React from 'react';
import './Articles.css';
import { useSelector } from 'react-redux';
import {AiFillFolder} from 'react-icons/ai';
import {ImEye} from 'react-icons/im';
import {TfiMenuAlt} from 'react-icons/tfi'
import { Link , useNavigate} from 'react-router-dom';
import Header from '../../Components/Header/Header';
import ResponseHeader from '../../Components/ResponseHeader/ResponseHeader';
import Footer from '../../Components/Footer/Footer';
import FixedIcon from '../../Components/FixedIcon/FixedIcon';

const Articles = () => {

    const navigate = useNavigate()
    const articles = useSelector(state => state.articles.articles)
    console.log(articles)
  return (
      <main>
            <header>
    <div className="max-lg:hidden">
      <Header />
    </div>
    <div className="lg:hidden">
      <ResponseHeader />
    </div>
  </header>
    <div className='flex justify-center items-center w-full min-h-screen text-right articles-content'>
      <div className='flex flex-col p-2 2xl:w-9/12 sm:w-11/12 justify-center items-center'>
        <div className='flex w-full flex-row justify-evenly mb-5 border-2 bg-gray_99 p-1 border-white-e9 text-gray-88 mt-10'>
            <span className='font-bold text-gray-500 text-xs sm:text-sm 2xl:text-4xl'>آخرین مطالب نهال آی تی</span>
            <span className='text-gray-500 text-xs sm:text-sm 2xl:text-4xl'>Latest Posts Blog</span>
        </div>
        <div className='flex sm:flex-wrap flex-col sm:flex-row justify-between items-center'>
            {
                articles.map((article , index) => (
                    <div className='flex flex-col article mb-10' key={index}>
                        <img onClick={() => navigate(`/articles/article?name=${article.title}`)} src={article.img} alt={article.title} className='hover:brightness-125 cursor-pointer transition-all' />
                        <Link to={{pathname:'/articles/article', search:`?name=${article.title}`}} className='pt-2 pb-10 text-gray-66 font-semibold  title hover:text-gray-88 transition-all'>{article.title}</Link>
                        <p className='text-gray-500 text-gray-88 text-sm line-clamp-3  leading-loose  Description'>{article.explain}</p>
                        <div className='flex flex-row text-gray-88 justify-start gap-10 pb-5 pr-2 mt-5 whitespace-normal'>
                            <div className='flex flex-row items-center text-sm gap-2'>
                                <AiFillFolder/>
                                <Link to='/#' className='cursor-pointer hover:text-gray-white text-s'>اخبار سایت</Link>
                            </div>
                            <div className='flex flex-row items-center text-sm gap-2'>
                                <ImEye/>
                                <span>0</span>
                            </div>
                        </div>
                        <button className='flex gap-1 cursor-pointer flex-row w-full text-white  bg-green-bt px-2 py-3 justify-center items-center hover:bg-sky-blue transition-all'>
                            <TfiMenuAlt className='2xl:w-12 2xl:h-12'/>
                            <Link to={{pathname:'/articles/article', search:`name=${article.title}`}} className='2xl:text-4xl 2xl:p-6'>توضیحات بیشتر</Link>
                        </button>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
    <div>
        <FixedIcon />
      </div>
      <footer>
        <Footer />
      </footer>
      </main>
  )
}

export default Articles
