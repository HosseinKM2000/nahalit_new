import { React , useState , useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProjectPagination from './All/ProjectPagination/ProjectPagination';
import New from './New/New';

function Projects() {
  const [innerCommponent,setInnerCommponent] = useState(<></>)
  const Criterion = useSelector(state => state.dashboard.projectSwitch);
  
  useEffect(()=>{
    if(Criterion === 'all')
    {
      setInnerCommponent(<ProjectPagination/>)
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

export default Projects;