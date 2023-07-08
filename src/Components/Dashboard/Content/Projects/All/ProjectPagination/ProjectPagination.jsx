import React , { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector , useDispatch } from 'react-redux';
import All from '../All';
import { setScrollUp } from '../../../../../../features/dashboard/dashboardSlice';
import Edite from '../../Edite/Edite';
import loading from '../../../../../../assets/img/Ripple-0.8s-200px.svg';

function ProjectPagination() {

    const [showDetails,setShowDetails] = useState({status:false,value:''});
    const [itemOffset, setItemOffset] = useState(0);
    const categories = ["تحقیقاتی", "صنعتی", "تجاری"];
    const projects = [];
    for (let i = 0; i < 50; i++) {
        const project = {
            "عنوان": `پروژه ${i+1}`,
            "سرپرست": `سرپرست پروژه ${i+1}`,
            "قیمت": Math.floor(Math.random() * 4900000) + 100000,
            "درصد پیشرفت": Math.floor(Math.random() * 101), // تغییر اعمال شده است
            "دسته بندی": categories[Math.floor(Math.random() * categories.length)],
            colorCode:Math.floor(Math.random()*16777215).toString(16)
            
        };
        projects.push(project);
    }
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
    
  return (
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
  )
}

export default ProjectPagination;