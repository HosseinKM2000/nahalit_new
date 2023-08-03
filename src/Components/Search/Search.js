import React, { useRef, useState } from "react";
import { FaStore } from 'react-icons/fa';
import { MdOutlineArticle } from 'react-icons/md';

const Search = () => {
  const [suggest,setSuggest] = useState(false);
  const searchRef = useRef();
  return (
    <div className="w-[100%] relative flex items-center justify-center my-10">
      <form className="flex md:w-[60%] 2xl:w-[30%] w-[90%] flex-row border-2 border-solid border-[#07B235] py-1 px-2 rounded-full">
        <input
          type="search"
          ref={searchRef}
          onChange={(e)=>e.target.value === '' ? setSuggest(false) : null}
          placeholder="دنبال چی میگردی؟"
          className="w-full py-1 px-5 text outline-0 placeholder:text-black placeholder:text-xs md:placeholder:text-md focus:placeholder:text-white transition-all  duration-500"
        />
        <button
          type="button"
          className="flex items-center justify-center whitespace-nowrap px-3 py-1 text-sm  md:text-md md:px-8 bg-[#07B235] hover:bg-[#2ac954] transition-all duration-300 rounded-full text-white"
          onClick={(e)=>{
            searchRef.current.value === '' 
            ? console.log()
            : setSuggest(true)
          }}
        >
          جستجو
        </button>
      </form>
      <div className='w-[40rem] absolute mx-auto top-10 flex flex-col bg-white mt-5 px-1 py-3 gap-3 transition-allS' style={{boxShadow:'0px 0px 5px 1px #686868',opacity:suggest?1:0,transition:'all 0.3s'}}>
            <div className='w-full cursor-default flex gap-1 items-center p-1 hover:text-white hover:bg-[#c2c2c2] text-[#127218]'>
                <span className='text-sm font-[shabnammedium]'>جستجو در محصولات</span>
                <FaStore className='text-xl'/>
            </div>
            <div className='w-full cursor-default flex gap-1 p-1 hover:text-white hover:bg-[#c2c2c2] items-center text-[#127218]'>
                <span className='text-sm font-[shabnammedium]'>جستجو در مقالات</span>
                <MdOutlineArticle className='text-xl'/>
            </div>
        </div>
    </div>
  );
};

export default Search;
