import {Raect , useState , useEffect} from 'react';
import { useSelector } from 'react-redux';
import ParentsCate from './ParentsCate/ParentsCate';
import FirstChildrenCate from './FirstChildrenCate/FirstChildrenCate';
import SecondChildrenCate from './SecondChildrenCate/SecondChildrenCate';

function Categories() {

  const [innerCommponent,setInnerCommponent] = useState(<></>)
  const Criterion = useSelector(state => state.dashboard.categoriesSwitch.key);

  useEffect(()=>{
    if(Criterion === 'PARENT')
    {
      setInnerCommponent(<ParentsCate/>)
    }
    else if(Criterion === 'FIRSTCHILDREN')
    {
      setInnerCommponent(<FirstChildrenCate/>)
    }
    else if(Criterion === 'SECONDCHILDREN')
    {                      
      setInnerCommponent(<SecondChildrenCate/>)
    }
    console.log(Criterion)
  },[Criterion])


  return (
    <div className='w-full p-10'>
      {
        innerCommponent
      }
    </div>
  )
}

export default Categories;