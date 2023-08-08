import { React, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Articles from '../../Content/Articles/Articles';
import Categories from '../../Content/Categories/Categories';
import CommentsPagination from '../../Content/Comments/CommentsPagination/CommentsPagination';
import Gallery from '../../Content/Gallery/Gallery';
import OredersPagination from '../../Content/Orders/OrdersPagination/OredersPagination';
import Products from '../../Content/Products/Products';
import Projects from '../../Content/Projects/Projects';
import Roles from '../../Content/Roles/Roles';
import UsersPagination from '../../Content/Users/UsersPagination/UsersPagination';
import WorkSample from '../../Content/WorkSample/WorkSample';
import Discount from '../../Content/Discount/Discount';

function ContentDash() {
  const [currentContent,setCurrentContent] = useState(null);
  const content = useSelector(state => state.dashboard.content);
  const bodyRef = useRef();
  const scrollUp = useSelector(state => state.dashboard.scrollUp);
  

  useEffect(()=>{
    switch(content)
    {
      case 'categories' : setCurrentContent(<Categories/>)
      break
      case 'articles' : setCurrentContent(<Articles/>)
      break
      case 'products' : setCurrentContent(<Products/>)
      break
      case 'orders' : setCurrentContent(<OredersPagination/>)
      break
      case 'users' : setCurrentContent(<UsersPagination/>)
      break
      case 'commentes' : setCurrentContent(<CommentsPagination/>)
      break
      case 'workSample' : setCurrentContent(<WorkSample/>)
      break
      case 'projects' : setCurrentContent(<Projects/>)
      break
      case 'gallery' : setCurrentContent(<Gallery/>)
      break
      case 'roles' : setCurrentContent(<Roles/>)
      break;
      case 'discount' : setCurrentContent(<Discount/>)
      break;
      default : setCurrentContent('این بخش وجود ندارد')
    }
  },[content])
  useEffect(() => {
    bodyRef.current.scrollTop = 0
  },[scrollUp])
  return (
    <div ref={bodyRef} className='bg-[#363d4f] flex flex-col items-center justify-start scroll-dash-content w-full lg:w-[75%] xl:w-[80%] 2xl:w-[85%] h-[90%] max-h-screen overflow-y-scroll relative'>
        {
          currentContent
        }
    </div>
  )
}

export default ContentDash;