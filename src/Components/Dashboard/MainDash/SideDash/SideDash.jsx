import {React , useState} from 'react';
import { BiCategory , BiSolidMask} from 'react-icons/bi';
import {MdOutlineArrowLeft , MdOutlineArticle , MdShoppingCart  , MdWorkspaces} from 'react-icons/md';
import {FiShoppingBag} from 'react-icons/fi';
import {ImUsers} from 'react-icons/im';
import {GiClockwork} from 'react-icons/gi';
import {FaRegComments} from 'react-icons/fa';
import {AiOutlinePicture} from 'react-icons/ai';
import {setContent,setSwitch} from '../../../../features/dashboard/dashboardSlice';
import { useSelector , useDispatch} from 'react-redux';

function SideDash() {

  // const [cRotate,setCRotate] = useState(false);
  const [aRotate,setARotate] = useState(false);
  const [pRotate,setPRotate] = useState(false);
  const [cRotate,setCRotate] = useState(false);
  const [gRotate,setGRotate] = useState(false);
  const [rRotate,setRRotate] = useState(false);
  const [wRotate,setWRotate] = useState(false);
  const content = useSelector(state => state.dashboard.content);
  const aCriterion = useSelector(state => state.dashboard.articlesSwitch);
  const pCriterion = useSelector(state => state.dashboard.productsSwitch);
  const gCriterion = useSelector(state => state.dashboard.gallerySwitch);
  const rCriterion = useSelector(state => state.dashboard.rolesSwitch);
  const wCriterion = useSelector(state => state.dashboard.workSampleSwitch);
  const dispatch = useDispatch();

  const listSwitch = (value) => {
    dispatch(setContent(value))
    if(aRotate | cRotate | gRotate | rRotate | wRotate && value !== 'articles')
    {
      setCRotate(false);
      setGRotate(false);
      setRRotate(false);
      setWRotate(false);
      setARotate(false);
    }
    else if( pRotate | cRotate | gRotate | rRotate | wRotate && value !== 'products')
    {
      setCRotate(false);
      setGRotate(false);
      setRRotate(false);
      setWRotate(false);
      setPRotate(false);
    }
  }
console.log(aCriterion)
  return (
    <div className='background-gra-green dashboard_side w-[25%] overflow-y-scroll h-[90%]  z-10 flex justify-center px-1 py-5'>
      <ul className='w-full flex flex-col items-center gap-3'>
        <div  onClick={()=>{listSwitch('categories')}} style={{backgroundColor:content==='categories'?'#232c38':''}} className='flex justify-between items-center rounded-sm w-[80%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300'>
            <BiCategory className='bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]'/>
            <li className='text-white font-bold text-xl  text-center'>دسته بندی</li>
            <div className='w-[1.5rem] h-[1.5rem]'></div>
        </div>
        <div className='w-full flex flex-col items-center'>
            <div onClick={()=>{
              listSwitch('articles')
              setARotate(!aRotate)
              dispatch(setSwitch({key:'articles',value:'all',id:null}))
            }}
            style={{backgroundColor:content==='articles'?'#232c38':''}} 
            className='flex justify-between items-center rounded-sm w-[80%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300'>
            <MdOutlineArticle className='bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]'/>
            <li className='text-white font-bold text-xl  text-center'>مقالات</li>
            <MdOutlineArrowLeft className='text-white w-[1.5rem] h-[1.5rem] transition-all duration-300' style={{rotate:aRotate?'-90deg':'0deg'}}/>
            </div>
            <div className='flex flex-col text-white gap-5 bg-[#313e4d] justify-center items-center rounded-sm w-[50%] cursor-default transition-all ease-in-out duration-400' style={{height:aRotate?'fit-content':'0px',padding:aRotate?'10px':'0px',overflow:aRotate?'':'hidden',visibility:aRotate?'visible':'hidden',marginTop:aRotate?'1rem':'0px'}} >
              <button className='font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1' onClick={()=>dispatch(setSwitch({key:'articles',value:'all',id:null}))} style={{backgroundColor:aCriterion === 'all' || aCriterion === 'edite' ? '#ffffff4d' : ''}}>همه مقالات</button>
              <button className='font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1' onClick={()=>dispatch(setSwitch({key:'articles',value:'new',id:null}))} style={{backgroundColor:aCriterion === 'new' ? '#ffffff4d' : ''}}>مقاله جدید</button>
            </div>
        </div>
        <div className='w-full flex flex-col items-center'>
            <div onClick={()=>{
              listSwitch('workSample')
              setWRotate(!wRotate)
              dispatch(setSwitch({key:'workSample',value:'all'}))
              }}  style={{backgroundColor:content==='workSample'?'#232c38':''}}  className='flex justify-between items-center rounded-sm w-[80%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300'>
            <MdWorkspaces className='bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]'/>
            <li className='text-white font-bold text-xl  text-center'>نمونه کار ها</li>
            <MdOutlineArrowLeft className='text-white w-[1.5rem] h-[1.5rem] transition-all duration-300' style={{rotate:wRotate?'-90deg':'0deg'}}/>
            </div>
            <div className='flex flex-col text-white gap-5 bg-[#313e4d] justify-center items-center rounded-sm w-[50%] cursor-default transition-all ease-in-out duration-400' style={{height:wRotate?'fit-content':'0px',padding:wRotate?'10px':'0px',overflow:wRotate?'':'hidden',visibility:wRotate?'visible':'hidden',marginTop:wRotate?'1rem':'0px'}} >
                <button className='font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1' onClick={()=>dispatch(setSwitch({key:'workSample',value:'all',id:null}))} style={{backgroundColor:wCriterion === 'all' ? '#ffffff4d' : ''}}>همه</button>
                <button className='font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1' onClick={()=>dispatch(setSwitch({key:'workSample',value:'new',id:null}))} style={{backgroundColor:wCriterion === 'new' ? '#ffffff4d' : ''}}>افزودن</button>
            </div>
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
                <button className='font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1' onClick={()=>dispatch(setSwitch({key:'products',value:'all',id:null}))} style={{backgroundColor:pCriterion === 'all' || pCriterion === 'edite' || pCriterion === 'gallery' ? '#ffffff4d' : ''}}>همه محصولات</button>
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
                <button className='font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1' onClick={()=>dispatch(setSwitch({key:'gallery',value:'all'}))} style={{backgroundColor:gCriterion === 'all' || gCriterion === 'edite' ? '#ffffff4d' : ''}}>همه</button>
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
        <div className='w-full flex flex-col items-center'>
            <div onClick={()=>{
              listSwitch('roles')
              setRRotate(!rRotate)
              dispatch(setSwitch({key:'roles',value:'all'}))
            }}  style={{backgroundColor:content==='roles'?'#232c38':''}}  className='flex justify-between items-center rounded-sm w-[80%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300'>
              <BiSolidMask className='bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]'/>
              <li className='text-white font-bold text-xl  text-center'>نقش ها</li>
              <MdOutlineArrowLeft className='text-white w-[1.5rem] h-[1.5rem] transition-all duration-300' style={{rotate:rRotate?'-90deg':'0deg'}}/>
              </div>
              <div className='flex flex-col text-white gap-5 bg-[#313e4d] justify-center items-center rounded-sm w-[50%] cursor-default transition-all ease-in-out duration-400' style={{height:rRotate?'fit-content':'0px',padding:rRotate?'10px':'0px',overflow:rRotate?'':'hidden',visibility:rRotate?'visible':'hidden',marginTop:rRotate?'1rem':'0px'}} >
                <button className='font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1' onClick={()=>dispatch(setSwitch({key:'roles',value:'all'}))} style={{backgroundColor:rCriterion === 'all' || gCriterion === 'edite' ? '#ffffff4d' : ''}}>همه</button>
                <button className='font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1' onClick={()=>dispatch(setSwitch({key:'roles',value:'new'}))} style={{backgroundColor:rCriterion === 'new' ? '#ffffff4d' : ''}}>ایجاد</button>
              </div>
        </div>
        <hr className='w-full h-[3rem] py-1 border-none'/>
      </ul>
    </div>
  )
}

export default SideDash;


// bg-[#28323d]