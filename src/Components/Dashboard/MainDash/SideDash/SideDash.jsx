import {React , useState} from 'react';
import {BiCategory} from 'react-icons/bi';
import {MdOutlineArrowLeft , MdOutlineArticle , MdShoppingCart , MdRoomService , MdWorkspaces} from 'react-icons/md';
import {FiShoppingBag} from 'react-icons/fi';
import {ImUsers} from 'react-icons/im';
import {GiClockwork} from 'react-icons/gi';
import {FaRegComments} from 'react-icons/fa';
import {AiOutlinePicture} from 'react-icons/ai';
import {RiHomeSmileFill} from 'react-icons/ri';
import {setContent,setSwitch} from '../../../../features/dashboard/dashboardSlice';
import { useSelector , useDispatch} from 'react-redux';

function SideDash() {

  // const [cRotate,setCRotate] = useState(false);
  const [aRotate,setARotate] = useState(false);
  const [hRotate,setHRotate] = useState(false);
  const [pRotate,setPRotate] = useState(false);
  const [cRotate,setCRotate] = useState(false);
  const [gRotate,setGRotate] = useState(false);
  const content = useSelector(state => state.dashboard.content);
  const aCriterion = useSelector(state => state.dashboard.articlesSwitch);
  const hCriterion = useSelector(state => state.dashboard.homeSwitch);
  const pCriterion = useSelector(state => state.dashboard.productsSwitch);
  const gCriterion = useSelector(state => state.dashboard.gallerySwitch);
  const dispatch = useDispatch();

  const listSwitch = (value) => {
    dispatch(setContent(value))
    if(aRotate | pRotate | cRotate | gRotate && value !== 'articles')
    {
      setARotate(false);
      setPRotate(false);
      setCRotate(false);
      setGRotate(false);
    }
    else if(hRotate | pRotate | cRotate | gRotate && value !== 'homePage')
    {
      setHRotate(false);
      setPRotate(false);
      setCRotate(false);
      setGRotate(false);
    }
  }
console.log(aCriterion)
  return (
    <div className='background-gra-green dashboard_side w-[25%] overflow-y-scroll h-[90%]  z-10 flex justify-center px-1 py-5'>
      <ul className='w-full flex flex-col items-center gap-3'>
        <div  onClick={()=>{
          listSwitch('categories')
        }} style={{backgroundColor:content==='categories'?'#232c38':''}} className='flex justify-between items-center rounded-sm w-[80%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300'>
         <BiCategory className='bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]'/>
         <li className='text-white font-bold text-xl  text-center'>دسته بندی</li>
         <div className='w-[1.5rem] h-[1.5rem]'></div>
        </div>
        <div className='w-full flex flex-col items-center'>
         <div onClick={()=>{
          listSwitch('homePage')
          setHRotate(!hRotate)
          dispatch(setSwitch({key:'homePage',value:'describe'}))
        }}
        style={{backgroundColor:content==='homePage'?'#232c38':''}} 
        className='flex justify-between items-center rounded-sm w-[80%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300'>
         <RiHomeSmileFill className='bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]'/>
         <li className='text-white font-bold text-xl  text-center'>صفحه اصلی</li>
         <MdOutlineArrowLeft className='text-white w-[1.5rem] h-[1.5rem] transition-all duration-300' style={{rotate:hRotate?'-90deg':'0deg'}}/>
         </div>
         <div className='flex flex-col text-white gap-5 bg-[#313e4d] justify-center items-center rounded-sm w-[50%] cursor-default transition-all ease-in-out duration-400' style={{height:hRotate?'fit-content':'0px',padding:hRotate?'10px':'0px',overflow:hRotate?'':'hidden',visibility:hRotate?'visible':'hidden',marginTop:hRotate?'1rem':'0px'}} >
         <button className='font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1' onClick={()=>dispatch(setSwitch({key:'homePage',value:'describe'}))} style={{backgroundColor:hCriterion === 'describe' ? '#ffffff4d' : ''}}>توضیحات</button>
          <button className='font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1' onClick={()=>dispatch(setSwitch({key:'homePage',value:'services'}))} style={{backgroundColor:hCriterion === 'services' ? '#ffffff4d' : ''}}>خدمات</button>
          <button className='font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1' onClick={()=>dispatch(setSwitch({key:'homePage',value:'mainSlider'}))} style={{backgroundColor:hCriterion === 'mainSlider' ? '#ffffff4d' : ''}}>اسلایدر اصلی</button>
          <button className='font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1' onClick={()=>dispatch(setSwitch({key:'homePage',value:'secondSlider'}))} style={{backgroundColor:hCriterion === 'secondSlider' ? '#ffffff4d' : ''}}>اسلایدر دوم</button>
          <button className='font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1' onClick={()=>dispatch(setSwitch({key:'homePage',value:'thirdSlider'}))} style={{backgroundColor:hCriterion === 'thirdSlider' ? '#ffffff4d' : ''}}>اسلایدر سوم</button>
          <button className='font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1' onClick={()=>dispatch(setSwitch({key:'homePage',value:'plans'}))} style={{backgroundColor:hCriterion === 'plans' ? '#ffffff4d' : ''}}>پلن ها</button>
          <button className='font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1' onClick={()=>dispatch(setSwitch({key:'homePage',value:'property'}))} style={{backgroundColor:hCriterion === 'property' ? '#ffffff4d' : ''}}>ویژگی ها</button>
          <button className='font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1' onClick={()=>dispatch(setSwitch({key:'homePage',value:'lastArticles'}))} style={{backgroundColor:hCriterion === 'lastArticles' ? '#ffffff4d' : ''}}>آخرین مقالات</button>
         </div>
        </div>
        <div className='w-full flex flex-col items-center'>
         <div onClick={()=>{
          listSwitch('articles')
          setARotate(!aRotate)
          dispatch(setSwitch({key:'articles',value:'all'}))
        }}
        style={{backgroundColor:content==='articles'?'#232c38':''}} 
        className='flex justify-between items-center rounded-sm w-[80%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300'>
         <MdOutlineArticle className='bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]'/>
         <li className='text-white font-bold text-xl  text-center'>مقالات</li>
         <MdOutlineArrowLeft className='text-white w-[1.5rem] h-[1.5rem] transition-all duration-300' style={{rotate:aRotate?'-90deg':'0deg'}}/>
         </div>
         <div className='flex flex-col text-white gap-5 bg-[#313e4d] justify-center items-center rounded-sm w-[50%] cursor-default transition-all ease-in-out duration-400' style={{height:aRotate?'fit-content':'0px',padding:aRotate?'10px':'0px',overflow:aRotate?'':'hidden',visibility:aRotate?'visible':'hidden',marginTop:aRotate?'1rem':'0px'}} >
          <button className='font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1' onClick={()=>dispatch(setSwitch({key:'articles',value:'all'}))} style={{backgroundColor:aCriterion === 'all' ? '#ffffff4d' : ''}}>همه مقالات</button>
          <button className='font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1' onClick={()=>dispatch(setSwitch({key:'articles',value:'new'}))} style={{backgroundColor:aCriterion === 'new' ? '#ffffff4d' : ''}}>مقاله جدید</button>
         </div>
        </div>
        <div onClick={()=>listSwitch('services')}  style={{backgroundColor:content==='services'?'#232c38':''}}  className='flex justify-between items-center rounded-sm w-[80%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300'>
         <MdRoomService className='bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]'/>
         <li className='text-white font-bold text-xl  text-center'>خدمات</li>
         <div className='w-[1.5rem] h-[1.5rem]'></div>
        </div>
        <div onClick={()=>listSwitch('workSample')}  style={{backgroundColor:content==='workSample'?'#232c38':''}}  className='flex justify-between items-center rounded-sm w-[80%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300'>
         <MdWorkspaces className='bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]'/>
         <li className='text-white font-bold text-xl  text-center'>نمونه کار ها</li>
         <div className='w-[1.5rem] h-[1.5rem]'></div>
        </div>
        <div className='w-full flex flex-col items-center'>
        <div onClick={()=>{
          listSwitch('products')
          setPRotate(!pRotate)
          dispatch(setSwitch({key:'products',value:'all',id:null}))
        }}  style={{backgroundColor:content==='products'?'#232c38':''}}  className='flex justify-between items-center rounded-sm w-[80%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300'>
         <FiShoppingBag className='bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]'/>
         <li className='text-white font-bold text-xl  text-center'>محصولات</li>
         <MdOutlineArrowLeft className='text-white w-[1.5rem] h-[1.5rem] transition-all duration-300' style={{rotate:pRotate?'-90deg':'0deg'}}/>
        </div>
          <div className='flex flex-col text-white gap-5 bg-[#313e4d] justify-center items-center rounded-sm w-[50%] cursor-default transition-all ease-in-out duration-400' style={{height:pRotate?'fit-content':'0px',padding:pRotate?'10px':'0px',overflow:pRotate?'':'hidden',visibility:pRotate?'visible':'hidden',marginTop:pRotate?'1rem':'0px'}} >
            <button className='font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1' onClick={()=>dispatch(setSwitch({key:'products',value:'all',id:null}))} style={{backgroundColor:pCriterion === 'all' || pCriterion === 'edite' ? '#ffffff4d' : ''}}>همه محصولات</button>
            <button className='font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1' onClick={()=>dispatch(setSwitch({key:'products',value:'new',id:null}))} style={{backgroundColor:pCriterion === 'new' ? '#ffffff4d' : ''}}>محصول جدید</button>
          </div>
        </div>
        <div className='w-full flex flex-col items-center'>
        <div onClick={()=>{
          listSwitch('gallery')
          setGRotate(!gRotate)
          dispatch(setSwitch({key:'gallery',value:'all'}))
        }}  style={{backgroundColor:content==='gallery'?'#232c38':''}}  className='flex justify-between items-center rounded-sm w-[80%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300'>
         <AiOutlinePicture className='bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]'/>
         <li className='text-white font-bold text-xl  text-center'>گالری</li>
         <MdOutlineArrowLeft className='text-white w-[1.5rem] h-[1.5rem] transition-all duration-300' style={{rotate:gRotate?'-90deg':'0deg'}}/>
        </div>
          <div className='flex flex-col text-white gap-5 bg-[#313e4d] justify-center items-center rounded-sm w-[50%] cursor-default transition-all ease-in-out duration-400' style={{height:gRotate?'fit-content':'0px',padding:gRotate?'10px':'0px',overflow:gRotate?'':'hidden',visibility:gRotate?'visible':'hidden',marginTop:gRotate?'1rem':'0px'}} >
            <button className='font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1' onClick={()=>dispatch(setSwitch({key:'gallery',value:'all'}))} style={{backgroundColor:gCriterion === 'all' ? '#ffffff4d' : ''}}>همه</button>
            <button className='font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1' onClick={()=>dispatch(setSwitch({key:'gallery',value:'new'}))} style={{backgroundColor:gCriterion === 'new' ? '#ffffff4d' : ''}}>جدید</button>
          </div>
        </div>
        <div onClick={()=>listSwitch('users')}  style={{backgroundColor:content==='users'?'#232c38':''}}  className='flex justify-between items-center rounded-sm w-[80%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300'>
         <ImUsers className='bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]'/>
         <li className='text-white font-bold text-xl  text-center'>کاربران</li>
         <div className='w-[1.5rem] h-[1.5rem]'></div>
        </div>
        <div onClick={()=>listSwitch('orders')}  style={{backgroundColor:content==='orders'?'#232c38':''}}  className='flex justify-between items-center rounded-sm w-[80%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300'>
         <MdShoppingCart className='bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]'/>
         <li className='text-white font-bold text-xl  text-center'>سفارش ها</li>
         <div className='w-[1.5rem] h-[1.5rem]'></div>
        </div>
        <div onClick={()=>listSwitch('projects')}  style={{backgroundColor:content==='projects'?'#232c38':''}}  className='flex justify-between items-center rounded-sm w-[80%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300'>
         <GiClockwork className='bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]'/>
         <li className='text-white font-bold text-xl  text-center'>پروژه ها</li>
         <div className='w-[1.5rem] h-[1.5rem]'></div>
        </div>
        <div onClick={()=>listSwitch('commentes')}  style={{backgroundColor:content==='commentes'?'#232c38':''}}  className='flex justify-between items-center rounded-sm w-[80%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300'>
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