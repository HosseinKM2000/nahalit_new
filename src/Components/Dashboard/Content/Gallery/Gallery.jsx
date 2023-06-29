import { React , useState , useEffect} from 'react';
import { useSelector } from 'react-redux';
import GalleriesPagination from './All/GalleriesPagination/GalleriesPagination';
import New from './New/New';
import Edite from './Edite/Edite';

function Gallery() {
  const [innerCommponent,setInnerCommponent] = useState(<></>)
  const Criterion = useSelector(state => state.dashboard.gallerySwitch);
  
  useEffect(()=>{
    if(Criterion === 'all')
    {
      setInnerCommponent(<GalleriesPagination/>)
    }
    else if(Criterion === 'new')
    {
      setInnerCommponent(<New/>)
    }
    else if(Criterion === 'edite')
    {
      setInnerCommponent(<Edite/>)
    }

  },[Criterion])

  return (
    <div className='w-full p-10'>
      {
        innerCommponent
      }
    </div>
  )
}

export default Gallery;