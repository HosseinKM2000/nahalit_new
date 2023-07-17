import { React, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { setScrollUp } from '../../../../../../features/dashboard/dashboardSlice';
import Edite from '../../Edite/Edite';
import All from '../All';

function WorkSamplePagination() {
    const workSample = [
        {
            "title": "مدیریت پروژه",
            "manager": "جف بزوس",
            "start_date": "15/03/2002"
        },
        {
            "title": "مدیریت محصول",
            "manager": "مارک زوکربرگ",
            "start_date": "04/02/2004"
        },
        {
            "title": "مدیریت محصول",
            "manager": "سوندر پیچای",
            "start_date": "07/04/2004"
        },
        {
            "title": "طراحی صنعتی",
            "manager": "جانی آیووی",
            "start_date": "01/08/1996"
        },
        {
            "title": "مدیریت محصول",
            "manager": "الون ماسک",
            "start_date": "01/07/2003"
        },
        {
            "title": "مدیریت پروژه",
            "manager": "ستفن ای. بالمر",
            "start_date": "01/01/1980"
        },
        {
            "title": "توسعه دهنده نرم افزار",
            "manager": "بیل گیتس",
            "start_date": "04/04/1975"
        },
        {
            "title": "مدیریت پروژه",
            "manager": "مایکل بلومبرگ",
            "start_date": "01/01/2002"
        },
        {
            "title": "مدیریت محصول",
            "manager": "جان دو",
            "start_date": "01/03/2000"
        },
        {
            "title": "مدیریت پروژه",
            "manager": "ژان-لوئیس گاسی",
            "start_date": "01/07/1998"
        },
        {
            "title": "مدیریت محصول",
            "manager": "جف دین",
            "start_date": "07/01/1997"
        },
        {
            "title": "مدیریت محصول",
            "manager": "آندی جاسکو",
            "start_date": "01/05/2000"
        },
        {
            "title": "مدیریت پروژه",
            "manager": "ماریسا مایر",
            "start_date": "01/07/1999"
        },
        {
            "title": "طراحی صنعتی",
            "manager": "جاناتان آیو",
            "start_date": "01/06/2006"
        },
        {
            "title": "مدیریت محصول",
            "manager": "تیم کوک",
            "start_date": "01/01/1998"
        },
        {
            "title": "مدیریت پروژه",
            "manager": "الن مولالی",
            "start_date": "01/10/2000"
        },
        {
            "title": "مدیریت محصول",
            "manager": "آدام چیری",
            "start_date": "01/06/2005"
        },
        {
            "title": "مدیریت محصول",
            "manager": "هنری بلوک",
            "start_date": "01/07/2007"
        },
        {
            "title": "مدیریت محصول",
            "manager": "جیمز دامبلدور",
            "start_date": "01/01/2001"
        },
        {
            "title": "مدیریت پروژه",
            "manager": "لری پیج",
            "start_date": "01/06/1998"
        }
    ]
    const [showDetails,setShowDetails] = useState({status:false,value:''});
    const [itemOffset, setItemOffset] = useState(0);
    const dispatch = useDispatch();
    const mobile = window.innerWidth <= 425 ? true : false;
    const itemsPerPage = 10;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = workSample.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(workSample.length / itemsPerPage);
    useEffect(()=>{
    },[]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % workSample.length;
        dispatch(setScrollUp());
        setItemOffset(newOffset)
      };

  return (
    <>
    {
         !showDetails.status
         ?
         <>
         <All currentItems={currentItems} setShowDetails={setShowDetails}/>
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

export default WorkSamplePagination;