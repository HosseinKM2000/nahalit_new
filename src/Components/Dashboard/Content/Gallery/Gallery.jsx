import { React , useState , useEffect} from 'react';
import { useSelector } from 'react-redux';
import All from './All/All';
import New from './New/New';

function Gallery() {
  const [innerCommponent,setInnerCommponent] = useState(<></>)
  const Criterion = useSelector(state => state.dashboard.gallerySwitch);
  
  useEffect(()=>{
    if(Criterion === 'all')
    {
      setInnerCommponent(<All/>)
    }
    else if(Criterion === 'new')
    {
      setInnerCommponent(<New/>)
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