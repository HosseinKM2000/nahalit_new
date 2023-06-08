import { React , useEffect , useState}from 'react';
import { useSelector } from 'react-redux';
import Articles from '../../Content/Articles/Articles';
import Services from '../../Content/Services/Services';
import Products from '../../Content/Products/Products';
import Orders from '../../Content/Orders/Orders';
import Users from '../../Content/Users/Users';
import Commentes from '../../Content/Comments/Comments';
import WorkSample from '../../Content/WorkSample/WorkSample';
import Projects from '../../Content/Projects/Projects';

function ContentDash() {
  const [currentContent,setCurrentContent] = useState(null);
  const content = useSelector(state => state.dashboard.content);

  useEffect(()=>{
    switch(content)
    {
      case 'articles' : setCurrentContent(<Articles/>)
      break
      case 'services' : setCurrentContent(<Services/>)
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
      default : setCurrentContent(<Articles/>)
    }
  },[content])

  return (
    <div className='bg-[#363d4f] w-[75%] h-[90%] relative'>
        <div className='w-[15rem] h-[15rem] rounded-full bg-[#6FEDD6] blur-[10rem] absolute top-[1rem] right-[1rem] z-0'></div>
        <div className='w-[10rem] h-[10rem] rounded-full bg-[#6FEDD6] blur-[10rem] absolute bottom-[1rem] left-[1rem] z-0'></div>
        {
          currentContent
        }
    </div>
  )
}

export default ContentDash;