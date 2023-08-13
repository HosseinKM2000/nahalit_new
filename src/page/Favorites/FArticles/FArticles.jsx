import React , { useState , useEffect } from 'react';
import Cookies from 'js-cookie';
import EmptyFavorite from '../../../Components/EmptyFavorite/EmptyFavorite';
import { useLocation } from 'react-router-dom';

function FArticles() {
    const [favoriteArt,setFavoriteArt] = useState([]);
    const [favArticlesID,setFavArticlesID] = useState(localStorage.getItem('favArticles') === null ? [] : JSON.parse(localStorage.getItem('favArticles')));
    const location = useLocation();
    const urlPath = location.pathname;

    // articles
    const articles = [];
    for (let a = 1; a <= 30; a++) {
        articles.push({
            id: a,
            title: `articles` + a,
        })
    }

    const filterProductsById = (ids, articles) => {
        const filteredArticles = []; 
        for (let i = 0; i < articles.length; i++) {
          const article = articles[i];
      
          if (ids.includes(article.id)) {
            filteredArticles.push(article);
          }
        }
        return filteredArticles;
      }

    const deleteFromFavorites = (id) => {
        setFavoriteArt(favoriteArt.filter(item => item.id !== id));
        let list = JSON.stringify(favArticlesID.filter(item => item !== id))
        setFavArticlesID(favArticlesID.filter(item => item !== id));
        localStorage.setItem('favProducts',list);
    }

    useEffect(() => {
        if(favArticlesID.length !== 0) setFavoriteArt(filterProductsById(favArticlesID,articles))
    },[])

  return (
    <div>
        {
            favArticlesID.length === 0 
            ?
            <EmptyFavorite title={'مقالات'}/>
            :
            <div className='flex flex-col gap-y-5 md:gap-y-3 bg-gray-100 p-5'>
                {
                    favoriteArt.map((item,index) => (
                        <div className='flex flex-col gap-y-3 sm:gap-y-5 md:flex-row items-center bg-gray-200 p-3 justify-between rounded-sm shadow-[0px_0px_10px_-5px_#010101]'>
                            <img src="" alt="img"  className={urlPath === '/userPage/favorites' ? 'w-[5rem] h-[5rem] md:w-[3rem] md:h-[3rem] bg-gray-600' : 'w-[5rem] h-[5rem] bg-gray-600'}/>
                            <span className='text-[1rem] font-[shabnambold] text-stone-500'>{item.title}</span>
                            <p className={urlPath === '/userPage/favorites' ? 'w-[10rem] 2xl:w-[20rem] line-clamp-1 text-sm' : 'w-[10rem] md:w-[20rem] line-clamp-3 md:line-clamp-1 text-sm text-center'}>متن آزمایشی برای تست پروژه ها  شسیسبسیبس سیزسیبییبلبببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببببسبسیبیسبی کوچک</p>
                            <span className='text-sm font-[shabnambold]'>1401/03/15</span>
                            <button className='bg-orange-500 text-white rounded-md px-0 w-1/2 md:w-fit md:px-2 lg:px-5 text-xs transition-all hover:bg-orange-400 py-1'>نمایش</button>
                            <button className='bg-red-500 text-white rounded-md px-0 w-1/2 md:w-fit md:px-2 lg:px-5 text-xs transition-all hover:bg-red-400 py-1' onClick={()=>deleteFromFavorites(item.id)}>حذف</button>
                        </div>
                    ))
                }
            </div>
        }
    </div>
  )
}

export default FArticles;