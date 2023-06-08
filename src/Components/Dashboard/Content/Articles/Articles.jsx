import React from 'react';
import { useSelector } from 'react-redux';
import AllArticle from './AllArticle/AllArticle';
import NewArticle from './NewArticle/NewArticle';

function Articles() {

  const Criterion = useSelector(state=> state.dashboard.articleSwitch)

  return (
    <div className='w-full p-10'>
      {
        Criterion === 'all'
        ? <AllArticle/>
        : <NewArticle/>
      }
    </div>
  )
}

export default Articles;