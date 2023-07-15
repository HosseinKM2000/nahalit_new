import { React , useEffect , useState } from 'react';
import { useSelector } from 'react-redux';
import ArticlesPagination  from './AllArticles/ArticlesPagination/ArticlesPagination';
import NewArticle from './NewArticle/NewArticle';
import EditeArticle from './EditeArticle/EditeArticle';

function Articles() {
  const [innerCommponent,setInnerCommponent] = useState(<></>);
  const Criterion = useSelector(state=> state.dashboard.articlesSwitch)
  useEffect(()=>{
    switch(Criterion)
    {
      case "all" : setInnerCommponent(<ArticlesPagination/>);
      break;
      case "new" : setInnerCommponent(<NewArticle/>);
      break;
      case "edite" : setInnerCommponent(<EditeArticle/>)
      break;
      default : setInnerCommponent(<></>); 
    }
  },[Criterion])

  return (
    <div className='w-full p-3 md:p-10 flex flex-col items-center'>
      {
        innerCommponent
      }
    </div>
  )
}

export default Articles;