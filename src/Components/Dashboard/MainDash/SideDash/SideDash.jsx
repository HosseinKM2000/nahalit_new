import {React , useState , useEffect} from 'react';
import {BiCategory} from 'react-icons/bi';
import {MdOutlineArrowLeft , MdOutlineArticle , MdShoppingCart , MdRoomService , MdWorkspaces} from 'react-icons/md';
import {FiShoppingBag} from 'react-icons/fi';
import {ImUsers} from 'react-icons/im';
import {GiClockwork} from 'react-icons/gi';
import {FaRegComments} from 'react-icons/fa';
import {setContent} from '../../../../features/dashboard/dashboardSlice';
import { useSelector , useDispatch} from 'react-redux';

function SideDash() {

  const [cRotate,setCRotate] = useState(false);
  const content = useSelector(state => state.dashboard.content);
  const dispatch = useDispatch();
  console.log(content)

  return (
    <div className='background-gra-green w-[25%] h-[90%] z-10 flex justify-center px-1 pt-5'>
      <ul className='w-full flex flex-col items-center gap-3'>
        <div onClick={()=>setCRotate(!cRotate)} className='flex justify-between items-center rounded-sm w-[70%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300'>
         <BiCategory className='bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]'/>
         <li className='text-white font-bold text-xl  text-center'>دسته بندی</li>
         <MdOutlineArrowLeft className='text-white w-[1.5rem] h-[1.5rem] transition-all duration-300' style={{rotate:cRotate?'-90deg':'0deg'}}/>
        </div>
        <div onClick={()=>dispatch(setContent('articles'))} className='flex justify-between items-center rounded-sm w-[70%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300'>
         <MdOutlineArticle className='bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]'/>
         <li className='text-white font-bold text-xl  text-center'>مقالات</li>
         <div className='w-[1.5rem] h-[1.5rem]'></div>
        </div>
        <div onClick={()=>dispatch(setContent('services'))} className='flex justify-between items-center rounded-sm w-[70%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300'>
         <MdRoomService className='bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]'/>
         <li className='text-white font-bold text-xl  text-center'>خدمات</li>
         <div className='w-[1.5rem] h-[1.5rem]'></div>
        </div>
        <div onClick={()=>dispatch(setContent('workSample'))} className='flex justify-between items-center rounded-sm w-[70%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300'>
         <MdWorkspaces className='bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]'/>
         <li className='text-white font-bold text-xl  text-center'>نمونه کار ها</li>
         <div className='w-[1.5rem] h-[1.5rem]'></div>
        </div>
        <div onClick={()=>dispatch(setContent('products'))} className='flex justify-between items-center rounded-sm w-[70%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300'>
         <FiShoppingBag className='bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]'/>
         <li className='text-white font-bold text-xl  text-center'>محصولات</li>
         <div className='w-[1.5rem] h-[1.5rem]'></div>
        </div>
        <div onClick={()=>dispatch(setContent('users'))} className='flex justify-between items-center rounded-sm w-[70%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300'>
         <ImUsers className='bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]'/>
         <li className='text-white font-bold text-xl  text-center'>کاربران</li>
         <div className='w-[1.5rem] h-[1.5rem]'></div>
        </div>
        <div onClick={()=>dispatch(setContent('orders'))} className='flex justify-between items-center rounded-sm w-[70%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300'>
         <MdShoppingCart className='bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]'/>
         <li className='text-white font-bold text-xl  text-center'>سفارش ها</li>
         <div className='w-[1.5rem] h-[1.5rem]'></div>
        </div>
        <div onClick={()=>(dispatch(setContent('projects')))} className='flex justify-between items-center rounded-sm w-[70%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300'>
         <GiClockwork className='bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]'/>
         <li className='text-white font-bold text-xl  text-center'>پروژه ها</li>
         <div className='w-[1.5rem] h-[1.5rem]'></div>
        </div>
        <div onClick={()=>dispatch(setContent('commentes'))} className='flex justify-between items-center rounded-sm w-[70%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300'>
         <FaRegComments className='bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]'/>
         <li className='text-white font-bold text-xl  text-center'>نظرات</li>
         <div className='w-[1.5rem] h-[1.5rem]'></div>
        </div>
      </ul>
    </div>
  )
}

export default SideDash;


// bg-[#28323d]