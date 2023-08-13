import React , { useEffect , useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setScrollUp } from '../../../../../features/dashboard/dashboardSlice';
import ReactPaginate from 'react-paginate';
import Users from '../Users';
import loading from '../../../../../assets/img/Ripple-0.8s-200px.svg';
import { getUsers } from '../../../../../features/dashboard/action';

function UsersPagination() {

  const users = useSelector(state => state.dashboard.users);
    const isLoading = useSelector(state => state.dashboard.usersLoading);
    const [itemOffset, setItemOffset] = useState(0);
    const mobile = window.innerWidth <= 425 ? true : false;
    const itemsPerPage = 20;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = users.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(users.length / itemsPerPage);
    const dispatch = useDispatch();
    console.log(users)
    useEffect(()=>{
      dispatch(getUsers())
    },[]);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % users.length;
      dispatch(setScrollUp());
      setItemOffset(newOffset);
    };


  return (
    <>
      {
        isLoading 
        ?
        <div className='h-[10rem] w-[full] flex items-center justify-center'>
           <img src={loading} alt="loading" className='w-[30%]'/>
        </div>
        :
        <>
        <Users currentItems={currentItems} />
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
      }
  </>
  )
}

export default UsersPagination;