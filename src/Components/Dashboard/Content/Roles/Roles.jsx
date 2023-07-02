import { React , useState , useEffect } from 'react';
import { useSelector } from 'react-redux';
import AllRoles from './AllRoles/AllRoles';
import NewRole from './NewRole/NewRole';

function Roles() {
    const [innerCommponent,setInnerCommponent] = useState(<></>);
    const Criterion = useSelector(state=> state.dashboard.rolesSwitch);
    useEffect(()=>{
        switch(Criterion)
        {
            case 'all' : setInnerCommponent(<AllRoles/>);
            break;
            case 'new' : setInnerCommponent(<NewRole/>)
            break;
            default : setInnerCommponent(<></>)
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

export default Roles;