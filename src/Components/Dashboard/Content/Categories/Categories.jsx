import {Raect , useState , useEffect} from 'react';
import { useSelector } from 'react-redux';
import ParentsCate from './ParentsCate/ParentsCate';
import ChildrenCate from './ChildrenCate/ChildrenCate';

function Categories() {

  const [innerCommponent,setInnerCommponent] = useState(<></>)
  const Criterion = useSelector(state => state.dashboard.categoriesSwitch.key);

  useEffect(()=>{
    if(Criterion === 'PARENT')
    {
      setInnerCommponent(<ParentsCate/>)
    }
    else if(Criterion === 'CHILDREN_1')
    {
      setInnerCommponent(<ChildrenCate/>)
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

export default Categories;