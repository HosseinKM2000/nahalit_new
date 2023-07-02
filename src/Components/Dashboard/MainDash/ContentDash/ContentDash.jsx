import { React , useEffect , useState , useRef }from 'react';
import { useSelector } from 'react-redux';
import Articles from '../../Content/Articles/Articles';
import Products from '../../Content/Products/Products';
import Orders from '../../Content/Orders/Orders';
import Users from '../../Content/Users/Users';
import Commentes from '../../Content/Comments/Comments';
import WorkSample from '../../Content/WorkSample/WorkSample';
import Projects from '../../Content/Projects/Projects';
import Categories from '../../Content/Categories/Categories';
import Gallery from '../../Content/Gallery/Gallery';
import Roles from '../../Content/Roles/Roles';

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
      case 'orders' : setCurrentContent(<Orders/>)
      break
      case 'users' : setCurrentContent(<Users/>)
      break
      case 'commentes' : setCurrentContent(<Commentes/>)
      break
      case 'workSample' : setCurrentContent(<WorkSample/>)
      break
      case 'projects' : setCurrentContent(<Projects/>)
      break
      case 'gallery' : setCurrentContent(<Gallery/>)
      break
      case 'roles' : setCurrentContent(<Roles/>)
      break;
      default : setCurrentContent('این بخش وجود ندارد')
    }
  },[content])
  useEffect(() => {
    bodyRef.current.scrollTop = 0
  },[scrollUp])
  return (
    <div ref={bodyRef} className='bg-[#363d4f] scroll-dash-content w-[75%] h-[90%] max-h-screen overflow-y-scroll relative'>
        {
          currentContent
        }
    </div>
  )
}

export default ContentDash;