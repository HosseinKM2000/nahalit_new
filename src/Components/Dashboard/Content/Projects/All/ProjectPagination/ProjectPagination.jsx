import React , { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector , useDispatch } from 'react-redux';
import All from '../All';
import { setScrollUp } from '../../../../../../features/dashboard/dashboardSlice';
import Edite from '../../Edite/Edite';
import loading from '../../../../../../assets/img/Ripple-0.8s-200px.svg';
import { getProjects } from '../../../../../../features/dashboard/action';

function ProjectPagination() {

    const [showDetails,setShowDetails] = useState({status:false,value:''});
    const [itemOffset, setItemOffset] = useState(0);
    const isLoading = useSelector(state => state.dashboard.projectsLoading);
    const projects = useSelector(state => state.dashboard.projects) || [];
 
    const dispatch = useDispatch();
    const mobile = window.innerWidth <= 425 ? true : false;
    const itemsPerPage = 20;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = projects.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(projects.length / itemsPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % projects.length;
        dispatch(setScrollUp());
        setItemOffset(newOffset)
      };     
    useEffect(()=> {
        dispatch(getProjects())
    },[])
    
  return (
    <>
    {
        isLoading
        ?
        <div className='h-[4rem] w-full lg:w-[27%] flex items-center justify-center'>
          <img src={loading} alt="loading" className='w-[30%]'/>
        </div>
        :
        <>
        {
            !showDetails.status
            ?
            <>
            <All currentItems={currentItems} setShowDetails={setShowDetails} />
            <ReactPaginate
            breakLabel="..."
            nextLabel={mobile ? '>>' : "برگه بعدی >>"}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={mobile ? '<<' : "<< برگه قبلی"}
            renderOnZeroPageCount={null}
            className='pagination'
            activeClassName='active'
            previousClassName='preBtn'
            nextClassName='nextBtn'
            />
            </>
            :
            <Edite details={showDetails.value} setShowDetails={setShowDetails}/>
        }
        </>
    }
    </>
  )
}

export default ProjectPagination;